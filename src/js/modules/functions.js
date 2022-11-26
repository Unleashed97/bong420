'use strict'

export const handleToTop = () => {
    const btn = document.querySelector('.footer__to-top')

    btn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    })
}

export const handleDropdownsOpen = () => {
    const btnList = document.querySelectorAll('.dropdown__btn')
    const btnClose = document.querySelectorAll('.dropdown__close')

    btnList.forEach((btn) =>
        btn.addEventListener('click', () => {
            const dropdown = btn.closest('.dropdown')
            dropdown.classList.toggle('active')

            btn.classList.toggle('active')
        }),
    )

    btnClose.forEach((btn) =>
        btn.addEventListener('click', () => {
            const dropdown = btn.closest('.dropdown')
            dropdown.classList.remove('active')
        }),
    )
}

export const handleBurgerClick = () => {
    const burgerBtn = document.querySelector('.burger--mobile')
    const menuMobile = document.querySelector('.menu')

    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('active')
        menuMobile.classList.toggle('active')
    })
}

export const handleQuantityBtnsClick = () => {
    const btnList = document.querySelectorAll('.quantity__btn')
    const quntityValue = document.querySelector('.quantity__value')

    if (btnList && quntityValue) {
        btnList.forEach((btn) =>
            btn.addEventListener('click', () => {
                if (btn.classList.contains('quantity-remove')) {
                    if (Number(quntityValue.innerText) > 1) {
                        quntityValue.innerText = quntityValue.innerText - 1
                    }
                }
                if (btn.classList.contains('quantity-add')) {
                    quntityValue.innerText = Number(quntityValue.innerText) + 1
                }
            }),
        )
    }
}

export const handleTabs = () => {
    const tabsBtnList = document.querySelectorAll('.tabs__btn')

    if (tabsBtnList) {
        tabsBtnList.forEach((btn) =>
            btn.addEventListener('click', () => {
                tabsBtnList.forEach((btn) => {
                    const target = btn.getAttribute('data-target')

                    const contentBlock = document.getElementById(target)

                    btn.classList.remove('active')
                    contentBlock.classList.remove('active')
                })

                const target = btn.getAttribute('data-target')

                const contentBlock = document.getElementById(target)

                btn.classList.add('active')
                contentBlock.classList.add('active')
            }),
        )
    }
}

export const handleFilters = () => {
    const filtersOpenBtn = document.querySelector('.btn--filters-open')
    const filtersCloseBtn = document.querySelector('.sidebar-filters-close')
    const sidebar = document.querySelector('.sidebar')

    if (filtersOpenBtn && filtersCloseBtn && sidebar) {
        filtersOpenBtn.addEventListener('click', () => {
            sidebar.classList.add('active')
        })

        filtersCloseBtn.addEventListener('click', () => {
            sidebar.classList.remove('active')
        })
    }
}

// // range slider
// export const handleRangeSlider = () => {
//     const rangeSliders = document.querySelectorAll('.range-slider')

//     const rangeTrackList = document.querySelectorAll('.range-slider__track')

//     if (rangeSliders) {
//         rangeSliders.forEach((range, indexRange) => {
//             const rangeCaptionList = range.querySelectorAll(
//                 '.range-slider__header-caption',
//             )

//             const rangeInputList = range.querySelectorAll(
//                 '.range-slider__input',
//             )

//             function fillSliderTrack(track) {
//                 let percent1 =
//                     (rangeInputList[0].value / rangeInputList[1].max) * 100
//                 let percent2 =
//                     (rangeInputList[1].value / rangeInputList[1].max) * 100

//                 track.style.background = `linear-gradient(to right, #CEDFE2 ${percent1}%, #FF4207 ${percent1}%, #FF4207 ${percent2}%, #CEDFE2 ${percent2}%)`

//                 // console.log(`${track}: ${track.style.background}`)
//             }

//             rangeInputList.forEach((input, indexInput) => {
//                 input.addEventListener('input', () => {
//                     if (indexRange === 0) {
//                         rangeCaptionList[
//                             indexInput
//                         ].innerText = `${input.value} ₽`

