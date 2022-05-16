const scrollButton = document.getElementById('scroll-button');

// when the user scrolls,  show the button

window.addEventListener('scroll', function(){
    if (window.scrollY > 500) {
        scrollButton.style.display = 'flex';
    } 
}) 

// when the button is clicked, scroll to the top of the page
scrollButton.addEventListener('click', function() {
    window.scrollTo(0,0);
    setTimeout(function(){
        scrollButton.style.display = 'none';
    }, 1000);
})