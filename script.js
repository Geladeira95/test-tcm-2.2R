function toggleSidebar() {
    var sidebar = document.getElementById("div_menu");
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "250px";
    }
}



function toggleLightDarkMode() {
    document.body.classList.toggle("light-mode");
}

const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.card');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let index = 0;

function updateCarousel() {
  carousel.style.transform = `translateX(${-index * 260}px)`;
}

nextBtn.addEventListener('click', () => {
  index = (index + 1) % cards.length;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + cards.length) % cards.length;
  updateCarousel();
});
function toggleLightDarkMode() {
document.body.classList.toggle("light-mode");

}