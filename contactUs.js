const form = document.getElementById('contact-form');
const responseMessage = document.getElementById('response-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  fetch('submit-form.php', {
    method: 'POST',
    body: formData
  })
  .then(response => response.text())
  .then(message => {
    responseMessage.textContent = message;
    responseMessage.classList.remove('hidden');
    form.reset();
  })
  .catch(error => {
    responseMessage.textContent = 'An error occurred. Please try again later.';
    responseMessage.classList.remove('hidden');
  });
});