const bars = document.querySelector('#navbar-bars');
const menu = document.querySelector ('#navbar-menu');
let sectionName = "";
let sectionNames = [];

// Display Mobile Menu when bars are clicked
const mobileMenu = () => {
    bars.classList.toggle('is-active');
    menu.classList.toggle('active');
};

bars.addEventListener('click', mobileMenu);

const sections = document.querySelectorAll('.section');
console.log(sections);

for (x=0; x<sections.length; x++) {
    sectionName = sections[x].id;
    let capitalSectionName = sectionName.charAt(0).toUpperCase() + sectionName.slice(1);
    menu.innerHTML += '<li class="navbar-menu-item"><a class="navbar-menu-link" href="#home">' + capitalSectionName + '</a></li>';
};