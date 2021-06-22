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

menu.addEventListener('click', function() {
    menu.classList.remove('active');
});

// Prints the navigation menu
const sections = document.querySelectorAll('.section');

for (x=0; x<sections.length; x++) {
    sectionName = sections[x].id;
    let capitalSectionName = sectionName.charAt(0).toUpperCase() + sectionName.slice(1);
    menu.innerHTML += '<li class="navbar-menu-item"><a class="navbar-menu-link" id="' + sectionName + '-in-menu" href="#' + sectionName + '">' + capitalSectionName + '</a></li>';
};

// Checks if function is in view and highlights the appropriate navigation bar link
function checkIfSectionInView() {
    let isInViewport = function(elem) {
      let bounding = elem.getBoundingClientRect();
      return (
          bounding.top <= 100 && bounding.bottom >= 50
      );
    };

    for (x = 0; x < sections.length; x++) {
      let sectionInFullView = document.getElementById(sections[x].id);
      let activeMenu = document.getElementById(sections[x].id + "-in-menu");

      window.addEventListener(
        "scroll",
        function(event) {
          if (isInViewport(sectionInFullView)) {
            activeMenu.classList.add("highlight");
          } else {
            activeMenu.classList.remove("highlight");
          }
        },
        false
      );
    };
};

checkIfSectionInView();