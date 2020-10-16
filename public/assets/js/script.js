 /*jshint esversion: 6 */
 /* jshint expr: true */

// const firebase.firestore() = firebase.firestore();
 let currentdate = new Date();
 let date = currentdate.getDate() + "-" + (currentdate.getMonth() + 1) + "-" + currentdate.getFullYear();
 let time = currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();
 document.getElementById('date_now').innerText = date;
document.getElementById('date_now').value = date;

function onenext(){
    carname=document.getElementById("car_name").value;
    operator=document.getElementById("operator").value;
    meter=document.getElementById("meter_reading").value;
    date=document.getElementById("date_now").value;
    if(carname !== "select" && operator !== "" && meter !== "" && date !== ""){
        document.getElementById("one_page").style.display="block";
        updateDbSt();
    }
    else{
        alert("Make sure you fill section before you continue");
    }
    //document.getElementById("one_page").style.display="block";

}

function twonext(){
    if(check1 !== "" && check2 !== "" && check3 !== "" && check4 !== "" && check5 !== "" && check6 !== ""){
        document.getElementById("two_page").style.display="block";
    }else{
        alert("Make sure you check in EXTERNAL VEHICLE CONDITION section before you continue");
    }
    //document.getElementById("two_page").style.display="block";

    
}

function threenext(){
    if(check7 !== "" && check8 !== "" && check9 !== "" && check10 !== "" && check11 !== "" && check12 !== "" && check13 !== ""){
        document.getElementById("three_page").style.display="block";
    }else{
        alert("Make sure you check in FLUIDS section before you continue");
    }
    //document.getElementById("three_page").style.display="block";
    
}

function fournext(){
    if(check14 !== "" && check15 !== "" && check16 !== "" && check17 !== "" && check18 !== "" && check19 !== "" && check20 !== ""  && check21 !== ""&& check22 !== ""){
        document.getElementById("four_page").style.display="block";
    }else{
        alert("Make sure you check in VEHICLE INTERIOR AND EQUIPMENT section before you continue");
    }
    document.getElementById("four_page").style.display="block";
}

function updateDbSt(){
    carname=document.getElementById("car_name").value;
    date=document.getElementById("date_now").value;

    firebase.firestore().collection("data").doc(date).get().then(function(doc) {
        let gari;
        if (doc.exists) {
            console.log(doc.data());
            switch(carname){
                case "IST":
                    gari = doc.data().IST;
                    console.log(gari);
                    break;
        
                case "RAV4":
                    gari = doc.data().RAV4;
                    break;
        
                case "CARINA":
                    gari = doc.data().CARINA;
                    break;
        
                case "NOAH":
                    gari = doc.data().NOAH;
                    break;
        
                case "NISSAN":
                    gari = doc.data().NISSAN;
                    break;
        
                case "STARLET":
                    gari = doc.data().STARLET;
                    break;
            }
            if(gari === true){
                alert("DATA YOUR TRYING TO ENTER IS ALREADY EXIT. You should only do the checkup once a day. PLACE OK TO CONTINUE");
            }
        }else{
            startup(date);
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
}

function sendData(){
    data1=check1;data2=check2;
    data3=check3;data4=check4;
    data5=check5;data6=check6;
    data7=check7;data8=check8;
    data9=check9;data10=check10;

    data11=check11;data12=check12;
    data13=check13;data14=check14;
    data15=check15;data16=check16;
    data17=check17;data18=check18;
    data19=check19;data20=check20;

    data21=check21;data22=check22;
    data23=check23;data24=check24;
    data25=check25;data26=check26;
    data27=check27;data28=check28;

    comments = document.getElementById("datacomment").value;

    if(check23 !== "" && check24 !== "" && check25 !== "" && check26 !== "" && check27 !== "" && check28 !== "" && comments !== "" ){
        firebase.firestore().collection(date).doc(carname).set({
            carname: carname,
            date: date,
            user: operator,
            meter:meter,
            comment:comments,
            time:time,
    
            data1:data1,data2:data2,data3:data3,data4:data4,data5:data5,
            data6:data6,data7:data7,data8:data8,data9:data9,data10:data10,
    
            data11:data11,data12:data12,data13:data13,data14:data14,data15:data15,
            data16:data16,data17:data17,data18:data18,data19:data19,data20:data20,
    
            data21:data21,data22:data22,data23:data23,data24:data24,
            data25:data25,data26:data26,data27:data27,data28:data28
        })
            .then(function (response) {
               alert("Successfull saved");
                window.location.href = "index.html";
                console.log(response);
            })
            .catch(function (error) {
                alert("Fail to saved data");
                console.log(error);
            });
    
        updateData(carname,date);
        
    }else{
        alert("Make sure you check in FUNCTION CHECKS BEFORE STARTING THE JOURNEY section before you continue");
    }
    // carname=document.getElementById("car_name").value,
    // operator=document.getElementById("operator").value,
    // meter=document.getElementById("meter_reading").value,
    // date=document.getElementById("date_now").value,
    // console.log(date);
}

function startAct(){
    document.getElementById("two_page").style.display="none";
    document.getElementById("three_page").style.display="none";
    document.getElementById("four_page").style.display="none";
}

document.getElementById("one_page").style.display="none";
document.getElementById("myhome").style.display="none";
startAct();

function pickname(car){
    console.log(car);
    document.getElementById('car_name').value =car;
}

function startup(date){
    firebase.firestore().collection("data").doc(date).set({
        CARINA: false,
        IST: false,
        NISSAN: false,
        NOAH: false,
        RAV4: false,
        STARLET: false,
        date:date
    });
    console.log("data entered");
}

function updateData(carname,date){
    switch(carname){
        case "IST":
            firebase.firestore().collection("data").doc(date).update({
                IST: true
            });
            break;

        case "RAV4":
            firebase.firestore().collection("data").doc(date).update({
                RAV4: true
            });
            break;

        case "CARINA":
            firebase.firestore().collection("data").doc(date).update({
                CARINA: true
            });
            break;

        case "NOAH":
            firebase.firestore().collection("data").doc(date).update({
                NOAH: true
            });
            break;

        case "NISSAN":
            firebase.firestore().collection("data").doc(date).update({
                NISSAN: true
            });
            break;

        case "STARLET":
            firebase.firestore().collection("data").doc(date).update({
                STARLET: true
            });
            break;
    }
    console.log("car name is updated");
}