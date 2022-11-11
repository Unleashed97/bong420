import * as customFunctions from './modules/functions.js'

// vendors

// swiper
const swiperSale = new Swiper('.swiper--sale', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 50,

    breakpoints: {
        // when window width is >= 320px
        1440: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next--sale',
        prevEl: '.swiper-button-prev--sale',
    },
})

const swiperNew = new Swiper('.swiper--new', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,

    breakpoints: {
        // when window width is >= 320px
        1440: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next--new',
        prevEl: '.swiper-button-prev--new',
    },
})
