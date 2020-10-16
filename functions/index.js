const functions = require('firebase-functions');
const admin = require('firebase-admin');
const FieldValue = require('firebase-admin').firestore.FieldValue;
admin.initializeApp();

//add adminRole
// exports.addAdminRole = functions.https.onCall((data, context) => {
//
//     if (context.auth.token.admin !== true) {
//         return {
//             error: 'your not admin'
//         }
//     }
//
//     return admin.auth().getUserByEmail(data.email).then(user => {
//         return admin.auth().setCustomUserClaims(user.uid, {
//             admin: true
//         });
//     }).then(() => {
//         return {
//             // eslint-disable-next-line no-template-curly-in-string
//             message: 'success'+data.email
//         }
//     }).catch(err => {
//         return err;
//     });
// });



//create role
class UnauthenticatedError extends Error {
 constructor(message) {
  super(message);
  this.message = message;
  this.type = 'UnauthenticatedError';
 }
}

class NotAnAdminError extends Error {
 constructor(message) {
  super(message);
  this.message = message;
  this.type = 'NotAnAdminError';
 }
}

exports.createUser = functions.https.onCall(async(data, context) => {

 try {
  //Checking that the user calling the Cloud Function is authenticated
  if (!context.auth) {
   throw new UnauthenticatedError('The user is not authenticated. Only authenticated Admin users can create new users.');
  }

  //Checking that the user calling the Cloud Function is an Admin user
  const callerUid = context.auth.uid; //uid of the user calling the Cloud Function
  const callerUserRecord = await admin.auth().getUser(callerUid);

  if (!callerUserRecord.customClaims.admin && !callerUserRecord.customClaims.SubAdmin ) {
   throw new NotAnAdminError('Only Admin users can create new users.');
  }

  if(data.claims === 'admin'){
   if (!callerUserRecord.customClaims.admin) {
    throw new NotAnAdminError('Only Admin users can create new admin.');
   }
  }

  const userCreationRequest = {
   userDetails: data.displayName,
   status: 'Pending',
   createdBy: callerUid,
   createdOn: FieldValue.serverTimestamp()
  };

  const userCreationRequestRef = await admin.firestore().collection("userCreationRequests").add(userCreationRequest);

  const newUser = {
   email: data.email,
   emailVerified: false,
   password: data.password,
   displayName: data.displayName,
   phoneNumber: data.phoneNumber,
   disabled: false,
  };

  //create new user
  const userRecord = await admin.auth().createUser(newUser);

  const userId = userRecord.uid;

  const claim= data.claims;
  const claims = {};
  claims[claim] = true;

  await admin.auth().setCustomUserClaims(userId, claims);

  const userData = await admin.firestore().collection("userlist").add(data);

  await userCreationRequestRef.update({ status: 'Treated', claims: claim });

  await userData.update({ password: '******************'});

  return {
      result: 'The new user account has been successfully created.'
  };

 } catch (error) {

  if (error.type === 'UnauthenticatedError') {
   throw new functions.https.HttpsError('unauthenticated', error.message);
  } else if (error.type === 'NotAnAdminError' || error.type === 'InvalidRoleError') {
   throw new functions.https.HttpsError('failed-precondition', error.message);
  } else {
   throw new functions.https.HttpsError('internal', error.message);
  }

 }

});