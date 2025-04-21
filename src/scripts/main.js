// This file contains JavaScript code for the "About Me" website.
// You can add functionality for interactive elements below.

document.addEventListener('DOMContentLoaded', () => {
    // Example: Form validation or dynamic content updates can be added here.
    
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            // Add form validation logic here
            alert('Form submitted successfully!');
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Add a little meow sound effect when clicking on Miss Paws' name
    const title = document.querySelector('h1');
    title.addEventListener('click', function() {
        alert('Meow! Thanks for visiting my page!');
    });
    
    // Add a little message to let visitors know they can click the title
    title.style.cursor = 'pointer';
    title.title = 'Click for a surprise!';
});