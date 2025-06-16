
document.addEventListener("DOMContentLoaded", function () {
  let links = document.querySelectorAll(".menu a");
  let currentPage = window.location.pathname.split("/").pop();
  links.forEach(link => {
    if (link.getAttribute("href") === currentPage || link.getAttribute("href") === "#" + currentPage) {
      link.classList.add("active");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", function () {
    this.classList.add("clicked");
    setTimeout(() => this.classList.remove("clicked"), 300);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".bar").forEach(bar => {
    let targetWidth = bar.className.match(/fill-\d+/);
    if (targetWidth) {
      let percent = targetWidth[0].split("-")[1];
      bar.style.width = percent + "%";
    }
  });
});


document.addEventListener("DOMContentLoaded", function() {
    let contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Merci ! Votre message a bien été envoyé.");
            contactForm.reset();
        });
    }
});
