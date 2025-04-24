function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


const roles = ['CSE Graduate', 'Data Analyst', 'Writer', 'Software Engineer'];
let currentIndex = 0;
const roleElement = document.getElementById('role');

function changeRole() {
  roleElement.style.opacity = 0; // Fade out

  setTimeout(() => {
    roleElement.textContent = roles[currentIndex]; // Change text content
    roleElement.style.opacity = 1; // Fade in
    currentIndex = (currentIndex + 1) % roles.length; // Move to the next role
  }, 1000); // 1 second for fading out
}

// Change the role every 3 seconds
setInterval(changeRole, 3000);  