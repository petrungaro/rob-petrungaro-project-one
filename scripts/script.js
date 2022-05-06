$(function() {
    console.log('Oh hello there');

    // $('.menu').hide();

    $('.hamburger').on('click', function() {
        $('.menu').slideToggle("slow")
    })
});

// This does not work properly - hides the nav ul at *all* sizes, need to rework:

// If the page is loaded on screen width over 500px, do nothing.
// If the page is loaded on screen width 500px or under (or resized), do this:
    // hide the ul .menu, and allow the slideToggle function to run.
    // if the screen is resized over 500px, show .menu (styling of the menu is in css from row to column, etc)
    