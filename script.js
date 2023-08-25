// Get the form element
const contactForm = document.querySelector('form');

// Add event listener to the form submit event
contactForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission
  
  // Get form input values
  const name = contactForm.querySelector('#name').value;
  const email = contactForm.querySelector('#email').value;
  const message = contactForm.querySelector('#message').value;
  
  // You can replace this alert with your own logic, like sending the data to a server
  alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}\n\nForm submission logic can be implemented here.`);
  
  // Clear form fields
  contactForm.reset();
});
