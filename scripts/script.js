$(function() {

    const $menu = $('.menu');
    const $menuButton =  $('.hamburger');
    const $window = $(window);

    // Function to check the width of the screen:
    const checkScreenWidth = function() {
        const screenWidth = $window.width();
        
        // if screen width is 500 or under, run mobileMenu
        if (screenWidth <= 500) {
            mobileMenu();
        }
    }

    // Function to hide the menu, and enable the slideToggle:
    const mobileMenu = function() {
        $menu.hide();
        $menuButton.on('click', function() {
            $menu.slideToggle("slow");
        })
    }

    
    checkScreenWidth();

});

