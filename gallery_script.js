function toggleMenu() {
    var menuNavbar = document.querySelector('.menu--items');
    menuNavbar.classList.toggle('active');
}
var swiper = new Swiper(".swiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    breakpoints: {
      900:{
        slidesPerView: 2,
        grid: {
          rows: 4,
        },
      }
    }
});
