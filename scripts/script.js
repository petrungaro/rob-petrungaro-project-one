$(function() {

    const $menu = $('.menu');
    const $menuButton =  $('.hamburger');
    const $window = $(window);

    // Function to check the width of the screen:
    const checkScreenWidth = function() {
        const screenWidth = $window.width();
        console.log(screenWidth, 'checking')
        
        // if screen width is 500 or under, run mobileMenu
        if (screenWidth <= 500) {
            mobileMenu();
        } else {
            $menu.show();
        }
    }

    const toggleMenu = function() {
        $menu.slideToggle("slow");
    }

    // Function to hide the menu, and enable the slideToggle:
    const mobileMenu = function() {
        $menu.hide();
        $menuButton.off('click', toggleMenu) // THIS SOLVED THE PROBLEM! When I was resizing the window, the toggle would not work properly. It would slide down and up several times. After lots of googling, I think the event listener for on-click was getting applied for every change in screen width (almost counting every pixel), so add the .off() method clears any existing listener  before adding a new one. Not sure if this is ideal, but it seems to work.
        $menuButton.on('click', toggleMenu)
    }

    
    checkScreenWidth(); 
    $(window).resize(checkScreenWidth);

});

// TO DO: Put all variables / functions in a namespace object, tidy up the code
