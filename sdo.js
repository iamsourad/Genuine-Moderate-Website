// Toggle dark mode
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    // Update button text/icon
    if (document.body.classList.contains('dark')) {
        themeToggle.textContent = '☀️ Toggle Light Mode';
    } else {
        themeToggle.textContent = '🌙 Toggle Dark Mode';
    }
});

// Simple form submission alert (for demo)
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! (This is a demo.)');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});