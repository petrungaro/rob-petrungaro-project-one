$(function() {
    console.log('Oh hello there');

    $('.menu').hide();

    $('.hamburger').on('click', function() {
        $('.menu').slideToggle("slow")
    })
});