const navButton = document.querySelector('#ham-btn');
const navBar = document.querySelector('#nav-bar');

navButton.addEventListener('click', () => {
  navButton.classList.toggle('show');
  navBar.classList.toggle('show');
});

const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = today.getFullYear();
document.getElementById("lastModified").textContent = `Last modification: ${document.lastModified}`;

