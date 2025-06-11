document.addEventListener("DOMContentLoaded", function() {
    let links = document.querySelectorAll(".menu a");
    let currentPage = window.location.pathname.split("/").pop(); // Récupère le nom du fichier

    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});




document.addEventListener("DOMContentLoaded", function() {
    let mainContent = document.querySelector(".main-content");
    mainContent.style.opacity = "0";
    mainContent.style.transition = "opacity 1.5s";

    setTimeout(() => {
        mainContent.style.opacity = "1";
    }, 1000);
});






document.addEventListener("DOMContentLoaded", function() {
    let skills = document.querySelectorAll(".skill");
    
    skills.forEach(skill => {
        skill.addEventListener("mouseover", () => {
            skill.style.boxShadow = "0px 4px 15px rgba(0, 0, 0, 0.2)";
        });
        skill.addEventListener("mouseout", () => {
            skill.style.boxShadow = "none";
        });
    });
});



