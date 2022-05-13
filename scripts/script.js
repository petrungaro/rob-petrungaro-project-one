// COMMENT SECTION

// add functionality so that comments will be posted to the page when the user submits the form

// caching the selectors
const form = document.getElementById('comment-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const commentInput = document.getElementById('message');
// const commentSection = document.querySelector('section .comments');
const commentSection = document.getElementById('comments-section');



// Add an event listener to the form, listening for submission
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // capture user inputs (name, email, text) and assign them to variables:
    const userName = nameInput.value;
    const userEmail = emailInput.value;
    const userComment = commentInput.value;

    // create an html element that will hold the input, matching the comments already on the page ( div.comment-card )
    const commentCardDiv = document.createElement('div');
    commentCardDiv.classList.add('comment-card');
    
    // add the child elements to the comment-card (img, div.comment-content>p.commenter+p) assign them IDs as well
    commentCardDiv.innerHTML = '<img src="https://placeimg.com/200/200/animals" alt="">';

    const commentContentDiv = document.createElement('div');
    commentContentDiv.classList.add('comment-content');

    const commenterP = document.createElement('p');
    commenterP.classList.add('commenter');
    commenterP.textContent = userName;

    const commentP = document.createElement('p');
    commentP.textContent = userComment;

    commentContentDiv.appendChild(commenterP);
    commentContentDiv.appendChild(commentP);

    commentCardDiv.appendChild(commentContentDiv);

    // append the div as a child to section.comments (added an ID to the section to target it)
    commentSection.appendChild(commentCardDiv);
    
    // clear the form
    nameInput.value = '';
    emailInput.value = '';
    commentInput.value = '';

})





