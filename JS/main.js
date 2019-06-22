
function charcheck(evt) {
    var ch = String.fromCharCode(evt.which);
    if (( /^[+]?[0-9]{1,3}(?:[0-9]*(?:[.,][0-9]{1})?|(?:,[0-9]{3})*(?:\.[0-9]{1,2})?|(?:\.[0-9]{3})*(?:,[0-9]{1,2})?)$/.test(ch))) {
        evt.preventDefault();
        // console.log("charcheck does not work")
        return false;
    }
    else{
        // console.log("charcheck works")
        evt.preventDefault();
        return false;
    }
}

function calculate() {
    numOfGuests = 1;
    console.log(numOfGuests);
    //calculate input amounts
    var total = parseFloat(document.getElementById("totalBill").value);
    var percent = parseFloat(document.getElementById("tipPercent").value);

//perform calculations and limit decimal to 2 places
    var result1 = ((total / 100) * percent).toFixed(2);            //total tip is
    console.log(result1);
    var result4 = ((total + ((total / 100) * percent))).toFixed(2);  //total bill + tip is
    console.log(result4);
//
// check for empty "totalBill" input field at submit
    if (document.getElementById("totalBill").value == "") {
        alert("Please Enter Bill Amount");
        document.getElementById("totalBill").style.borderColor = "red" ;
    return false;
        }
// check for empty "tipPercent" input field at submit
    if (document.getElementById("tipPercent").value == "") {
        alert("Please Enter Tip %");
        document.getElementById("tipPercent").style.borderColor = "red" ;
    return false;
    } 
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


// function oneGuest(result1, result4){
//     document.getElementById("total-tip").innerHTML = "The total tip is $" + result1;
//     document.getElementById("total-bill").innerHTML = "The total charge + total tip is $" + result4;
// }
