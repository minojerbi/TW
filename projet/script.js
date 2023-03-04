// JavaScript source code

// Valider le formulaire de commande
var commandeForm = document.querySelector('form[action="commander.php"]');
if (commandeForm) {
  commandeForm.addEventListener('submit', function(e) {
    var nom = document.querySelector('#nom');
    var email = document.querySelector('#email');
    var adresse = document.querySelector('#adresse');

    if (!nom.value || !email.value || !adresse.value) {
      e.preventDefault();
      alert('Veuillez remplir tous les champs.');
    }
  });
}

// Valider le formulaire de contact
var contactForm = document.querySelector('form[action="envoyer.php"]');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    var nom = document.querySelector('#nom');
    var email = document.querySelector('#email');
    var message = document.querySelector('#message');

    if (!nom.value || !email.value || !message.value) {
      e.preventDefault();
      alert('Veuillez remplir tous les champs.');
    }
  });
}
