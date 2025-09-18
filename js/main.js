// Script pour la navigation active
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Animation au défilement
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
    }, observerOptions);
            
    document.querySelectorAll('.feature-card, .category-card, .vegetable-card').forEach(card => {
        observer.observe(card);
    });
});


// Charger le header
fetch("header.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;

    // Maintenant que le header est injecté, on peut ajouter l'active
    const currentPage = window.location.pathname.split("/").pop();
    const menuLinks = document.querySelectorAll("nav ul li a");

    menuLinks.forEach(link => {
      if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
      }
    });
  });
