var swiper = new Swiper(".review-slider", {
    slidesPerView: "auto",
    spaceBetween: 30,

    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
   
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },


});

var swiper = new Swiper(".brand-slider", {
    slidesPerView: 3,
    spaceBetween: 10,

    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
   
    breakpoints: {
        640: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 6,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 8,
            spaceBetween: 30,
        },
    },


});