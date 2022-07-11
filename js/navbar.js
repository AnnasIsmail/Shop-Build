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