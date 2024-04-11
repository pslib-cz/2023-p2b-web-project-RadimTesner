function toggleMenu() {
    var menuNavbar = document.querySelector('.burger--items');
    menuNavbar.classList.toggle('active');
}
var swiper = new Swiper(".swiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
      900:{
        slidesPerView: 2,
        grid: {
          rows: 2,
        },
      }
    }
});
