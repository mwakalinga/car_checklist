 /*jshint esversion: 6 */
 /* jshint expr: true */

 const db = firebase.firestore();
 document.getElementById('viewinfos').style.display="none";
 document.getElementById('print').style.display="none";
 let count = 0;
 let dates = [];

 function checkList(){
     db.collection('data').orderBy("date", "desc").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            let datedate = doc.id;
            dates.push(datedate);

            const RAV4 = "RAV4";
            const CARINA = "CARINA";
            const NISSAN = "NISSAN";
            const STARLET = "STARLET";
            const IST = "IST";
            const NOAH = "NOAH";
            const all = "all";

            let RAV42 = doc.data().RAV4;
            let CARINA2 = doc.data().CARINA;
            let NISSAN2 = doc.data().NISSAN;
            let STARLET2 = doc.data().STARLET;
            let IST2 = doc.data().IST;
            let NOAH2 = doc.data().NOAH;

            let datedate2 = datedate + "/";
            datedate2.toString();

            let content = "<div id ='" + count + all + "' class=" + "col" + " style=" + "margin-top: 5px;margin-bottom: 5px;" + "><div><a class=" + "btn btn-primary" + " data-toggle=" + "collapse" + " aria-expanded=" + "false" + " aria-controls=" + "collapse-" + datedate + " href=" + "#collapse-" + datedate + " role=" + "button" + ">" + datedate + "</a><div class=" + "collapse" + " id=" + "collapse-" + datedate + "" + "><div id ='" + count + IST + "'><hr/><a  onClick='idSome(\"" + datedate2 + IST + "\")' href=" + "#" + ">IST</a></div> <div id ='" + count + RAV4 + "'><hr/><a onClick='idSome(\"" + datedate2 + RAV4 + "\")' href=" + "#" + ">RAV4</a></div> <div id ='" + count + CARINA + "'><hr /><a onClick='idSome(\"" + datedate2 + CARINA + "\")' href=" + "#" + ">CARINA</a></div> <div id ='" + count + NISSAN + "'><hr /><a onClick='idSome(\"" + datedate2 + NISSAN + "\")' href=" + "#" + ">NISSAN</a></div> <div id ='" + count + NOAH + "'><hr /><a onClick='idSome(\"" + datedate2 + NOAH + "\")' href=" + "#" + ">NOAH</a></div> <div id ='" + count + STARLET + "'><hr /><a onClick='idSome(\"" + datedate2 + STARLET + "\")' href=" + "#" + ">STARLET</a></div> </div></div></div>";
            $('#list').append(content);
            //console.log(count+RAV4);

            if(RAV42 === false){
                document.getElementById(count+RAV4).style.display="none";
                //console.log(count+RAV4);
            }
            if(CARINA2 === false){
                document.getElementById(count+CARINA).style.display="none";
                //console.log(count+CARINA);
            }
            if(NISSAN2 === false){
                document.getElementById(count+NISSAN).style.display="none";
                //console.log(count+NISSAN);
            }
            if(STARLET2 === false){
                document.getElementById(count+STARLET).style.display="none";
                //console.log(count+STARLET);
            }
            if(IST2 === false){
                document.getElementById(count+IST).style.display="none";
                //console.log(count+IST);
            }
            if(NOAH2 === false){
                document.getElementById(count+NOAH).style.display="none";
                //console.log(count+NOAH);
            }
            if(NOAH2 === false && IST2 === false && STARLET2 === false && NISSAN2 === false && CARINA2 === false && RAV42 === false){
                document.getElementById(count+all).style.display="none";

            }
            count += 1;
        });
        
    });
}

function idSome(ids){
    document.getElementById('mainofmain').style.display="none";
    document.getElementById('viewinfos').style.display="block";
    document.getElementById('print').style.display="block";

    db.doc(ids).onSnapshot((doc) => {
        let data = doc.data();

    document.getElementById("cars").innerHTML = data.carname;
    document.getElementById("operator").innerHTML = data.user;
    document.getElementById("meter_reading").innerHTML = data.meter;
    document.getElementById("date_now").innerHTML = data.date;
    document.getElementById("time_now").innerHTML = data.time;
    document.getElementById("comments").innerHTML =data.comment;

    document.getElementById("data1").innerHTML = data.data1;
    document.getElementById("data2").innerHTML = data.data2;
    document.getElementById("data3").innerHTML = data.data3;
    document.getElementById("data4").innerHTML = data.data4;
    document.getElementById("data5").innerHTML = data.data5;
    document.getElementById("data6").innerHTML = data.data6;
    document.getElementById("data7").innerHTML = data.data7;
    document.getElementById("data8").innerHTML = data.data8;
    document.getElementById("data9").innerHTML = data.data9;
    document.getElementById("data10").innerHTML = data.data10;
    
    document.getElementById("data11").innerHTML = data.data11;
    document.getElementById("data12").innerHTML = data.data12;
    document.getElementById("data13").innerHTML = data.data13;
    document.getElementById("data14").innerHTML = data.data14;
    document.getElementById("data15").innerHTML = data.data15;
    document.getElementById("data16").innerHTML = data.data16;
    document.getElementById("data17").innerHTML = data.data17;
    document.getElementById("data18").innerHTML = data.data18;
    document.getElementById("data19").innerHTML = data.data19;
    document.getElementById("data20").innerHTML = data.data20;
    
    document.getElementById("data21").innerHTML = data.data21;
    document.getElementById("data22").innerHTML = data.data22;
    document.getElementById("data23").innerHTML = data.data23;
    document.getElementById("data24").innerHTML = data.data24;
    document.getElementById("data25").innerHTML = data.data25;
    document.getElementById("data26").innerHTML = data.data26;
    document.getElementById("data27").innerHTML = data.data27;
    document.getElementById("data28").innerHTML = data.data28;

    //console.log(data);
});
}

checkList();


