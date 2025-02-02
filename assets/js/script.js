// Get the button
const returnToTopButton = document.getElementById('return-to-top');

// Show/hide the button on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    returnToTopButton.classList.add('visible');
  } else {
    returnToTopButton.classList.remove('visible');
  }
});

// Scroll smoothly to the top when the button is clicked
returnToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Initialize EmailJS with your public key
emailjs.init("cFQ6to2lv6wfELE_1");

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm("service_2mr4t5j", "template_fijf56a", this)
        .then(() => {
            alert('Message Sent Successfully!');
            console.log('SUCCESS!');
            this.reset(); // Reset the form after submission
        })
        .catch((error) => {
            alert('Failed to send message. Please check your details and try again.');
            console.error('FAILED...', error);
        });
});