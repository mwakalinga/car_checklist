 /*jshint esversion: 6 */
 /* jshint expr: true */

const functions = firebase.functions();
const createNewUser = functions.httpsCallable('createUser');

function empty() {
    document.getElementById("errortxt").innerText = "";
}
let number = 0;

function validate() {
    let pass1 = document.getElementById("password1").value;
    let pass2 = document.getElementById("password2").value;
    //console.log(pass1);
    if (pass1 !== pass2) {
        document.getElementById("sucesstxt").innerText = "";
        document.getElementById("errortxt").innerText = "please check the password, are not equal!";
    } else {
        document.getElementById("errortxt").innerText = "";
        document.getElementById("sucesstxt").innerText = "password match. you may continue";
        //console.log("number seted to 1");
        number = 1;
    }
}

function sendData() {
    event.preventDefault();
   event.stopPropagation();

    document.getElementById("errortxt").innerText = "";
    document.getElementById("sucesstxt").innerText = "creating account, please wait";

    let mail = document.getElementById("email").value;
    let pass1 = document.getElementById("password1").value;
    let fname = document.getElementById("fullname").value;
    let pnumber = document.getElementById("phonenumber").value;
    let level = document.getElementById('claim_name').value;

    //chech level before continue
    if(level === "select"){
        document.getElementById("sucesstxt").innerText = "";
        document.getElementById("errortxt").innerText = "plaese choose user level";
    }else{
        number = 0;
        validate()
        if (number === 1) {
            //console.log("every thing is good");
            console.log(mail+pass1);

            //create acc
            let user = {
                email: mail,
                password: pass1,
                displayName: fname,
                phoneNumber: pnumber,
                claims: level
            };

            createNewUser(user).then(function(resp) {
                //console.log(resp);
                document.getElementById("errortxt").innerText = "";
                document.getElementById("sucesstxt").innerText = resp;
                alert(resp);
                window.location.href = "registration.html";
            }).catch(function(error) {
                //console.log(error);
                document.getElementById("sucesstxt").innerText = "";
                document.getElementById("errortxt").innerText = error;
            });
        }
    }
}

function pickclaim(claim){
     //console.log(claim);
     document.getElementById('claim_name').value =claim;
}



