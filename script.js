document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelectorAll('nav div a');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        navLinks.forEach(link => {
            link.classList.toggle('show');
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const subscribeButton = document.querySelector('.submit-btn');
    const emailInput = document.querySelector('.form-control');

    subscribeButton.addEventListener('click', function(event) {
        event.preventDefault();
        const email = emailInput.value.trim();

        if (email) {
            alert(`Thank you for subscribing with ${email}`);
            // Here you can add code to send the email to your server or email service.
            emailInput.value = ''; // Clear the input after submission
        } else {
            alert('Please enter a valid email address.');
        }
    });
});



