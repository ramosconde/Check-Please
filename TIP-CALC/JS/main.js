

function calculate() {
  
//receive input amounts
    var total = parseFloat(document.getElementById("totalBill").value);
    var percent = parseFloat(document.getElementById("tipPercent").value);

//perform calculations and limit decimal to 2 places
    var result1 = ((total / 100) * percent).toFixed(2);            //total tip is
    console.log(result1);
    var result4 = ((total + ((total / 100) * percent))).toFixed(2);  //total bill + tip is
    console.log(result4);
//

 //formats calculated results to US currency
 var newFormat1 = (new Intl.NumberFormat("en-US",{style: "currency", currency: "USD", useGrouping: true}).format(result1))
 var newFormat4 = (new Intl.NumberFormat("en-US",{style: "currency", currency: "USD", useGrouping: true}).format(result4))

//display calculated results on the correct table cell
    document.getElementById("totalTip").innerHTML = result1;
    document.getElementById("totalBillTip").innerHTML = result4;

}
// limits the totalBill input to 2 decimal places
var validate = function(e) {
    var t = e.value;
    e.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
  }
//lunch tip_cal_y.html for a YES choice
function billSplitY(){
    window.location = href="tip_calc_y.html"
    console.log("Yes, it works")
}

//lunch tip_cal_n.htmp for a NO choice
function billSplitN(){
    window.location = href="tip_calc_n.html"
    console.log("No, it works")
}

// display resultsTable table when click
function showResults() {
    document.getElementById("totalBill").style.borderColor = "blue" ;
    document.getElementById("tipPercent").style.borderColor = "blue" ;
    document.getElementById("resultsTable1").style.display="table";

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

// reset button
function reset(){
    window.location = href="tip_calc_n.html"
}

// home button
function goHome(){
    window.location = href="main-page.html"
}