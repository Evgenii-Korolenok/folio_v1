var swiper = new Swiper(".slide_content", {
    slidesPerView: 1,
    spaceBetween: 75,
    loop: true,
    centerSlide: true,
    fade: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        1300: {
            slidesPerView: 2,
        },
    },
});