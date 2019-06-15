

 function calculate() {
    var total = parseFloat(document.getElementById("totalBill").value);
    var percent = parseFloat(document.getElementById("tipPercent").value);
    var guests = parseFloat(document.getElementById("numOfGuests").value);

    var result1 = (total / 100) * percent;              //total tip is
    var result2 = ((total / 100) * percent) / guests;     //tip per person
    var result3 = (total / guests) + result1;           //tip and bill per person
    var result4 = (total + ((total / 100) * percent));  //total bill + tip is

    if (!isNaN(result1)) {
        // document.getElementById("total-tip").innerHTML = "The total tip is $" + result1;
        // document.getElementById("tip-per-person").innerHTML = "The tip per person is $" + result2;
        // document.getElementById("total-per-person").innerHTML = "The total per person is $" + result3;
        // document.getElementById("total-bill").innerHTML = "The total bill is $" + result4;
        console.log(result1)
    }

}
var demo


function displayErrMsg() {
    // iptErrObj.style.visibility = 'visible';
    // iptInputObj.style.borderColor = "red";
    // document.getElementById("demo").innerHTML = "Numbers Only";

}

function charcheck(evt) {
    var ch = String.fromCharCode(evt.which);

    if (!( /^[+]?[0-9]+\.[0-9]+$/.test(ch))) {
        evt.preventDefault();
        // document.getElementById("demo").innerHTML = "Numbers Only";
        // var a = "<p style=’color:red;’> Numbers Only </p>";
        // document.write(a);
        displayErrMsg();
    }

}
console.log("this is a test")

d3.select("#btn").on("click", handleClick);

function handleClick(){
    console.log("hello");

}

function checkforempty() {
    if (document.getElementById("totalBill").value == "")
    alert("Please Enter Bill Amount");
    document.getElementById("totalBill").style.borderColor = "red" ;
    return false;
    console.log(totalBill)

}


