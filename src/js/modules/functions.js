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

    // window.addEventListener('click', (e) => {
    //     console.log(e.target.closest('.dropdown__content'))
    //     if (!e.target.closest('.dropdown__content')) {
    //         console.log('here')
    //         document
    //             .querySelectorAll('.dropdown')
    //             .forEach((dropdown) => dropdown.classList.remove('active'))
    //     }
    // })

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

export const handleTabs = () => {
    const tabsBtnList = document.querySelectorAll('.tabs__btn')

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

export const handleFilters = () => {
    const filtersOpenBtn = document.querySelector('.btn--filters-open')
    const filtersCloseBtn = document.querySelector('.sidebar-filters-close')
    const sidebar = document.querySelector('.sidebar')

    filtersOpenBtn.addEventListener('click', () => {
        sidebar.classList.add('active')
    })

    filtersCloseBtn.addEventListener('click', () => {
        sidebar.classList.remove('active')
    })
}
