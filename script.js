function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
  console.log("Menu toggled:", menu.classList.contains("open"));
}



const roles = ['Assistant Flight Operations Officer', 'Former Analyst', 'CSE Graduate', 'Data Analyst', 'Writer'];
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

const menu = document.getElementById("menu-links");
const icon = document.getElementById("hamburger-icon");

// Toggle menu open/close on hamburger icon click
icon.addEventListener("click", () => {
  menu.classList.toggle("open");
  icon.classList.toggle("open");
});

// Close menu when clicking any menu link
menu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("open");
    icon.classList.remove("open");
  });
});
