const slideNav = {};

// CACHED SELECTORS
slideNav.$menu = $('.menu');
slideNav.$menuButton =  $('.hamburger');
slideNav.$window = $(window);


// INITIALIZATION 
slideNav.init = function() {
    slideNav.checkScreenWidth();
    slideNav.$window.resize(slideNav.checkScreenWidth); 
}


// FUNCTIONS / METHODS

// Function to check the width of the screen:
slideNav.checkScreenWidth = function() { 
    const screenSize = slideNav.$window.width();

    console.log(screenSize , 'checking');
    // if screen width is 500 or under, run mobileMenu
    if (screenSize <= 500) {
        slideNav.mobileMenu();
        console.log('under 500, run mobileMenu')
    } else {
        slideNav.$menu.show();
        console.log('should show menu')
    }
}

// Function to hide the menu and add a click event listener :
slideNav.mobileMenu = function() {
    slideNav.$menu.hide();
    slideNav.$menuButton.off(); 
    slideNav.$menuButton.on('click', slideNav.toggleMenu);
}

// Function to slide the menu in / out on a toggle :
slideNav.toggleMenu = function() {
    slideNav.$menu.slideToggle("slow");
}

//DOCUMENT READY
$(function() {
    slideNav.init();
    
})
$(window).resize(slideNav.checkScreenWidth);