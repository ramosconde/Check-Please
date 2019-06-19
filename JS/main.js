

// d3.select("button").on("click", handleClick);
// function handleClick() {
//     d3.event.preventDefault();
//     console.log("hello button");
// }

// d3.select(".yes").on("click", billSplitY);

// d3.select(".no").on("click", billSplitN);


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
    console.log(numOfGuests)
    var total = parseFloat(document.getElementById("totalBill").value);
    var percent = parseFloat(document.getElementById("tipPercent").value);
    // var guests = parseFloat(document.getElementById("numOfGuests").value);

    var result1 = ((total / 100) * percent).toFixed(2);            //total tip is
    console.log(result1);
    // var result2 = (((total / 100) * percent) / guests).toFixed(2);     //tip per person
    // console.log(result2);
    // var result3 = ((total / guests) + ((total / 100) * percent)).toFixed(2);          //tip and bill per person
    // console.log(result3);
    var result4 = ((total + ((total / 100) * percent))).toFixed(2);  //total bill + tip is
    console.log(result4);

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
    // if (document.getElementById("numOfGuests").value == "") {
    //     var guests = 1;      // + (document.getElementById("numOfGuests").value);
        document.getElementById("total-tip").innerHTML = "The total tip is $" + result1;
        document.getElementById("total-bill").innerHTML = "The total charge + total tip is $" + result4;
    //     // oneGuest.apply(result1, result4);
    // }
    // if (document.getElementById("numOfGuests").value == 1){
    //     var guests = document.getElementById("numOfGuests").value;
    //     document.getElementById("total-tip").innerHTML = "The total tip is $" + result1;
    //     document.getElementById("total-bill").innerHTML = "The total charge + total tip is $" + result4;
    //     // oneGuest.apply(result1, result4);
    // }
    // if (document.getElementById("numOfGuests").value >= 2) {
    //     var guests = document.getElementById("numOfGuests").value;
    //     document.getElementById("total-tip").innerHTML = "The total tip is $" + result1;
    //     document.getElementById("tip-per-person").innerHTML = "The tip P/P is $" + result2;
    //     document.getElementById("total-per-person").innerHTML = "Total charge + tip P/P is $" + result3;
    //     document.getElementById("total-bill").innerHTML = "The total charge + total tip is $" + result4;
    //     // moreThanOneGuest.apply(result1, result2, result3, result4);
    // }
}

var validate = function(e) {
    var t = e.value;
    e.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
  }

//  var billSplitY = function (){
//     running = "http://tip_calc.html"

// }
function billSplitY(){
    window.location = href="tip_calc.html"
    console.log("Yes, it works")
}
function billSplitN(){
    window.location = href="tip_calc_n.html"
    console.log("No, it works")
}

function oneGuest(result1, result4){
    document.getElementById("total-tip").innerHTML = "The total tip is $" + result1;
    document.getElementById("total-bill").innerHTML = "The total charge + total tip is $" + result4;
}
function moreThanOneGuest(result1, result2, result3, result4) {
    document.getElementById("total-tip").innerHTML = "The total tip is $" + result1;
    document.getElementById("tip-per-person").innerHTML = "The tip P/P is $" + result2;
    document.getElementById("total-per-person").innerHTML = "Total charge + tip P/P is $" + result3;
    document.getElementById("total-bill").innerHTML = "The total charge + total tip is $" + result4;
}