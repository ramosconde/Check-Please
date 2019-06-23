


// restrict the nomOfGuests input fiels to numbers from 1-9
function isNumberKey(evt)
      {
         var charCode = (evt.which) ? evt.which : event.keyCode
         if (charCode > 31 && (charCode < 49 || charCode > 57))
            return false;

         return true;
      }
    
// function charcheck(evt) {
//     var ch = String.fromCharCode(evt.which);
//     // if (( /^[+]?[0-9]{1,3}(?:[0-9]*(?:[.,][0-9]{1})?|(?:,[0-9]{3})*(?:\.[0-9]{1,2})?|(?:\.[0-9]{3})*(?:,[0-9]{1,2})?)$/.test(ch))) {
//     if (!(/^[0-9]$/)) {
//         evt.preventDefault();
//         // console.log("charcheck does not work")
//         return false;
//     }
//     else{
//         // console.log("charcheck works")
//         evt.preventDefault();
//         return false;
//     }
// }

function calculate() {
    // numOfGuests = 1;
    // console.log(numOfGuests)
    var total = parseFloat(document.getElementById("totalBill").value);
    var percent = parseFloat(document.getElementById("tipPercent").value);
    var guests = parseFloat(document.getElementById("numOfGuests").value);

    if (document.getElementById("numOfGuests").value == "") {
        var guests = 1; 
    }else if (document.getElementById("numOfGuests").value == 0){
        var guests = 1; 
    }else if (document.getElementById("numOfGuests").value == 1){
        var guests = document.getElementById("numOfGuests").value;
    }else if (document.getElementById("numOfGuests").value >= 2) {
            var guests = document.getElementById("numOfGuests").value;
    }
    var result1 = ((total / 100) * percent).toFixed(2);            //total tip is
    console.log(result1);
    var result2 = (((total / 100) * percent) / guests).toFixed(2);     //tip per person
    console.log(result2);
    var result3 = ((total / guests) + ((total / 100) * percent)).toFixed(2);          //tip and bill per person
    console.log(result3);
    var result4 = ((total + ((total / 100) * percent))).toFixed(2);  //total bill + tip is
    console.log(result4);

// error check for empty totalBill input field
    if (document.getElementById("totalBill").value == "") {
        alert("Please Enter Bill Amount");
        document.getElementById("totalBill").style.borderColor = "red" ;
    return false;
    } else {
        document.getElementById("totalBill").style.borderColor = "blue" ;
    }
// error check for empty tipPercent field
    if (document.getElementById("tipPercent").value == "") {
        alert("Please Enter Tip %");
        document.getElementById("tipPercent").style.borderColor = "red" ;
    return false;
    } else {
        document.getElementById("tipPercent").style.borderColor = "blue" ;
    }

    //formats calculated results to US currency
    var newFormat1 = (new Intl.NumberFormat("en-US",{style: "currency", currency: "USD", useGrouping: true}).format(result1))
    var newFormat2 = (new Intl.NumberFormat("en-US",{style: "currency", currency: "USD", useGrouping: true}).format(result2))
    var newFormat3 = (new Intl.NumberFormat("en-US",{style: "currency", currency: "USD", useGrouping: true}).format(result3))
    var newFormat4 = (new Intl.NumberFormat("en-US",{style: "currency", currency: "USD", useGrouping: true}).format(result4))

        document.getElementById("totalTip").innerHTML = newFormat1;
        document.getElementById("tipPP").innerHTML = newFormat2;
        document.getElementById("billTipPP").innerHTML = newFormat3;
        document.getElementById("totalBillTip").innerHTML = newFormat4;
}

var validate = function(e) {
    var t = e.value;
    e.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
  }
  
function billSplitY(){
    window.location = href="tip_calc_y.html"
    console.log("Yes, it works")
}
function billSplitN(){
    window.location = href="tip_calc_n.html"
    console.log("No, it works")
}
// function moreThanOneGuest(result1, result2, result3, result4) {
//     document.getElementById("total-tip").innerHTML = "The total tip is $" + result1;
//     document.getElementById("tip-per-person").innerHTML = "The tip P/P is $" + result2;
//     document.getElementById("total-per-person").innerHTML = "Total charge + tip P/P is $" + result3;
//     document.getElementById("total-bill").innerHTML = "The total charge + total tip is $" + result4;
// }

// reset button
function reset(){

    var id= document.getElementById("id");
    var name= document.getElementById("name");
    var gender= document.getElementById("gender");
    var address= document.getElementById("address");
    var email = document.getElementById("email");
    var table = document.getElementById("myTableData");

    id.value="";
    name.value="";
    gender.value="";
    address.value="";
    email.value="";
}
// display resultsTable table when click
function show() {
    document.getElementById("resultsTable").style.display="table";

}

