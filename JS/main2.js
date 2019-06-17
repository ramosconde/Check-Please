

d3.select("button").on("click", handleClick);
console.log("hello22222")

function handleClick() {
    d3.event.preventDefault();
    console.log("hello button");

}
console.log("this is a test")

d3.select("#btn").on("click", handleClick);

function handleClick(){
    d3.event.preventDefault();
    console.log("hello btn");

}


function charcheck(evt) {
    var ch = String.fromCharCode(evt.which);
    // if (!(/^\d*(\.?\d{0,2})$/.test(ch))) {
    // if (( /^[0-9]+\.[0-9]*$/.test(ch))) {
    if (( /^[+]?[0-9]{1,3}(?:[0-9]*(?:[.,][0-9]{1})?|(?:,[0-9]{3})*(?:\.[0-9]{1,2})?|(?:\.[0-9]{3})*(?:,[0-9]{1,2})?)$/.test(ch))) {

        evt.preventDefault();
        console.log("charcheck does not work")
        return false;
        // document.getElementById("demo").innerHTML = "Numbers Only";
        // var a = "<p style=’color:red;’> Numbers Only </p>";
        // document.write(a);
        // displayErrMsg();
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

    var result1 = (total / 100) * percent;              //total tip is
    var result2 = ((total / 100) * percent) / guests;     //tip per person
    var result3 = (total / guests) + result1;           //tip and bill per person
    var result4 = (total + ((total / 100) * percent));  //total bill + tip is

    // if (!isNaN(result1)) {
    //     // document.getElementById("total-tip").innerHTML = "The total tip is $" + result1;
    //     // document.getElementById("tip-per-person").innerHTML = "The tip per person is $" + result2;
    //     // document.getElementById("total-per-person").innerHTML = "The total per person is $" + result3;
    //     // document.getElementById("total-bill").innerHTML = "The total bill is $" + result4;
    //     console.log(result2)
    // }

}


var validate = function(e) {
    var t = e.value;
    e.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
  }
