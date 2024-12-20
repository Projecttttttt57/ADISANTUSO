let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(Links => {
                links.classList.remove('active');
                document.querySelector('header nav a[herf*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};




const typed = new Typed('.multiple-text', {
    strings: ['Pencetakan Benner', 'Cutting Stiker', 'Cetak Stiker', 'Pembuatan Neon Box', 'Variasi Mobil', 'Pembuatan Papan Nama ', 'Dan Ada Banyak Lagi Kamu Bisa Mencarinya Di Bawah Ini'],
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 1000,
    loop: true,
  });



  ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay:200,
   });

   ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
   ScrollReveal().reveal('.home-img, .services-container, .testimonials-item, .portfolio-box, .contact from', {origin: 'bottom'});
   ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
   ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});