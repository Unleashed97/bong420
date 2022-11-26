import * as customFunctions from './modules/functions.js'
customFunctions.handleToTop()
customFunctions.handleDropdownsOpen()
customFunctions.handleBurgerClick()
customFunctions.handleQuantityBtnsClick()
customFunctions.handleTabs()
customFunctions.handleFilters()
customFunctions.handleRangeSlider1()
customFunctions.handleRangeSlider2()
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
        999: {
            slidesPerView: 3,
            spaceBetween: 20,
        },

        767: {
            slidesPerView: 3,
            spaceBetween: 26,
        },

        320: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        0: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next--sale',
        prevEl: '.swiper-button-prev--sale',
    },
})
const swiperRecommendations = new Swiper('.swiper--recommendations', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 5,
    spaceBetween: 48,

    breakpoints: {
        // when window width is >= 320px

        1440: {
            slidesPerView: 5,
            spaceBetween: 48,
        },
        999: {
            slidesPerView: 4,
            spaceBetween: 20,
        },

        767: {
            slidesPerView: 5,
            spaceBetween: 25,
        },
        320: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        0: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next--recommendations',
        prevEl: '.swiper-button-prev--recommendations',
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

        999: {
            slidesPerView: 4,
            spaceBetween: 20,
        },

        767: {
            slidesPerView: 4,
            spaceBetween: 25,
        },
        320: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        0: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next--new',
        prevEl: '.swiper-button-prev--new',
    },
})
const swiperOtherGoods = new Swiper('.swiper--other-goods', {
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

        999: {
            slidesPerView: 4,
            spaceBetween: 20,
        },

        767: {
            slidesPerView: 5,
            spaceBetween: 25,
        },
        320: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        0: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next--other-goods',
        prevEl: '.swiper-button-prev--other-goods',
    },
})
const swiperManufacturerGoods = new Swiper('.swiper--manufacturer-goods', {
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

        999: {
            slidesPerView: 4,
            spaceBetween: 20,
        },

        767: {
            slidesPerView: 5,
            spaceBetween: 25,
        },
        320: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        0: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next--manufacturer-goods',
        prevEl: '.swiper-button-prev--manufacturer-goods',
    },
})
const swiperAdvantages = new Swiper('.swiper--advantages', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1.5,
    spaceBetween: 0,

    initialSlide: 4,

    breakpoints: {
        // when window width is >= 320px

        320: {
            slidesPerView: 2.5,
            centeredSlides: true,
            spaceBetween: 20,
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next--new',
        prevEl: '.swiper-button-prev--new',
    },
})

const swiperProductGallery = new Swiper('.swiper--product-gallery', {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    navigation: {
        nextEl: '.swiper-button-next--product-gallery',
        prevEl: '.swiper-button-prev--product-gallery',
    },
})

const swiperProduct = new Swiper('.swiper--product', {
    thumbs: {
        swiper: swiperProductGallery,
    },
})

const swiperReviews = new Swiper('.swiper--reviews', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 21,
    slidesPerView: 4,

    breakpoints: {
        // when window width is >= 320px
        1440: {
            slidesPerView: 4,
            spaceBetween: 20,
        },

        999: {
            slidesPerView: 4,
            spaceBetween: 20,
        },

        767: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
    },
    pagination: {
        el: '.swiper-pagination--reviews',
        type: 'bullets',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next--reviews',
        prevEl: '.swiper-button-prev--reviews',
    },
})
