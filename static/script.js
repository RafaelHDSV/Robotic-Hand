let preloader = document.querySelector('.preloader')
let hamburguer = document.getElementById('hamburguer')
let loginContainer = document.querySelector('.login')
let user = document.getElementById('user')
let password = document.getElementById('password')
let modal = document.getElementById("modal_steps");
let imageCard = document.querySelectorAll('.img_card')
let imageModal = document.getElementById('img_modal')
let close = document.querySelector('.close')
let logo = document.querySelector('.logo')
let qrCode = document.querySelector('.qr_code')
let closeQrCode = document.querySelector('.close_qr_code')
let contactsCounter = document.querySelector('.contacts_counter')

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

hamburguer.addEventListener('mouseenter', () => {
    hamburguer.style.filter =
        'invert(20%) sepia(12%) saturate(16%) hue-rotate(334deg) brightness(37%) contrast(94%)'
})

hamburguer.addEventListener('mouseout', () => {
    hamburguer.style.filter = 'none'
})

hamburguer.addEventListener('click', () => {
    if (loginContainer.style.display == 'flex') {
        loginContainer.style.display = 'none'
        loginContainer.style.opacity = '0'

        // CORRIGIR
        if (hamburguer.style.filter ==
            'invert(20%) sepia(12%) saturate(16%) hue-rotate(334deg) brightness(37%) contrast(94%)') {
            if (window.location.pathname == ('/contacts')) {
                window.location.href = '/'
            } else {
                window.location.href = '/contacts'
            }
        }
    } else {
        loginContainer.style.display = 'flex'
        loginContainer.style.opacity = '1'
    }
})

function setRoute() {
    if ((user.value == 'admin' || user.value == 'ADMIN' || user.value == 'Admin') && (password.value ==
            'admin' || password.value == 'ADMIN' || password.value == 'Admin')) {
        window.location.href = '/contacts'
        contactsCounter.innerHTML = '1'
    } else if ((user.value == 'user' || user.value == 'USER' || user.value == 'User') && (password.value ==
            'user' || password.value == 'USER' || password.value == 'User')) {
        window.location.href = '/'
    } else if ((user.value == 'website' || user.value == 'WEBSITE' || user.value == 'Website') && (password.value ==
            'website' || password.value == 'WEBSITE' || password.value == 'Website')) {
        window.location.href = '/website'
    } else {
        user.setAttribute('placeholder', 'Digite um login válido!')
        password.setAttribute('placeholder', 'Digite um login válido!')
    }
}

for (let i = 0; i < imageCard.length; i++) {
    imageCard[i].addEventListener('click', () => {
        modal.style.display = 'flex'
        imageModal.setAttribute('src', imageCard[i].src)
    })
}

close.addEventListener('click', () => {
    modal.style.display = 'none'
})

logo.addEventListener('click', () => {
    if (qrCode.style.display = 'none') {
        qrCode.style.display = 'flex'
    }
})

closeQrCode.addEventListener('click', () => {
    qrCode.style.display = 'none'
})