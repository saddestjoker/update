// Smooth scrolling for anchor links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Image hover effect
document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'transform 0.5s ease';
    });

    img.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});

// Dark mode toggle
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);


// Lightbox functionality
document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', function() {
        openLightbox(this.src);
    });
});

function openLightbox(src) {
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
    lightbox.innerHTML = `
        <span class="close">&times;</span>
        <div class="lightbox-content">
            <img src="${src}" alt="Enlarged Image">
        </div>
    `;
    document.body.appendChild(lightbox);

    lightbox.style.display = 'block';

    // Close lightbox on click
    lightbox.querySelector('.close').addEventListener('click', function() {
        lightbox.style.display = 'none';
        document.body.removeChild(lightbox);
    });

    // Close lightbox on outside click
    lightbox.addEventListener('click', function(e) {
        if (e.target === this) {
            lightbox.style.display = 'none';
            document.body.removeChild(lightbox);
        }
    });
}
