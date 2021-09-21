
  function checkLocation () {
    if(window.location.href.indexOf("info_pendaftaran") > -1 ){
      document.getElementById('link-pendaftaran').classList.add('is-active')
      document.getElementById('link-mobile-pendaftaran').classList.add('is-active')
    } else if 
    (window.location.href.indexOf("biaya_pendidikan") > -1 || window.location.href.indexOf("form_biaya") > -1) {
      document.getElementById('link-biayaPendidikan').classList.add('is-active')
      document.getElementById('link-mobile-biayaPendidikan').classList.add('is-active')
    } else if(window.location.href.indexOf("/") > -1 || window.location.href.indexOf("home") > -1) {
      document.getElementById('link-home').classList.add('is-active')
      document.getElementById('link-mobile-home').classList.add('is-active')

    }
  }

  checkLocation();


    let prevScrollpos = window.pageYOffset;
      window.onscroll = ()=> {
      let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
          document.getElementById('navbar').classList.remove('is-scrolled');
        } else {
          window.document.getElementById('navbar').classList.add ('is-scrolled');

        }
        prevScrollpos = currentScrollPos;
      }

  