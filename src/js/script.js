import * as customFunctions from './modules/functions.js'
customFunctions.handleToTop()
customFunctions.handleDropdownsOpen()

// vendors

// swiper
const swiperBanner = new Swiper('.swiper--banner', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,

    breakpoints: {
        1440: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
})

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

        767: {
            slidesPerView: 3,
            spaceBetween: 26,
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

        767: {
            slidesPerView: 4,
            spaceBetween: 25,
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next--new',
        prevEl: '.swiper-button-prev--new',
    },
})
