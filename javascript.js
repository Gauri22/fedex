const openButton = document.getElementById('openButton');
const hiddenSection = document.getElementById('hiddenSection');

openButton.addEventListener('click', function() {
  if (hiddenSection.style.display === 'none') {
    hiddenSection.style.display = 'block'; // Show the section when button is clicked
  } else {
    hiddenSection.style.display = 'none'; // Hide the section if already visible
  }
});