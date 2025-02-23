document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for reaching out! We will get back to you soon.");
});

// Get the button
let backToTopBtn = document.getElementById('back-to-top');

// Show or hide the button based on scroll position
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopBtn.style.display = "block"; // Show the button
    } else {
        backToTopBtn.style.display = "none"; // Hide the button
    }
};

// Scroll to the top when the button is clicked
backToTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
