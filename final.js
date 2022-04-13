
function hiring() {
    hiringRadioButton = document.getElementById('hiring');

    if (hiringRadioButton.checked){
        document.getElementById('Rate').style.visibility = "visible";
    }
    else{
        document.getElementById('Rate').style.visibility = "hidden";
    }    
   return;
}

window.onload = function () {
    // after the window has loaded
    console.log("----------------------LOADED!\n");
    hiringRadioButton = document.getElementById('hiring');

    hiringRadioButton.addEventListener("click", hiring);
    document.getElementById('hide').addEventListener("click", hiring);
    document.getElementById('comment').addEventListener("click", hiring);
}