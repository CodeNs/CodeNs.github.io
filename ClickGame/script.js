var clicks = 0
document.getElementById("auto").disabled = true


// Cookie Button
function myFunction() {
    clicks = clicks + 1;
    document.getElementById("counter").innerHTML=clicks;

    if (clicks>= 10) {
        document.getElementById("auto").disabled = false
    }

};

// 5 button
function megaClick() {
    clicks = clicks + 5;
    document.getElementById("counter").innerHTML=clicks;

};
