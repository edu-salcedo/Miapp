
const swiper = new Swiper('.swiper', {


    // effect: "fade",
    // autoplay: {
    //     delay: 2000,
    //     pauseOnMouseEnter: true,
    //     disableOnInteraction: false,
    // },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,

    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
});