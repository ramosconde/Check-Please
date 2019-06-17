

d3.select("button").on("click", handleClick);
function handleClick() {
    d3.event.preventDefault();
    console.log("hello button");

}

d3.select("#btn").on("click", calculate);
function handleClick(){
    d3.event.preventDefault();
    console.log("hello btn");
}

function charcheck(evt) {
    var ch = String.fromCharCode(evt.which);
    if (( /^[+]?[0-9]{1,3}(?:[0-9]*(?:[.,][0-9]{1})?|(?:,[0-9]{3})*(?:\.[0-9]{1,2})?|(?:\.[0-9]{3})*(?:,[0-9]{1,2})?)$/.test(ch))) {
        evt.preventDefault();
        console.log("charcheck does not work")
        return false;
    }
    else{
        console.log("charcheck works")
        evt.preventDefault();
        return false;
    }
}

function calculate() {
    if (document.getElementById("totalBill").value == "") {
        alert("Please Enter Bill Amount");
        document.getElementById("totalBill").style.borderColor = "red" ;
    return false;
        }
    if (document.getElementById("tipPercent").value == "") {
        alert("Please Enter Tip %");
        document.getElementById("tipPercent").style.borderColor = "red" ;
    return false;
    }
    
    var total = parseFloat(document.getElementById("totalBill").value);
    var percent = parseFloat(document.getElementById("tipPercent").value);
    var guests = parseFloat(document.getElementById("numOfGuests").value);

    // parseFloat(Math.round(num3 * 100) / 100).toFixed(2);

    var result1 = ((total / 100) * percent).toFixed(2);            //total tip is
    var result2 = (((total / 100) * percent) / guests).toFixed(2);     //tip per person
    var result3 = ((total / guests) + result1);          //tip and bill per person
    var result4 = ((total + ((total / 100) * percent))).toFixed(2);  //total bill + tip is

    // if (!isNaN(result1)) {
        document.getElementById("total-tip").innerHTML = "The total tip is $" + result1;
        document.getElementById("tip-per-person").innerHTML = "The tip P/P is $" + result2;
        document.getElementById("total-per-person").innerHTML = "Total charge + tip P/P is $" + result3;
        document.getElementById("total-bill").innerHTML = "The total charges + total tip is $" + result4;
    // }

}


var validate = function(e) {
    var t = e.value;
    e.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
  }

