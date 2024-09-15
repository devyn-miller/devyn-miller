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
    let navbar = document.querySelector('.top-bar');
    if (window.pageYOffset > 0) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

// Skills Filtering
document.addEventListener('DOMContentLoaded', () => {
    const tags = document.querySelectorAll('.tag');
    const projects = document.querySelectorAll('.project');
    const experiences = document.querySelectorAll('.experience');
    const educations = document.querySelectorAll('.education');
    const awards = document.querySelectorAll('#awards ul li');

    const toggleActive = (element) => {
        element.classList.toggle('active');
    };

    const filterItems = (filter) => {
        // Filter Projects
        projects.forEach(project => {
            const skills = project.getAttribute('data-skills').split(', ').map(s => s.trim());
            if (skills.includes(filter)) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });

        // Filter Experiences
        experiences.forEach(exp => {
            const category = exp.getAttribute('data-category');
            if (category === filter) {
                exp.style.display = 'block';
            } else {
                exp.style.display = 'none';
            }
        });

        // Filter Educations
        educations.forEach(edu => {
            const category = edu.getAttribute('data-category');
            if (category === filter) {
                edu.style.display = 'block';
            } else {
                edu.style.display = 'none';
            }
        });

        // Filter Awards (if applicable)
        awards.forEach(award => {
            const text = award.textContent.toLowerCase();
            if (text.includes(filter.toLowerCase())) {
                award.style.display = 'list-item';
            } else {
                award.style.display = 'none';
            }
        });
    };

    tags.forEach(tag => {
        tag.addEventListener('click', (e) => {
            e.stopPropagation();
            const filter = tag.getAttribute('data-filter');
            toggleActive(tag);
            filterItems(filter);
        });
    });

    // Reset filter when clicking outside tags
    document.addEventListener('click', (e) => {
        if (!e.target.classList.contains('tag')) {
            tags.forEach(tag => tag.classList.remove('active'));
            projects.forEach(project => project.style.display = 'block');
            experiences.forEach(exp => exp.style.display = 'block');
            educations.forEach(edu => edu.style.display = 'block');
            awards.forEach(award => award.style.display = 'list-item');
        }
    });
});
