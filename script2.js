// Get the "Buy Now" buttons
const buyButtons = document.querySelectorAll('.product .btn');

// Add click event listeners to the "Buy Now" buttons
buyButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Thank you for your purchase!');
  });
});
