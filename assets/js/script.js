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