const header = document.getElementById('header')
const menu = document.getElementById('nav-menu')

header.addEventListener('click', e => {
  const target = e.target

  if (target.closest('#nav-toggle')) {
    menu.classList.add('show-menu')
  }

  if (target.closest('#nav-close')) {
    menu.classList.remove('show-menu')
  }

  if (target.matches('.nav_link')) {
    menu.classList.remove('show-menu')
  }
})
const sr = ScrollReveal({
  origin: 'bottom',
  distance: '60px',
  duration: 2500
})

sr.reveal('.header', { origin: 'top', distance: '120px', delay: 200 })
sr.reveal('.home_title', { delay: 500 })
sr.reveal('.home_description', { delay: 600 })
sr.reveal('.balloon-lf', { origin: 'top', delay: 700 })
sr.reveal('.balloon-rt', { delay: 700 })
sr.reveal('.home_social', { delay: 700 })
sr.reveal('.home_image-img', { origin: 'right', interval: 100, delay: 1200 })

sr.reveal('.suscribe', { interval: 100, delay: 200 })

sr.reveal('.about_title', { origin: 'top', delay: 200 })
sr.reveal('.about_data', { origin: 'left', interval: 100, delay: 600 })
sr.reveal('.about_button', { delay: 1200 })

sr.reveal('.education_title', { origin: 'top', delay: 200 })
sr.reveal('.education_card', { origin: 'right', interval: 100, delay: 600 })

sr.reveal('.skills_title', { origin: 'top', delay: 200 })
sr.reveal('.skills_item:nth-child(even)', { origin: 'left', interval: 100, delay: 300 })
sr.reveal('.skills_item:nth-child(odd)', { origin: 'right', interval: 100, delay: 300 })

sr.reveal('.experience_title', { origin: 'top', delay: 200 })
sr.reveal('.swiper-button-prev', { origin: 'left', delay: 200 })
sr.reveal('.swiper-button-next', { origin: 'right', delay: 200 })
sr.reveal('.experience_title', { origin: 'top', delay: 200 })
sr.reveal('.experience_container-cards', { delay: 200 })
sr.reveal('.swiper-pagination', { delay: 300 })

sr.reveal('.portfolio_title', { delay: 200 })
sr.reveal('.portfolio_projects', { delay: 300, interval: 100 })

sr.reveal('.contact_title', { origin: 'top', delay: 200 })
sr.reveal('.contact_info', { origin: 'left', delay: 200, interval: 100 })
sr.reveal('.contact_form', { delay: 300, interval: 100 })

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination'
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  breakpoints: {
    576: {
      slidesPerView: 2
    },
    767: {
      slidesPerView: 5,
      navigation: {
        enabled: false
      },
      pagination: false
    }
  }
})

mixitup('.portfolio_projects', {
  selectors: {
    target: '.portfolio_project'
  },
  animation: {
    duration: 200
  }
}).filter('all')