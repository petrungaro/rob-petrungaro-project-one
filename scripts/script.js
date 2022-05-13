// COMMENT SECTION

// add functionality so that comments will be posted to the page when the user submits the form

// caching the selectors
const form = document.getElementById('comment-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const commentInput = document.getElementById('message');
const commentSection = document.getElementById('comments-section');

const dateOptions = {  
    weekday: 'long',
    year: 'numeric', 
    month: 'long', 
    day: 'numeric', };




// Add an event listener to the form, listening for submission
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    
    // capture user inputs (name, email, text) and assign them to variables:
    const userName = nameInput.value;
    const userEmail = emailInput.value;
    const userComment = commentInput.value;

    // originally this url was returning the same image (from the cache?) for each new comment. Found this solution to add a timestamp at the end of the url here ( https://www.geeksforgeeks.org/how-to-get-the-new-image-url-after-refreshing-the-image-using-javascript/ )
    const timeStamp = new Date().getTime();
    const imageURL = `https://placeimg.com/200/200/animals?t=${timeStamp}`;

    
    // create an html element that will hold the input, matching the comments already on the page ( div.comment-card )
    const commentCardDiv = document.createElement('div');
    commentCardDiv.classList.add('comment-card');
    
    // adding an image element as inner html inside div.comment-card
    commentCardDiv.innerHTML = `<img src="${imageURL}" alt="">`;

    // creating div.comment-content
    const commentContentDiv = document.createElement('div');
    commentContentDiv.classList.add('comment-content');

    // creating p.commenter and adding the user's inputting name as text content
    const commenterP = document.createElement('p');
    commenterP.classList.add('commenter');
    // adding the date (found this solution on stack overflow - https://stackoverflow.com/questions/4822852/how-to-get-the-day-of-week-and-the-month-of-the-year)
    const dateString = new Date().toLocaleTimeString('en-us', dateOptions);
    commenterP.textContent = `${dateString} by ${userName}`;

    // creating the p and adding the user's comment as text content
    const commentP = document.createElement('p');
    commentP.textContent = userComment;

    // appending the p.commenter and p to div.comment-content
    commentContentDiv.appendChild(commenterP);
    commentContentDiv.appendChild(commentP);

    // appending div.comment-content to div.comment-card
    commentCardDiv.appendChild(commentContentDiv);

    // append the div as a child to section.comments (added an ID to the section to target it)
    commentSection.appendChild(commentCardDiv);
    
    // clear the form
    nameInput.value = '';
    emailInput.value = '';
    commentInput.value = '';

})


console.log('Why is the image on the comment the same for each comment? When loading "https://placeimg.com/200/200/animals" in your browser, it shows a random image when you refresh, but on this page its only randomizing once then using the same image in each new comment - how do I make it load a new image each time?');
console.log('UPDATE - found a solution to add a timestamp at the end of the image url - source in code comments');






