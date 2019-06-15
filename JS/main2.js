

d3.select("button").on("click", handleClick);
console.log("hello22222")


function handleClick() {
    d3.event.preventDefault();
    console.log("hello");

}



function charcheck(evt) {
    var ch = String.fromCharCode(evt.which);

    if (!( /^[+]?[0-9]+\.[0-9]+$/.test(ch))) {
        evt.preventDefault();
        // document.getElementById("demo").innerHTML = "Numbers Only";
        // var a = "<p style=’color:red;’> Numbers Only </p>";
        // document.write(a);
        // displayErrMsg();
    }

}
console.log("this is a test")

d3.select("#btn").on("click", handleClick);

function handleClick(){
    console.log("hello");

}
