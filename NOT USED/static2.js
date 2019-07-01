console.group('currency');
// var formatter = new Intl.NumberFormat('en-US',
//     {
//         style: 'currency',
//         currency: 'USD',
//         useGrouping: true,
//     });

function calculate() {
    var total = parseFloat(document.getElementById("totalBill").value);
    var percent = parseFloat(document.getElementById("tipPercent").value);
    var guests = parseFloat(document.getElementById("numOfGuests").value);

    var result1 = ((total / 100) * percent) / guests;
    var result2 = (total / guests) + result1;
    var result3 = (total + ((total / 100) * percent));
    var result4 = (total / 100) * percent;

    if (!isNaN(result1)) {
        document.getElementById("tip-per-person").innerHTML = "The tip per person is $" + result1;
        // console.log(new Intl.NumberFormat('de-US', { style: 'currency', currency: 'USD' }).format(result2));
        document.getElementById("total-per-person").innerHTML = "The total per person is $" + result2;
        document.getElementById("total-bill").innerHTML = "The total bill is $" + result3;
        document.getElementById("total-tip").innerHTML = "The total tip is $" + result4;
    }
}


