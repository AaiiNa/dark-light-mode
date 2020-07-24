let darkmode = false,
    lightmode = true;


function theme() {
    if (darkmode === false) {
        darkmode = true;
        lightmode = false;
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("body").style.color = "white";
        document.querySelector("heading").style.color = "#EFD973";
    } else if (darkmode === true) {
        darkmode = false;
        lightmode = true;
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("body").style.backgroundColor = "black";

    }

}