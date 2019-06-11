

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