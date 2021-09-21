const closeIcon = document.getElementById('close-iconmsg'),
    floatingButtonMsg = document.getElementById('floating-btncs'),
    btnQuestion = document.getElementById('btn-question'),
    btnQuestionMobile = document.getElementById('btn-mobile-question'),
    hamburgerMobile = document.getElementById('hamburger-mobile'),
    navbarMobile = document.getElementById('menu-mobile'),
    body = document.getElementsByTagName('BODY')[0],
    boxMessage = document.getElementById('box-message-cs'),
    screenWidth = window.screen.width;

if (floatingButtonMsg) {

    floatingButtonMsg.addEventListener('click', () => {
        boxMessage
            .classList
            .add('active')
    })

}

if (closeIcon) {

    closeIcon.addEventListener('click', () => {
        boxMessage
            .classList
            .remove('active')
    })

}

if (btnQuestion) {

    btnQuestion.addEventListener('click', () => {
        if (screenWidth > 768) {
            window.open('https://web.whatsapp.com/send/?phone=6282262220924&text=Assalamualaikum.wr.wb%0A' +
                    '%0AMohon+informasi+terkait+Penerimaan+Santri+Baru+%28PSB%29+Marifatussalaam+Qura' +
                    'nic+Boarding+School+Tahun+Ajaran+2022-2023&app_absent=0')

        } else {
            window.open('https://wa.me/6282262220924?text=Assalamualaikum.wr.wb%0A%0AMohon%20informasi%20terkait%20Penerimaan%20Santri%20Baru%20(PSB)%20Marifatussalaam%20Quranic%20Boarding%20School%20Tahun%20Ajaran%202022-2023')

        }
    })
}

if (btnQuestionMobile) {

    btnQuestionMobile.addEventListener('click', () => {
        if (screenWidth > 768) {
            window.open('https://web.whatsapp.com/send/?phone=6282262220924&text=Assalamualaikum.wr.wb%0A' +
                    '%0AMohon+informasi+terkait+Penerimaan+Santri+Baru+%28PSB%29+Marifatussalaam+Qura' +
                    'nic+Boarding+School+Tahun+Ajaran+2022-2023&app_absent=0')
        } else {
            window.open('https://wa.me/6282262220924?text=Assalamualaikum.wr.wb%0A%0AMohon%20informasi%20' +
                    'terkait%20Penerimaan%20Santri%20Baru%20(PSB)%20Marifatussalaam%20Quranic%20Board' +
                    'ing%20School%20Tahun%20Ajaran%202022-2023')
        }
    })

}

if (hamburgerMobile) {

    hamburgerMobile.addEventListener('click', () => {
        hamburgerMobile
            .classList
            .toggle('is-active')
        navbarMobile
            .classList
            .toggle('open')
        body
            .classList
            .toggle('overflow-hidden')

    })
}