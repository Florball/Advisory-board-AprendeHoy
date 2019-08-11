// Scroll Reveal
// Animación a navbar
window.sr = ScrollReveal();
sr.reveal('.nav', {
  distance: '50px',
  duration: 1000,
  origin: 'top'
});

// Animación al texto central
sr.reveal('.our-advisors', {
  distance: '200px',
  duration: 2000,
  origin: 'top',
});

// Scrolling al navbar
$(window).on('scroll', function() {
  if ($(window).scrollTop()) {
    $('#navbar-scrollspy').addClass('nav_navbar');
  } else {
    $('#navbar-scrollspy').removeClass('nav_navbar');
  }
});

