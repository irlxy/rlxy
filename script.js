document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('شكراً لتواصلك معي!');
    this.reset();
});
