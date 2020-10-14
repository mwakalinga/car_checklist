let check1 = "";
let check2 = "";
let check3 = "";
let check4 = "";
let check5 = "";
let check6 = "";
let check7 = "";
let check8 = "";
let check9 = "";
let check10 = "";
let check11 = "";
let check12 = "";
let check13 = "";
let check14 = "";
let check15 = "";
let check16 = "";
let check17 = "";
let check18 = "";
let check19 = "";
let check20 = "";
let check21 = "";
let check22 = "";
let check23 = "";
let check24 = "";
let check25 = "";
let check26 = "";
let check27 = "";
let check28 = "";

let carname = document.getElementById("car_name").value;
let operator = document.getElementById("operator").value;
let meter = document.getElementById("meter_reading").value;
const date = document.getElementById("date_now").value;
let comments = document.getElementById("datacomment").value;

function boxcheck(something){
    const num = something.replace(/[a-z]/g, '');
    switch(num){
        case '1':
            if(something === 'data1good'){
                document.getElementById('data1bad').checked = false;
                document.getElementById('data1na').checked = false;
                document.getElementById('data1good').checked = true;
                check1 = "Good";
            }else if(something === 'data1bad'){
                document.getElementById('data1good').checked = false;
                document.getElementById('data1na').checked = false;
                document.getElementById('data1bad').checked = true;
                check1 = "Bad";
            }else{
                document.getElementById('data1good').checked = false;
                document.getElementById('data1na').checked = true;
                document.getElementById('data1bad').checked = false;
                check1 = "N/A";
            }
            break;

        case '2':
            if(something === 'data2good'){
                document.getElementById('data2bad').checked = false;
                document.getElementById('data2na').checked = false;
                document.getElementById('data2good').checked = true;
                check2 = "Good";
            }else if(something === 'data2bad'){
                document.getElementById('data2good').checked = false;
                document.getElementById('data2na').checked = false;
                document.getElementById('data2bad').checked = true;
                check2 = "Bad";
            }else{
                document.getElementById('data2good').checked = false;
                document.getElementById('data2na').checked = true;
                document.getElementById('data2bad').checked = false;
                check2 = "N/A";
            }
            break;
        
        case '3':
            if(something === 'data3good'){
                document.getElementById('data3bad').checked = false;
                document.getElementById('data3na').checked = false;
                document.getElementById('data3good').checked = true;
                check3 = "Good";
            }else if(something === 'data3bad'){
                document.getElementById('data3good').checked = false;
                document.getElementById('data3na').checked = false;
                document.getElementById('data3bad').checked = true;
                check3 = "Bad";
            }else{
                document.getElementById('data3good').checked = false;
                document.getElementById('data3na').checked = true;
                document.getElementById('data3bad').checked = false;
                check3 = "N/A";
            }
            break;
        
        case '4':
            if(something === 'data4good'){
                document.getElementById('data4bad').checked = false;
                document.getElementById('data4na').checked = false;
                document.getElementById('data4good').checked = true;
                check4 = "Good";
            }else if(something === 'data4bad'){
                document.getElementById('data4good').checked = false;
                document.getElementById('data4na').checked = false;
                document.getElementById('data4bad').checked = true;
                check4 = "Bad";
            }else{
                document.getElementById('data4good').checked = false;
                document.getElementById('data4na').checked = true;
                document.getElementById('data4bad').checked = false;
                check4 = "N/A";
            }
            break;
        
        case '5':
            if(something === 'data5good'){
                document.getElementById('data5bad').checked = false;
                document.getElementById('data5na').checked = false;
                document.getElementById('data5good').checked = true;
                check5 = "Good";
            }else if(something === 'data5bad'){
                document.getElementById('data5good').checked = false;
                document.getElementById('data5na').checked = false;
                document.getElementById('data5bad').checked = true;
                check5 = "Bad";
            }else{
                document.getElementById('data5good').checked = false;
                document.getElementById('data5na').checked = true;
                document.getElementById('data5bad').checked = false;
                check5 = "N/A";
            }
            break;
            
        case '6':
            if(something === 'data6good'){
                document.getElementById('data6bad').checked = false;
                document.getElementById('data6na').checked = false;
                document.getElementById('data6good').checked = true;
                check6 = "Good";
            }else if(something === 'data6bad'){
                document.getElementById('data6good').checked = false;
                document.getElementById('data6na').checked = false;
                document.getElementById('data6bad').checked = true;
                check6 = "Bad";
            }else{
                document.getElementById('data6good').checked = false;
                document.getElementById('data6na').checked = true;
                document.getElementById('data6bad').checked = false;
                check6 = "N/A";
            }
            break;
        
        case '7':
            if(something === 'data7good'){
                document.getElementById('data7bad').checked = false;
                document.getElementById('data7na').checked = false;
                document.getElementById('data7good').checked = true;
                check7 = "Good";
            }else if(something === 'data7bad'){
                document.getElementById('data7good').checked = false;
                document.getElementById('data7na').checked = false;
                document.getElementById('data7bad').checked = true;
                check7 = "Bad";
            }else{
                document.getElementById('data7good').checked = false;
                document.getElementById('data7na').checked = true;
                document.getElementById('data7bad').checked = false;
                check7 = "N/A";
            }
            break;
        
        case '8':
            if(something === 'data8good'){
                document.getElementById('data8bad').checked = false;
                document.getElementById('data8na').checked = false;
                document.getElementById('data8good').checked = true;
                check8 = "Good";
            }else if(something === 'data8bad'){
                document.getElementById('data8good').checked = false;
                document.getElementById('data8na').checked = false;
                document.getElementById('data8bad').checked = true;
                check8 = "Bad";
            }else{
                document.getElementById('data8good').checked = false;
                document.getElementById('data8na').checked = true;
                document.getElementById('data8bad').checked = false;
                check8 = "N/A";
            }
            break;
        
        case '9':
            if(something === 'data9good'){
                document.getElementById('data9bad').checked = false;
                document.getElementById('data9na').checked = false;
                document.getElementById('data9good').checked = true;
                check9 = "Good";
            }else if(something === 'data9bad'){
                document.getElementById('data9good').checked = false;
                document.getElementById('data9na').checked = false;
                document.getElementById('data9bad').checked = true;
                check9 = "Bad";
            }else{
                document.getElementById('data9good').checked = false;
                document.getElementById('data9na').checked = true;
                document.getElementById('data9bad').checked = false;
                check9 = "N/A";
            }
            break;
        
        case '10':
            if(something === 'data10good'){
                document.getElementById('data10bad').checked = false;
                document.getElementById('data10na').checked = false;
                document.getElementById('data10good').checked = true;
                check10 = "Good";
            }else if(something === 'data10bad'){
                document.getElementById('data10good').checked = false;
                document.getElementById('data10na').checked = false;
                document.getElementById('data10bad').checked = true;
                check10 = "Bad";
            }else{
                document.getElementById('data10good').checked = false;
                document.getElementById('data10na').checked = true;
                document.getElementById('data10bad').checked = false;
                check10 = "N/A";
            }
            break;
        
        case '11':
            if(something === 'data11good'){
                document.getElementById('data11bad').checked = false;
                document.getElementById('data11na').checked = false;
                document.getElementById('data11good').checked = true;
                check11 = "Good";
            }else if(something === 'data11bad'){
                document.getElementById('data11good').checked = false;
                document.getElementById('data11na').checked = false;
                document.getElementById('data11bad').checked = true;
                check11 = "Bad";
            }else{
                document.getElementById('data11good').checked = false;
                document.getElementById('data11na').checked = true;
                document.getElementById('data11bad').checked = false;
                check11 = "N/A";
            }
            break;
        
        case '12':
            if(something === 'data12good'){
                document.getElementById('data12bad').checked = false;
                document.getElementById('data12na').checked = false;
                document.getElementById('data12good').checked = true;
                check12 = "Good";
            }else if(something === 'data12bad'){
                document.getElementById('data12good').checked = false;
                document.getElementById('data12na').checked = false;
                document.getElementById('data12bad').checked = true;
                check12 = "Bad";
            }else{
                document.getElementById('data12good').checked = false;
                document.getElementById('data12na').checked = true;
                document.getElementById('data12bad').checked = false;
                check12 = "N/A";
            }
            break;
        
        case '13':
            if(something === 'data13good'){
                document.getElementById('data13bad').checked = false;
                document.getElementById('data13na').checked = false;
                document.getElementById('data13good').checked = true;
                check13 = "Good";
            }else if(something === 'data13bad'){
                document.getElementById('data13good').checked = false;
                document.getElementById('data13na').checked = false;
                document.getElementById('data13bad').checked = true;
                check13 = "Bad";
            }else{
                document.getElementById('data13good').checked = false;
                document.getElementById('data13na').checked = true;
                document.getElementById('data13bad').checked = false;
                check13 = "N/A";
            }
            break;
        
        case '14':
            if(something === 'data14good'){
                document.getElementById('data14bad').checked = false;
                document.getElementById('data14na').checked = false;
                document.getElementById('data14good').checked = true;
                check14 = "Good";
            }else if(something === 'data14bad'){
                document.getElementById('data14good').checked = false;
                document.getElementById('data14na').checked = false;
                document.getElementById('data14bad').checked = true;
                check14 = "Bad";
            }else{
                document.getElementById('data14good').checked = false;
                document.getElementById('data14na').checked = true;
                document.getElementById('data14bad').checked = false;
                check14 = "N/A";
            }
            break;
        
        case '15':
            if(something === 'data15good'){
                document.getElementById('data15bad').checked = false;
                document.getElementById('data15na').checked = false;
                document.getElementById('data15good').checked = true;
                check15 = "Good";
            }else if(something === 'data15bad'){
                document.getElementById('data15good').checked = false;
                document.getElementById('data15na').checked = false;
                document.getElementById('data15bad').checked = true;
                check15 = "Bad";
            }else{
                document.getElementById('data15good').checked = false;
                document.getElementById('data15na').checked = true;
                document.getElementById('data15bad').checked = false;
                check15 = "N/A";
            }
            break;
        
        case '16':
            if(something === 'data16good'){
                document.getElementById('data16bad').checked = false;
                document.getElementById('data16na').checked = false;
                document.getElementById('data16good').checked = true;
                check16 = "Good";
            }else if(something === 'data16bad'){
                document.getElementById('data16good').checked = false;
                document.getElementById('data16na').checked = false;
                document.getElementById('data16bad').checked = true;
                check16 = "Bad";
            }else{
                document.getElementById('data16good').checked = false;
                document.getElementById('data16na').checked = true;
                document.getElementById('data16bad').checked = false;
                check16 = "N/A";
            }
            break;
        
        case '17':
            if(something === 'data17good'){
                document.getElementById('data17bad').checked = false;
                document.getElementById('data17na').checked = false;
                document.getElementById('data17good').checked = true;
                check17 = "Good";
            }else if(something === 'data17bad'){
                document.getElementById('data17good').checked = false;
                document.getElementById('data17na').checked = false;
                document.getElementById('data17bad').checked = true;
                check17 = "Bad";
            }else{
                document.getElementById('data17good').checked = false;
                document.getElementById('data17na').checked = true;
                document.getElementById('data17bad').checked = false;
                check17 = "N/A";
            }
            break;
        
        case '18':
            if(something === 'data18good'){
                document.getElementById('data18bad').checked = false;
                document.getElementById('data18na').checked = false;
                document.getElementById('data18good').checked = true;
                check18 = "Good";
            }else if(something === 'data18bad'){
                document.getElementById('data18good').checked = false;
                document.getElementById('data18na').checked = false;
                document.getElementById('data18bad').checked = true;
                check18 = "Bad";
            }else{
                document.getElementById('data18good').checked = false;
                document.getElementById('data18na').checked = true;
                document.getElementById('data18bad').checked = false;
                check18 = "N/A";
            }
            break;
        
        case '19':
            if(something === 'data19good'){
                document.getElementById('data19bad').checked = false;
                document.getElementById('data19na').checked = false;
                document.getElementById('data19good').checked = true;
                check19 = "Good";
            }else if(something === 'data19bad'){
                document.getElementById('data19good').checked = false;
                document.getElementById('data19na').checked = false;
                document.getElementById('data19bad').checked = true;
                check19 = "Bad";
            }else{
                document.getElementById('data19good').checked = false;
                document.getElementById('data19na').checked = true;
                document.getElementById('data19bad').checked = false;
                check19 = "N/A";
            }
            break;
        
        case '20':
            if(something === 'data20good'){
                document.getElementById('data20bad').checked = false;
                document.getElementById('data20na').checked = false;
                document.getElementById('data20good').checked = true;
                check20 = "Good";
            }else if(something === 'data20bad'){
                document.getElementById('data20good').checked = false;
                document.getElementById('data20na').checked = false;
                document.getElementById('data20bad').checked = true;
                check20 = "Bad";
            }else{
                document.getElementById('data20good').checked = false;
                document.getElementById('data20na').checked = true;
                document.getElementById('data20bad').checked = false;
                check20 = "N/A";
            }
            break;
        
        case '21':
            if(something === 'data21good'){
                document.getElementById('data21bad').checked = false;
                document.getElementById('data21na').checked = false;
                document.getElementById('data21good').checked = true;
                check21 = "Good";
            }else if(something === 'data21bad'){
                document.getElementById('data21good').checked = false;
                document.getElementById('data21na').checked = false;
                document.getElementById('data21bad').checked = true;
                check21 = "Bad";
            }else{
                document.getElementById('data21good').checked = false;
                document.getElementById('data21na').checked = true;
                document.getElementById('data21bad').checked = false;
                check21 = "N/A";
            }
            break;
        
        case '22':
            if(something === 'data22good'){
                document.getElementById('data22bad').checked = false;
                document.getElementById('data22na').checked = false;
                document.getElementById('data22good').checked = true;
                check22 = "Good";
            }else if(something === 'data22bad'){
                document.getElementById('data22good').checked = false;
                document.getElementById('data22na').checked = false;
                document.getElementById('data22bad').checked = true;
                check22 = "Bad";
            }else{
                document.getElementById('data22good').checked = false;
                document.getElementById('data22na').checked = true;
                document.getElementById('data22bad').checked = false;
                check22 = "N/A";
            }
            break;
        
        case '23':
            if(something === 'data23good'){
                document.getElementById('data23bad').checked = false;
                document.getElementById('data23na').checked = false;
                document.getElementById('data23good').checked = true;
                check23 = "Good";
            }else if(something === 'data23bad'){
                document.getElementById('data23good').checked = false;
                document.getElementById('data23na').checked = false;
                document.getElementById('data23bad').checked = true;
                check23 = "Bad";
            }else{
                document.getElementById('data23good').checked = false;
                document.getElementById('data23na').checked = true;
                document.getElementById('data23bad').checked = false;
                check23 = "N/A";
            }
            break;
        
        case '24':
            if(something === 'data24good'){
                document.getElementById('data24bad').checked = false;
                document.getElementById('data24na').checked = false;
                document.getElementById('data24good').checked = true;
                check24 = "Good";
            }else if(something === 'data24bad'){
                document.getElementById('data24good').checked = false;
                document.getElementById('data24na').checked = false;
                document.getElementById('data24bad').checked = true;
                check24 = "Bad";
            }else{
                document.getElementById('data24good').checked = false;
                document.getElementById('data24na').checked = true;
                document.getElementById('data24bad').checked = false;
                check24 = "N/A";
            }
            break;
        
        case '25':
            if(something === 'data25good'){
                document.getElementById('data25bad').checked = false;
                document.getElementById('data25na').checked = false;
                document.getElementById('data25good').checked = true;
                check25 = "Good";
            }else if(something === 'data25bad'){
                document.getElementById('data25good').checked = false;
                document.getElementById('data25na').checked = false;
                document.getElementById('data25bad').checked = true;
                check25 = "Bad";
            }else{
                document.getElementById('data25good').checked = false;
                document.getElementById('data25na').checked = true;
                document.getElementById('data25bad').checked = false;
                check25 = "N/A";
            }
            break;
        
        case '26':
            if(something === 'data26good'){
                document.getElementById('data26bad').checked = false;
                document.getElementById('data26na').checked = false;
                document.getElementById('data26good').checked = true;
                check26 = "Good";
            }else if(something === 'data26bad'){
                document.getElementById('data26good').checked = false;
                document.getElementById('data26na').checked = false;
                document.getElementById('data26bad').checked = true;
                check26 = "Bad";
            }else{
                document.getElementById('data26good').checked = false;
                document.getElementById('data26na').checked = true;
                document.getElementById('data26bad').checked = false;
                check26 = "N/A";
            }
            break;
        
        case '27':
            if(something === 'data27good'){
                document.getElementById('data27bad').checked = false;
                document.getElementById('data27na').checked = false;
                document.getElementById('data27good').checked = true;
                check27 = "Good";
            }else if(something === 'data27bad'){
                document.getElementById('data27good').checked = false;
                document.getElementById('data27na').checked = false;
                document.getElementById('data27bad').checked = true;
                check27 = "Bad";
            }else{
                document.getElementById('data27good').checked = false;
                document.getElementById('data27na').checked = true;
                document.getElementById('data27bad').checked = false;
                check27 = "N/A";
            }
            break;
        
        case '28':
            if(something === 'data28good'){
                document.getElementById('data28bad').checked = false;
                document.getElementById('data28na').checked = false;
                document.getElementById('data28good').checked = true;
                check28 = "Good";
            }else if(something === 'data28bad'){
                document.getElementById('data28good').checked = false;
                document.getElementById('data28na').checked = false;
                document.getElementById('data28bad').checked = true;
                check28 = "Bad";
            }else{
                document.getElementById('data28good').checked = false;
                document.getElementById('data28na').checked = true;
                document.getElementById('data28bad').checked = false;
                check28 = "N/A";
            }
            break;
    }
}


