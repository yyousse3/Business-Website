var alerted = false;

function scroll() {
    var t = window.scrollY;
    if (t>500&&!alerted){
        alerted=true;
        alert("Use code sleep for 30% off your first order!");
    }
}
