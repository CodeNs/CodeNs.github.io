//Listen for key press -------------------------------------------

document.addEventListener('keypress', function (letter) {
    letter = String.fromCharCode(letter.keyCode)
    alert(letter);
    document.getElementsByTagName("h2")[0].innerText = letter

//You can make your code more complex with conditionals 
    if (letter == "a") {
        window.location.assign("https://en.wikipedia.org/wiki/Apple.com")
    }
})

// Mouse Enter -------------------------------
document.getElementById("box").addEventListener('mouseenter', function(){
    document.getElementsByTagName("h2")[0].innerText = "Get out the box!";
})


//Mouse Leave -----------------------------------------
document.getElementById("box").addEventListener('mouseleave', function(){
    document.getElementsByTagName("h2")[0].innerText = "Thanks!";
})


//Click ------------------------------------------------------------
document.getElementById("box").addEventListener('click', function(){
    document.getElementsByTagName("h2")[0].innerText = "Owwwww!!";
})

