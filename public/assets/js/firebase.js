 /*jshint esversion: 6 */
 /* jshint expr: true */

 let username;
 document.getElementById('viewreport').style.display = 'none';
 document.getElementById('createtab').style.display = 'none';


 //check status function

function callcreate() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            user.getIdTokenResult().then(idTokenResult => {
                console.log(idTokenResult.claims);
                if (idTokenResult.claims.admin === true) {
                    window.location.href = "registration.html";
                    //console.log("admin");
                } else if (idTokenResult.claims.SubAdmin === true) {
                    window.location.href = "registration.html";
                    //console.log("subadmin");
                }else if (idTokenResult.claims.Worker === true) {
                    //console.log("user");
                    window.location.href = "404.html";
                }else {
                    console.log("unknow");
                    window.location.href = "404.html";
                }
            });
        }
    });
}

function gotoView() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            user.getIdTokenResult().then(idTokenResult => {
                console.log(idTokenResult.claims);
                if (idTokenResult.claims.admin === true) {
                    window.location.href = "view.html";
                    //console.log("admin");
                } else if (idTokenResult.claims.SubAdmin === true) {
                    window.location.href = "view.html";
                    //console.log("subadmin");
                }else if (idTokenResult.claims.Worker === true) {
                    window.location.href = "404.html";
                    //console.log("user");
                }else {
                    //console.log("unknow");
                    window.location.href = "404.html";
                }
            });
        }
    });
}

function claimcheck(user) {
    user.getIdTokenResult().then(idTokenResult => {
        console.log(idTokenResult.claims);

        if (idTokenResult.claims.admin === true && idTokenResult.claims.email_verified === true) {
            document.getElementById('viewreport').style.display = 'block';
            document.getElementById('createtab').style.display = 'block';
            anotherone()
        } else if (idTokenResult.claims.SubAdmin === true && idTokenResult.claims.email_verified === true) {
            document.getElementById('viewreport').style.display = 'block';
            document.getElementById('createtab').style.display = 'block';
            anotherone()
        }else if (idTokenResult.claims.Worker === true && idTokenResult.claims.email_verified === true) {
            anotherone()
        }else {
            if(window.location.href !== "https://etel-car-check-list.web.app/reg.html" &&
                window.location.href !== "https://etel-car-check-list.firebaseapp.app/reg.html"&&
                window.location.href !== "http://localhost:5005/reg.html"&&
                window.location.href !== "http://localhost:5000/reg.html"&&
                !idTokenResult.claims.email_verified) {
                window.location.href = "reg.html";
            }

               // console.log("unknow");
            // window.location.href = "404.html";
            //signout();
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
        window.location.href === "https://etel-car-check-list.firebaseapp.app/index.html"){

        loading();

        document.getElementById('operator').innerText = username;
        document.getElementById('operator').value = username;
        console.log("change operator");
    }else if(window.location.href === "https://etel-car-check-list.web.app/view.html" ||
        window.location.href === "https://etel-car-check-list.firebaseapp.app/view.html"){
        loading();
    }
    else{
        console.log("check code something is long");
    }
}

function anothertwo() {
    if(
        window.location.href !== "https://etel-car-check-list.web.app/login.html" &&
        window.location.href !== "https://etel-car-check-list.firebaseapp.app/login.html"&&
        window.location.href !== "http://localhost:5000/login.html"){
        //console.log("not equal");
        console.log(window.location.href);
        window.location.href = "login.html";
    }else{
        console.log("equal");
    }
}

function loading() {
    let loader = document.querySelector(".loader");
    setTimeout(function(){
        loader.style.opacity = "0";
        setTimeout(function(){
            loader.style.display = "none";
            if(window.location.href === "https://etel-car-check-list.web.app/index.html" ||
                window.location.href === "https://etel-car-check-list.firebaseapp.app/index.html"){

                document.getElementById("myhome").style.display="block";

            }else if(window.location.href === "https://etel-car-check-list.web.app/view.html" ||
                window.location.href === "https://etel-car-check-list.firebaseapp.app/view.html"){

                document.getElementById("mainofmain").style.display="block";
            }else{}
        },500);
    },1500);
}

checkUserStatus();