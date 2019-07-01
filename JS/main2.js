
// it is clean !!

// restrict the nomOfGuests input fiels to numbers from 0-9
function isNumberKey(evt)
      {
         var charCode = (evt.which) ? evt.which : event.keyCode
         if (charCode > 31 && (charCode < 49 || charCode > 57))
            return false;

         return true;
      }

function calculate() {
// numOfGuests = 1;
// console.log(numOfGuests)
    var total = parseFloat(document.getElementById("totalBill").value);
    var percent = parseFloat(document.getElementById("tipPercent").value);
    var guests = parseFloat(document.getElementById("numOfGuests").value);
// accept 0 or blank space on the numOfGuests field and make it a "1"
    if (document.getElementById("numOfGuests").value == "") {
        var guests = 1; 
    }else if (document.getElementById("numOfGuests").value == 0){
        var guests = 1; 
    }else if (document.getElementById("numOfGuests").value == 1){
        var guests = document.getElementById("numOfGuests").value;
    }else if (document.getElementById("numOfGuests").value >= 2) {
            var guests = document.getElementById("numOfGuests").value;
    }
// perform calculations for all results and limit the cents to 2 decimal places
    var result1 = ((total / 100) * percent).toFixed(2);            //total tip is
    console.log(result1);
    var result2 = (((total / 100) * percent) / guests).toFixed(2);     //tip per person
    console.log(result2);
    var result3 = ((total / guests) + ((total / 100) * percent)).toFixed(2);          //tip and bill per person
    console.log(result3);
    var result4 = ((total + ((total / 100) * percent))).toFixed(2);  //total bill + tip is
    console.log(result4);

//formats calculated results to USD currency
    var newFormat1 = (new Intl.NumberFormat("en-US",{style: "currency", currency: "USD", useGrouping: true}).format(result1))
    var newFormat2 = (new Intl.NumberFormat("en-US",{style: "currency", currency: "USD", useGrouping: true}).format(result2))
    var newFormat3 = (new Intl.NumberFormat("en-US",{style: "currency", currency: "USD", useGrouping: true}).format(result3))
    var newFormat4 = (new Intl.NumberFormat("en-US",{style: "currency", currency: "USD", useGrouping: true}).format(result4))

// display calculated ammounts on the results table.
        document.getElementById("totalTip").innerHTML = newFormat1;
        document.getElementById("tipPP").innerHTML = newFormat2;
        document.getElementById("billTipPP").innerHTML = newFormat3;
        document.getElementById("totalBillTip").innerHTML = newFormat4;
}

// allow the decinal point on the billTotal field
var validate = function(e) {
    var t = e.value;
    e.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
  }

// lunch the YES entry field screen
function billSplitY(){
    window.location = href="tip_calc_y.html"
    console.log("Yes, it works")
}

// lunch the NO entry field screen
function billSplitN(){
    window.location = href="tip_calc_n.html"
    console.log("No, it works")
}

// reset button
function reset(){
    window.location = href="tip_calc_y.html"
}

// home button
function goHome(){
    window.location = href="main-page.html"
}


// display resultsTable table when click
function showResults() {
    document.getElementById("totalBill").style.borderColor = "blue" ;
    document.getElementById("tipPercent").style.borderColor = "blue" ;
    document.getElementById("resultsTable").style.display="table";

}

function chkForEmpty() {
// error check for empty totalBill input field
    if (document.getElementById("totalBill").value == "") {
        alert("Please Enter Bill Amount");
        document.getElementById("totalBill").style.borderColor = "red" ;
        document.getElementById("totalBill").focus();
    return false;

    } 

// error check for empty tipPercent field
    if (document.getElementById("tipPercent").value == "") {
        alert("Please Enter Tip %");
        document.getElementById("tipPercent").style.borderColor = "red" ;
        document.getElementById("tipPercent").focus();
    return false;
    } 
showResults();

}

// function CustomAlert(){
//     this.render = function(dialog){
//         var winW = window.innerWidth;
//         var winH = window.innerHeight;
//         var dialogoverlay = document.getElementById("dialogoverlay");
//         var dialogbox = document.getElementById("dialogbox");
//         dialogoverlay.style.display = "block";
//         dialogoverlay.style.height = winH+"px";
//         dialogbox.style.left = (winW/2)- (550 /2)+"px";
//         dialogbox.style.top = "100px";
//         dialogbox.style.display = "block";
//         document.getElementById("dialogboxhead").innerHTML = " Must not leave empty fields";
//         document.getElementById("dialogboxbody").innerHTML = dialog;
//         document.getElementById("dialogboxfooter").innerHTML = '<button onclick="Alert.ok()">OK</button>';

//     }
//     this.ok = function() {


//     }
// }
