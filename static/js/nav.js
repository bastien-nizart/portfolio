function nav_button() {
    document.getElementById("nav").style.visibility == "visible"
        ? close_nav()
        : open_nav()
}

function open_nav() {
    document.getElementById("nav").style.width = "300px";
    document.getElementById("nav").style.visibility = "visible";
    document.getElementById("mobile-nav-icon").classList.remove('fa-bars');
    document.getElementById("mobile-nav-icon").classList.add('fa-xmark');
}

function close_nav() {
    document.getElementById("nav").style.width = "0px";
    document.getElementById("nav").style.visibility = "hidden";
    document.getElementById("mobile-nav-icon").classList.add('fa-bars');
    document.getElementById("mobile-nav-icon").classList.remove('fa-xmark');
}