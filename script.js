// your code here
const nameInput = document.getElementById('name');
const yearInput = document.getElementById('year');
const urlElement = document.getElementById('url');

const button = document.getElementById('button');
button.addEventListener('click', function(event) {
  event.preventDefault();

  // Get the name and year values from the form.
  const name = nameInput.value;
  const year = yearInput.value;

  // Update the URL with the query string.
  const url = new URL('https://localhost:8080/');
  url.searchParams.set('name', name);
  url.searchParams.set('year', year);

  // Update the URL element with the updated URL.
  urlElement.textContent = url.href;
});
