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
    menu.innerHTML += '<li class="navbar-menu-item"><a class="navbar-menu-link" href="#home">' + sectionName + '</a></li>';
};
console.log(menu);