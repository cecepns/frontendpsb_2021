import Swiper from 'swiper/bundle';
const swiperExcellence = new Swiper('.swiper-container', {

    spaceBetween: 8,
    breakpoints: {
        992: {
            spaceBetween: 20,
            slidesPerView: '3'
        }
    },

    pagination: {
        el: '.swiper-pagination-exellence'
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next-exellence',
        prevEl: '.swiper-button-prev-exellence'
    },

    // And if we need scrollbar

});

const swiperPartner = new Swiper('.swiper-container-partner', {

    spaceBetween: 8,
    // autoplay:true,
    breakpoints: {
        992: {
            spaceBetween: 20,
            slidesPerView: '4'
        }
    },

    // pagination: {   el: '.swiper-pagination', },

});

// const swiperAboutme = new Swiper('.swiper-container-aboutme', {
// spaceBetween: 80,     autoplay:true,     speed: 2000,     autoplay: {
// delay: 15000,       disableOnInteraction: false,     },     // pagination: {
//    //   el: '.swiper-pagination',     // },   });

const swiperPrice = new Swiper('.swiper-container-price', {

    spaceBetween: 20,
    // autoplay:true, speed: 2000,
    autoplay: {
        delay: 10000,
        disableOnInteraction: false
    },

    breakpoints: {
        992: {
            spaceBetween: 20,
            slidesPerView: '3'
        }
    },

    pagination: {
        el: '.swiper-pagination-price'
    },
  
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next-price',
        prevEl: '.swiper-button-prev-price'
    },

    // pagination: {   el: '.swiper-pagination', },

});

const swiperTestimoni = new Swiper('.swiper-container-testimoni', {

    spaceBetween: 20,
    // autoplay:true, speed: 2000,
    autoplay: {
        delay: 10000,
        disableOnInteraction: false
    },

    breakpoints: {
        992: {
            spaceBetween: 20,
            slidesPerView: '3'
        }
    },

   

    // pagination: {   el: '.swiper-pagination', },

});

const swiperALurPendaftaran = new Swiper('.swiper-container-alur-pendaftaran', {

    spaceBetween: 20,
    // autoplay:true, speed: 2000,
    autoplay: {
        delay: 10000,
        disableOnInteraction: false
    },

    breakpoints: {
        992: {
            spaceBetween: 20,
            slidesPerView: '3'
        }
    },

    pagination: {
      el: '.swiper-pagination-alur'
  },

  // Navigation arrows
  navigation: {
      nextEl: '.swiper-button-next-alur',
      prevEl: '.swiper-button-prev-alur'
  },

    // pagination: {   el: '.swiper-pagination', },

});
