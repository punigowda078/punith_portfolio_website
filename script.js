document.addEventListener('DOMContentLoaded', () => {

    // 1. Smooth Scrolling for Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const navbarHeight = document.getElementById('navbar').offsetHeight;
                window.scrollTo({
                    top: targetElement.offsetTop - navbarHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Buttons
    const resumeBtn = document.querySelector('.resume-btn');
    const hireMeBtn = document.querySelector('.hire-me-btn');
    const talkBtn = document.querySelector('.talk-btn');
    const contactForm = document.querySelector('.contact-form form');

    // Scroll to contact section
    const scrollToContact = (e) => {
        e.preventDefault();
        const navbarHeight = document.getElementById('navbar').offsetHeight;
        window.scrollTo({
            top: document.querySelector('#contact').offsetTop - navbarHeight,
            behavior: 'smooth'
        });
    };

    if (hireMeBtn) hireMeBtn.addEventListener('click', scrollToContact);
    if (talkBtn) talkBtn.addEventListener('click', scrollToContact);

    // Resume Download
    if (resumeBtn) {
        resumeBtn.addEventListener('click', () => {
            const link = document.createElement('a');
            link.href = 'Punith CV [ CV ] RESUME.pdf';  // ✅ your resume file path
            link.download = 'Punith_Kumar_Resume.pdf';
            link.click();
        });
    }

    // Contact Form (EmailJS)
    emailjs.init('YOUR_PUBLIC_KEY'); // replace with your EmailJS public key
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', contactForm)
                .then(() => {
                    alert('✅ Message sent successfully!');
                    contactForm.reset();
                }, (error) => {
                    alert('❌ Failed to send. Please try again later.');
                    console.error('Error:', error);
                });
        });
    }

    // Project GitHub Redirects
    document.querySelectorAll('.github-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const projectUrl = link.getAttribute('data-github');
            if (projectUrl) window.open(projectUrl, '_blank');
        });
    });
});
