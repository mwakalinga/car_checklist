document.getElementById('verify').style.display = 'block';
document.getElementById('message').style.display = 'none';

function verify(){
    db.currentUser.sendEmailVerification().then(function () {
        alert("check your email to continue");
        document.getElementById('verify').style.display = 'none';
        document.getElementById('message').style.display = 'block';
    }).catch(function (error) {
        // An error happened.
        document.getElementById("errortxt").innerText = error;
    });
}