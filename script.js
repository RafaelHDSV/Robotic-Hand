let preloader = document.querySelector('.preloader')
let modal = document.getElementById("modal_steps");
let imageCard = document.querySelectorAll('.img_card')
let imageModal = document.getElementById('img_modal')
let close = document.querySelector('.close')
let logo = document.querySelector('.logo')
let nameMain = document.querySelector('.name_main')

window.addEventListener('load', () => {
    preloader.classList.add('hide')
    document.body.style.overflowY = 'visible'
})

window.addEventListener('load', () => {
    new Glider(document.querySelector('.glider'), {
        type: 'slider',
        startAt: 0,
        keyboard: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: '.dots',
        arrows: {
            prev: '.arrow_slide_prev',
            next: '.arrow_slide_next'
        },
        responsive: [{
            breakpoint: 0,
            settings: {
                slidesToShow: 1
            }
        },
        {
            breakpoint: 960,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 1260,
            settings: {
                slidesToShow: 3
            }
        }
        ]
    })
})

nameMain.addEventListener('mouseenter', () => {
    nameMain.innerHTML = 'Muscle Atrophy Robotic Glove'
})

nameMain.addEventListener('mouseout', () => {
    nameMain.innerHTML = 'M. a. r. g.'
})

for (let i = 0; i < imageCard.length; i++) {
    imageCard[i].addEventListener('click', () => {
        modal.style.display = 'flex'
        imageModal.setAttribute('src', imageCard[i].src)
    })
}

close.addEventListener('click', () => {
    modal.style.display = 'none'
})