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
            btnList.forEach((btn) => {
                btn.classList.remove('active')
                const dropdown = btn.closest('.dropdown')
                dropdown.classList.remove('active')
            })

            const dropdown = btn.closest('.dropdown')
            dropdown.classList.toggle('active')

            btn.classList.add('active')
        }),
    )

    btnClose.forEach((btn) =>
        btn.addEventListener('click', () => {
            const dropdown = btn.closest('.dropdown')
            dropdown.classList.remove('active')
        }),
    )
}
