const slideNav = {};

// CACHED SELECTORS
slideNav.$menu = $('.menu');
slideNav.$menuButton =  $('.hamburger');
slideNav.$window = $(window);
slideNav.$menuIcon = $('#menu-icon');


// INITIALIZATION 
slideNav.init = function() {
    slideNav.checkScreenWidth();
    slideNav.$window.resize(slideNav.checkScreenWidth);
    slideNav.rotateIcon(); 
}


// FUNCTIONS / METHODS

// Function to check the width of the screen:
slideNav.checkScreenWidth = function() { 
    // store the current width of the screen after resizing to a variable:
    const screenSize = slideNav.$window.width();

    // if screen width is 500 or under, run mobileMenu, otherwise show the menu as normal
    if (screenSize <= 500) {
        slideNav.mobileMenu();
    } else {
        slideNav.$menu.show();
    }
}

// Function to hide the menu and add a click event listener (and remove any existing listeners that were applied while resizing the window) :
slideNav.mobileMenu = function() {
    slideNav.$menu.hide();
    slideNav.$menuButton.off(); 
    slideNav.$menuButton.on('click', slideNav.toggleMenu);
}

// Function to slide the menu in / out on a toggle :
slideNav.toggleMenu = function() {
    slideNav.$menu.slideToggle("slow");
}

// Function to toggle class .flip on menu icon :
slideNav.rotateIcon = function() {
    slideNav.$menuIcon.on('click', function() {
        slideNav.$menuIcon .toggleClass('flip');
    }
    );
}


//DOCUMENT READY
$(function() {
    slideNav.init();
    
})
$(window).resize(slideNav.checkScreenWidth);