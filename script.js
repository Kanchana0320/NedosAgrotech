// Array of pages to cycle through
const pages = ["index.html", "about.html", "services.html", "team.html", "contact.html"];
const contactPageIndex = pages.indexOf("contact.html");
let currentIndex = contactPageIndex !== -1 ? contactPageIndex : 0;

// Function to switch to the next page
const switchPage = () => {
    currentIndex = (currentIndex + 1) % pages.length;
    const nextPage = pages[currentIndex];
    window.location.href = nextPage;
};

document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute("href"));
            target.scrollIntoView({ behavior: "smooth" });
        });
    });

    // JavaScript for dynamic animation on image hover
    const companyLogo = document.querySelector(".company-logo");

    companyLogo.addEventListener("mouseover", () => {
        companyLogo.style.transform = "rotate(360deg)";
    });

    companyLogo.addEventListener("mouseout", () => {
        companyLogo.style.transform = "rotate(0deg)";
    });

    // JavaScript for scroll fade animations
    const elements = document.querySelectorAll(".scroll-fade");

    const fadeInOut = (element) => {
        const scrollPosition = window.scrollY;
        const elementPosition = element.offsetTop;
        const windowHeight = window.innerHeight;

        if (scrollPosition > elementPosition - windowHeight + 100) {
            element.style.opacity = "1";
        } else {
            element.style.opacity = "0";
        }
    };

    window.addEventListener("scroll", () => {
        elements.forEach((el) => {
            fadeInOut(el);
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
    const navLinks = document.querySelector(".nav-links");

    mobileMenuIcon.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
});
