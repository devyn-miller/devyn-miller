// Scroll to Top Button
let toTopBtn = document.createElement('button');
toTopBtn.id = 'toTopBtn';
toTopBtn.innerHTML = '&#8679;';
document.body.appendChild(toTopBtn);

window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        toTopBtn.style.display = 'block';
    } else {
        toTopBtn.style.display = 'none';
    }
};

toTopBtn.addEventListener('click', function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// Fixed Navigation Bar
window.addEventListener('scroll', function() {
    let navbar = document.getElementById('navbar');
    if (window.pageYOffset > 0) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('animated');
    });
});
