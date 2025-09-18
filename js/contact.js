// Validation du formulaire de contact
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Réinitialiser les messages d'erreur
            clearErrorMessages();
            
            // Valider le formulaire
            const isValid = validateForm();
            
            if (isValid) {
                // Simuler l'envoi du formulaire (remplacer par un vrai envoi AJAX)
                simulateFormSubmission();
            }
        });
    }
    
    function validateForm() {
        let isValid = true;
        
        // Validation du nom
        const nameInput = document.getElementById('name');
        const nameError = document.getElementById('nameError');
        if (!nameInput.value.trim()) {
            nameError.textContent = 'Veuillez entrer votre nom';
            isValid = false;
        } else if (nameInput.value.trim().length < 2) {
            nameError.textContent = 'Le nom doit contenir au moins 2 caractères';
            isValid = false;
        }
        
        // Validation de l'email
        const emailInput = document.getElementById('email');
        const emailError = document.getElementById('emailError');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailInput.value.trim()) {
            emailError.textContent = 'Veuillez entrer votre adresse email';
            isValid = false;
        } else if (!emailRegex.test(emailInput.value)) {
            emailError.textContent = 'Veuillez entrer une adresse email valide';
            isValid = false;
        }
        
        // Validation du sujet
        const subjectInput = document.getElementById('subject');
        const subjectError = document.getElementById('subjectError');
        if (!subjectInput.value) {
            subjectError.textContent = 'Veuillez sélectionner un sujet';
            isValid = false;
        }
        
        // Validation du message
        const messageInput = document.getElementById('message');
        const messageError = document.getElementById('messageError');
        if (!messageInput.value.trim()) {
            messageError.textContent = 'Veuillez entrer votre message';
            isValid = false;
        } else if (messageInput.value.trim().length < 10) {
            messageError.textContent = 'Le message doit contenir au moins 10 caractères';
            isValid = false;
        }
        
        return isValid;
    }
    
    function clearErrorMessages() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(error => {
            error.textContent = '';
        });
    }
    
    function simulateFormSubmission() {
        // Afficher l'animation de chargement
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
        submitButton.disabled = true;
        
        // Simuler un délai d'envoi
        setTimeout(() => {
            // Cacher le formulaire et afficher le message de succès
            contactForm.classList.add('hidden');
            formSuccess.classList.remove('hidden');
            
            // Réinitialiser le formulaire
            contactForm.reset();
            
            // Restaurer le bouton
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
            
            // Cacher le message de succès après 5 secondes
            setTimeout(() => {
                formSuccess.classList.add('hidden');
                contactForm.classList.remove('hidden');
            }, 5000);
        }, 2000);
    }
    
    // Animation des éléments au défilement
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
    
    // Observer les éléments à animer
    document.querySelectorAll('.info-item, .faq-item').forEach(item => {
        observer.observe(item);
    });
});