// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
let fakeButton = document.getElementById("submit-button");
let pageContent = document.getElementById("contact-page");
fakeButton.addEventListener("click", changePage);
function changePage(){
    
    pageContent.innerHTML = "<p class = 'changed'>Thank you for your message!</p>";
}

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