//                         if (
//                             parseInt(rangeInputList[1].value) -
//                                 parseInt(rangeInputList[0].value) <=
//                             1000
//                         ) {
//                             rangeInputList[0].value =
//                                 rangeInputList[1].value - 1000
//                             rangeCaptionList[0].innerText = `${rangeInputList[0].value} ₽`
//                         }
//                         fillSliderTrack(rangeTrackList[0])
//                         // console.log(parseInt(rangeInputList[1].value))
//                     } else {
//                         rangeCaptionList[
//                             indexInput
//                         ].innerText = `${input.value} см`

//                         console.log(rangeInputList[1].value)

//                         if (
//                             parseInt(rangeInputList[1].value) -
//                                 parseInt(rangeInputList[0].value) <=
//                             5
//                         ) {
//                             console.log(rangeInputList[0].value)

//                             rangeInputList[1].value =
//                                 rangeInputList[0].value + 5
//                             rangeCaptionList[1].innerText = `${rangeInputList[1].value} см`
//                         }
//                         fillSliderTrack(rangeTrackList[1])
//                     }
//                 })
//             })
//         })
//     }
// }

// range slider 1
export const handleRangeSlider1 = () => {
    const rangeSlider1 = document.querySelector('.range-slider1')
    if (rangeSlider1) {
        const rangeTrack = rangeSlider1.querySelector('.range-slider__track')

        const rangeCaptionList = rangeSlider1.querySelectorAll(
            '.range-slider__header-caption',
        )
        const rangeInputList = rangeSlider1.querySelectorAll(
            '.range-slider__input',
        )

        function fillSliderTrack() {
            let percent1 =
                (rangeInputList[0].value / rangeInputList[1].max) * 100
            let percent2 =
                (rangeInputList[1].value / rangeInputList[1].max) * 100

            rangeTrack.style.background = `linear-gradient(to right, #CEDFE2 ${percent1}%, #FF4207 ${percent1}%, #FF4207 ${percent2}%, #CEDFE2 ${percent2}%)`
        }

        fillSliderTrack()

        rangeInputList.forEach((input, indexInput) => {
            rangeCaptionList[indexInput].innerText = `${input.value} ₽`
            input.addEventListener('input', () => {
                rangeCaptionList[indexInput].innerText = `${input.value} ₽`

                if (
                    parseInt(rangeInputList[1].value) -
                        parseInt(rangeInputList[0].value) <=
                    1000
                ) {
                    rangeInputList[0].value = rangeInputList[1].value - 1000
                    rangeCaptionList[
                        indexInput
                    ].innerText = `${rangeInputList[0].value} ₽`
                }

                fillSliderTrack()
            })
        })
    }
}

// range slider 2
export const handleRangeSlider2 = () => {
    const rangeSlider2 = document.querySelector('.range-slider2')

    if (rangeSlider2) {
        const rangeTrack = rangeSlider2.querySelector('.range-slider__track')

        const rangeCaptionList = rangeSlider2.querySelectorAll(
            '.range-slider__header-caption',
        )
        const rangeInputList = rangeSlider2.querySelectorAll(
            '.range-slider__input',
        )

        function fillSliderTrack() {
            let percent1 =
                (rangeInputList[0].value / rangeInputList[1].max) * 100
            let percent2 =
                (rangeInputList[1].value / rangeInputList[1].max) * 100

            rangeTrack.style.background = `linear-gradient(to right, #CEDFE2 ${percent1}%, #FF4207 ${percent1}%, #FF4207 ${percent2}%, #CEDFE2 ${percent2}%)`
        }

        fillSliderTrack()

        rangeInputList.forEach((input, indexInput) => {
            rangeCaptionList[indexInput].innerText = `${input.value} см`
            input.addEventListener('input', () => {
                rangeCaptionList[indexInput].innerText = `${input.value} см`

                if (
                    parseInt(rangeInputList[1].value) -
                        parseInt(rangeInputList[0].value) <=
                    5
                ) {
                    rangeInputList[0].value = rangeInputList[1].value - 5
                    rangeCaptionList[
                        indexInput
                    ].innerText = `${rangeInputList[0].value} см`
                }

                fillSliderTrack()
            })
        })
    }
}
