// components.js - Updated for New Modern Design

// 1. Global Navigation (Navbar with new styling)
const navHTML = `
    <div class="top-nav-wrapper">
        <div class="container">
            <nav class="new-main-nav">
                <div class="logo-area">
                    <img src="Logo.jpg" alt="Institute Logo">
                    <div>
                        <h2>Indian Classes Sikar</h2>
                        <p>Technical Education</p>
                    </div>
                </div>
                <div class="nav-links">
                    <a href="index.html">Home</a>
                    <a href="about.html">About Us</a>
                    <a href="courses.html">Courses</a>
                    <a href="cbt-test.html">CBT Test</a>
                    <a href="gallery.html">Gallery</a>
                    <a href="auto-draft.html">Auto Draft</a>
                    <a href="contact.html">Contact</a>
                </div>
                <a href="contact.html" class="btn-enquiry">Enquiry Now</a>
            </nav>
        </div>
    </div>
`;

// 2. Global Footer (Detailed new footer design)
const footerHTML = `
    <footer>
        <div class="container">
            <div class="footer-grid">
                <!-- Col 1 -->
                <div class="footer-logo">
                    <img src="Logo.jpg" alt="Logo">
                    <h2>Indian Classes Sikar</h2>
                    <p style="color: #64748b;">Technical Education</p>
                    <p>Best ITI coaching Institute for Electrician, Fitter and all trades with NCVT CBT preparation and placement assistance.</p>
                    <div class="social-icons">
                        <a href="#" style="background:#3b5998;"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="#" style="background:#ff0000;"><i class="fa-brands fa-youtube"></i></a>
                        <a href="#" style="background:#e1306c;"><i class="fa-brands fa-instagram"></i></a>
                        <a href="https://wa.me/919785842401" style="background:#25d366;"><i class="fa-brands fa-whatsapp"></i></a>
                    </div>
                </div>
                
                <!-- Col 2 -->
                <div class="footer-col">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="courses.html">Courses</a></li>
                        <li><a href="cbt-test.html">CBT Test</a></li>
                        <li><a href="gallery.html">Gallery</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                    </ul>
                </div>

                <!-- Col 3 -->
                <div class="footer-col">
                    <h4>Our Courses</h4>
                    <ul>
                        <li><a href="courses.html">Electrician</a></li>
                        <li><a href="courses.html">Fitter</a></li>
                        <li><a href="courses.html">COPA</a></li>
                        <li><a href="courses.html">Welder</a></li>
                        <li><a href="courses.html">Diesel Mechanic</a></li>
                    </ul>
                </div>

                <!-- Col 4 -->
                <div class="footer-col">
                    <h4>Important Links</h4>
                    <ul>
                        <li><a href="#">Resume Builder</a></li>
                        <li><a href="auto-draft.html">Auto Draft</a></li>
                        <li><a href="courses.html">Fee Calculator</a></li>
                        <li><a href="inventory.html">Stock Register</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>

                <!-- Col 5 -->
                <div class="footer-col">
                    <h4>Contact Info</h4>
                    <ul class="contact-info">
                        <li><i class="fa-solid fa-location-dot"></i> <span>Indian Classes Sikar, Sikar, Rajasthan - 332001</span></li>
                        <li><i class="fa-solid fa-phone"></i> <span>+91 97858 42401</span></li>
                        <li><i class="fa-solid fa-envelope"></i> <span>indianclassessikar@gmail.com</span></li>
                        <li><i class="fa-solid fa-clock"></i> <span>Mon - Sat: 9:00 AM - 6:00 PM</span></li>
                    </ul>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; 2026 Indian Classes Sikar. All Rights Reserved.</p>
                <p>Designed with ❤️ for Students</p>
            </div>
        </div>
    </footer>

    <!-- Floating Social Buttons globally injected -->
    <div class="floating-social">
        <a href="https://wa.me/919785842401" class="float-btn btn-wa"><i class="fa-brands fa-whatsapp"></i> WhatsApp</a>
        <a href="tel:+919785842401" class="float-btn btn-call"><i class="fa-solid fa-phone"></i> Call Us</a>
        <a href="contact.html" class="float-btn btn-apply"><i class="fa-solid fa-file-signature"></i> Apply Now</a>
    </div>
`;

// Execute when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    
    // Inject Navigation into the <nav> tag on all pages
    const navElement = document.querySelector("nav");
    if (navElement) {
        navElement.outerHTML = navHTML; // Replaces old <nav> with the new structured HTML
    }

    // Inject Footer into the <footer> tag on all pages
    const footerElement = document.querySelector("footer");
    if (footerElement) {
        footerElement.outerHTML = footerHTML; // Replaces old <footer> with the new structured HTML
    }
    
    // Check if FontAwesome is loaded (needed for icons in nav/footer), if not, inject it
    if (!document.querySelector('link[href*="font-awesome"]')) {
        const faLink = document.createElement('link');
        faLink.rel = 'stylesheet';
        faLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
        document.head.appendChild(faLink);
    }
});
