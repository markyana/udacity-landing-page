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
    menu.innerHTML += '<li class="navbar-menu-item"><a class="navbar-menu-link" id="' + sectionName + '-in-menu" href="#' + sectionName + '">' + capitalSectionName + '</a></li>';
};

function checkIfSectionInView() {
    let isInViewport = function(elem) {
      let bounding = elem.getBoundingClientRect();
      return (
        bounding.top <= 50 &&
        bounding.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    };
  
    for (x = 0; x < sections.length; x++) {
      let sectionInFullView = document.getElementById(sections[x].id);
      let activeMenu = document.getElementById(sectionInFullView + "-in-menu");
  
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
};