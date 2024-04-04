function toggleMenu() {
    var menuNavbar = document.querySelector('.menu--items');
    menuNavbar.classList.toggle('active');
}
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
