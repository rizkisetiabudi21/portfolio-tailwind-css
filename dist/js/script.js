// navbar fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    }else{
        header.classList.remove('navbar-fixed');
    }
}

// humberger
const humberger = document.querySelector('#humberger');
const navMneu = document.querySelector('#nav-menu');

humberger.addEventListener('click', function (){
    humberger.classList.toggle('humberger-active');
    navMneu.classList.toggle('hidden');
});

// Klik diluar humberger
window.addEventListener('click', function (e) {
    if(e.target != humberger && e.target != navMneu){
        humberger.classList.remove('humberger-active');
        navMneu.classList.add('hidden');
    }
})

// darkmode Toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
    if (darkToggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    }else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});

//pindahkan posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
  } else {
    darkToggle.checked = false;
  }