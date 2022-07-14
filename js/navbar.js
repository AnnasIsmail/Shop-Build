const ResNav = document.getElementById("NavbarResponsive");

function navbarResponsiveClick(){
    if(ResNav.classList.contains("navbar-responsive-open") === true){
        ResNav.classList.remove('navbar-responsive-open');
        ResNav.classList.add('navbar-responsive-close');
    }else{
        ResNav.classList.remove('navbar-responsive-close');
        ResNav.classList.remove('topNavbar');
        ResNav.classList.add('navbar-responsive-open');
    }
}

const dropdownAL = document.getElementById('dropdownAfterLogin');

function toogleDropdown(){
    if(dropdownAL.classList.contains('hidden')){
        dropdownAL.classList.remove('hidden');
    }else{
        dropdownAL.classList.add('hidden');
    }
}

function leftBarFunction(){
    leftBar = document.getElementsByClassName("leftBar")[0]
    if(leftBar.classList.contains("leftBarOpen")){
        leftBar.classList.remove("leftBarOpen");
        leftBar.classList.add("leftBarClose");
    }else{
        leftBar.classList.remove("leftBarClose");
        leftBar.classList.add("leftBarOpen");
    }
}