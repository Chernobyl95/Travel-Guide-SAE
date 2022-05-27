const menuButton = document.querySelector('#menu-btn');
menuButton.addEventListener('click', () => {
  document.querySelector('#navbar ul').classList.toggle('enabled');
});
