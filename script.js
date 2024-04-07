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
      840:{
        slidesPerView: 4,
        grid: {
          rows: 2,
        },
      }
    }

});
