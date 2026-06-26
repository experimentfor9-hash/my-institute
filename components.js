// components.js

// 1. Global Header HTML Content
const headerHTML = `
    <img src="Mukesh.jpg" alt="Institute Logo" class="header-logo">
    <h1>Indian Classes Sikar</h1>
    <p>Technical Education</p>
`;

// 2. Global Navigation Menu HTML Content
// components.js में navHTML को अपडेट करें
// components.js में navHTML को इस तरह अपडेट करें:
const navHTML = `
    <div class="hamburger" onclick="toggleMenu()">☰</div>
    <div id="navLinks" style="display: flex; gap: 15px; align-items: center;">
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="courses.html">Courses</a>
        <a href="gallery.html">Gallery</a>
        <a href="cbt-test.html">CBT Test</a>
        <a href="contact.html" class="enquiry-btn">Enquiry</a>
        <button id="darkModeToggle" class="dark-btn">🌙</button>
    </div>
`;

// setupGlobalDarkMode फंक्शन को यह रूप दें:
function setupGlobalDarkMode() {
    const toggleBtn = document.getElementById("darkModeToggle");
    if (!toggleBtn) return; 

    // शुरुआत में थीम सेट करें
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        toggleBtn.innerHTML = "☀️";
    }

    toggleBtn.onclick = function() {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            toggleBtn.innerHTML = "☀️";
        } else {
            localStorage.setItem("theme", "light");
            toggleBtn.innerHTML = "🌙";
        }
    };
}


// नीचे यह नया फंक्शन जोड़ें
function toggleMenu() {
    const links = document.getElementById("navLinks");
    const nav = document.querySelector("nav");
    if (links.style.display === "flex") {
        links.style.display = "none";
        nav.classList.remove("menu-open");
    } else {
        links.style.display = "flex";
        links.style.flexDirection = "column";
        nav.classList.add("menu-open");
    }
}




// 3. Global Footer HTML Content
const footerHTML = `
    <p>&copy; 2026 Indian Classes Sikar. All Rights Reserved.</p>
`;

// Execute when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    
    // Inject Header
    const headerElement = document.querySelector("header");
    if (headerElement) {
        headerElement.innerHTML = headerHTML;
    }

    // Inject Navigation
    const navElement = document.querySelector("nav");
    if (navElement) {
        navElement.innerHTML = navHTML;
    }

    // Inject Footer
    const footerElement = document.querySelector("footer");
    if (footerElement) {
        footerElement.innerHTML = footerHTML;
    }

    // Initialize and Setup Dark Mode Toggle Logic
    setupGlobalDarkMode();
});

// Logic to handle Dark Mode state across all website pages
function setupGlobalDarkMode() {
    const toggleBtn = document.getElementById("darkModeToggle");
    if (!toggleBtn) return; // Prevent errors if button is missing on any page

    // Check localStorage for saved theme preference and apply it
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        toggleBtn.innerHTML = "☀️ Light Mode";
    } else {
        document.body.classList.remove("dark-mode");
        toggleBtn.innerHTML = "🌙 Dark Mode";
    }

    // Click event handler for the toggle button
    toggleBtn.onclick = function() {
        document.body.classList.toggle("dark-mode");
        
        // Save the updated preference to localStorage
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            toggleBtn.innerHTML = "☀️ Light Mode";
        } else {
            localStorage.setItem("theme", "light");
            toggleBtn.innerHTML = "🌙 Dark Mode";
        }
    };
}
