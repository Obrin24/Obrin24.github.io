document.addEventListener('DOMContentLoaded', function() {
  // Fetch the navbar content
  fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
      // Add the navbar content to the element with the class 'navbar-placeholder'
      document.querySelectorAll('.navbar-placeholder').forEach(elem => {
        elem.innerHTML = data;
      });
    })
    .catch(error => {
      console.error('Error fetching navbar:', error);
    });
});
