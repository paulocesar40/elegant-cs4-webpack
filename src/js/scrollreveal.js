import ScrollReveal from 'scrollreveal';

 window.sr = ScrollReveal();
    sr.reveal('.navbar', {
      duration: 2000,
      origin: 'bottom',
      easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'
    });
    sr.reveal('.main-section', {
      duration: 2000,
      scale: 1.2,
      easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'
    });
    sr.reveal('.card1', {
      reset: false,
      duration: 2000,
      scale: 0.9,
      viewFactor: 0.2,
      easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'
    });
    sr.reveal('.card2', {
      reset: false,
      duration: 2000,
      delay: 500,
      scale: 1.2,
      viewFactor: 0.2,
      easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'
    });
    sr.reveal('.card3', {
      reset: false,
      duration: 2000,
      delay: 500,
      scale: 0.9,
      viewFactor: 0.2,
      easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'
    });
    sr.reveal('.inner-about', {
      reset: false,
      duration: 2000,
      opacity: 0,
      viewFactor: 0.2,
      easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'
    });
    sr.reveal('.cta-overlay', {
      reset: false,
      duration: 2000,
      origin: top,
      viewFactor: 0.2,
      easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'
    });
    /*
    sr.reveal('.features-image', {
      duration: 2000,
      scale: 0.8,
      viewFactor: 0.2,
      easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'
    });
    sr.reveal('.features-text', {
      duration: 2000,
      delay: 1000,
      opacity: 0,
      mobile: false,
      viewFactor: 0.2,
      easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'
    });
    */