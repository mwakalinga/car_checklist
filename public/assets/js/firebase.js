 /*jshint esversion: 6 */
 /* jshint expr: true */

 let username;


 //check status function

function callcreate() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            user.getIdTokenResult().then(idTokenResult => {
                console.log(idTokenResult.claims);
                if (idTokenResult.claims.admin === true) {
                    window.location.href = "registration.html";
                } else if (idTokenResult.claims.subadmin === true) {
                    window.location.href = "registration.html";
                }else if (idTokenResult.claims.user === true) {
                    window.location.href = "404.html";
                }else {
                    console.log("unknow");
                    window.location.href = "404.html";
                }
            });
        }
    });
}

function claimcheck(user) {
    user.getIdTokenResult().then(idTokenResult => {
        console.log(idTokenResult.claims);
        if (idTokenResult.claims.admin === true) {
            anotherone()
        } else if (idTokenResult.claims.subadmin === true) {
            anotherone()
        }else if (idTokenResult.claims.user === true) {
            anotherone()
        }else {
            if(email_verified === false){

            }
            console.log("unknow");
            window.location.href = "404.html";
            signout();
        }
    });
}

function checkUserStatus() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            document.getElementById('signinbtn').style.display = 'none';
            document.getElementById('signoutbtn').style.display = 'block';
            username = user.displayName;
            claimcheck(user);
        } else {
            document.getElementById('signinbtn').style.display = 'block';
            document.getElementById('signoutbtn').style.display = 'none';
            anothertwo();
        }
    });
}

function anotherone() {
    if(window.location.href === "https://etel-car-check-list.web.app/index.html" ||
        window.location.href === "https://etel-car-check-list.web.app/index.html#" ||
        window.location.href === "https://etel-car-check-list.web.app" ||
        window.location.href === "https://etel-car-check-list.firebaseapp.app/index.html#" ||
        window.location.href === "https://etel-car-check-list.firebaseapp.app/index.html" ||
        window.location.href === "https://etel-car-check-list.firebaseapp.app"){

        loading();

        document.getElementById('operator').innerText = username;
        document.getElementById('operator').value = username;
        console.log("change operator");
    }else if(window.location.href === "https://etel-car-check-list.web.app/view.html" ||
        window.location.href === "https://etel-car-check-list.web.app/view.html#" ||
        window.location.href === "https://etel-car-check-list.firebaseapp.app/view.html#" ||
        window.location.href === "https://etel-car-check-list.firebaseapp.app/view.html"){
        loading();
    }
    else{
        console.log("check code something is long");
    }
}

function anothertwo() {
    if(
        window.location.href !== "https://etel-car-check-list.web.app/login.html" ||
        window.location.href !== "https://etel-car-check-list.firebaseapp.app/login.html"
    ){
        //console.log("not equal");
        console.log(window.location.href);
        window.location.href = "login.html";
    }else{
        console.log("equal");
    }
}

function loading() {
    const loader = document.querySelector(".loader");
    setTimeout(function(){
        loader.style.opacity = "0";
        setTimeout(function(){
            loader.style.display = "none";
            document.getElementById("myhome").style.display="block";
            document.getElementById("mainofmain").style.display="block";
        },500);
    },1500);
}

checkUserStatus();





