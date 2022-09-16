document.addEventListener('DOMContentLoaded', () => {

    
//     function scrollWin() {  window.scrollTo(0, 0);}

    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // We listen to the resize event
    window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    });


    // jakoś działa ale bez szału
    // window.onresize = function() {
    //     document.body.style.height = window.innerHeight + 'px';
    // }
    // window.onresize(); // called to initially set the height.

    const container = document.querySelector('#container');
    const menuSlides = document.querySelectorAll('.menu-slide');
    const koktajleSlides = document.querySelectorAll('.koktajle-slide');
    const kontaktSlide = document.querySelector('.contact-page');

    const open = document.querySelector('#fala');
    const close = document.querySelector('#close-sign');
    const navigation = document.querySelector('#navigation-menu');
    const navigationElements = document.querySelectorAll('.navigation-element');

    function debounce(func, wait = 15, immediate = true) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    function checklSlide(event) {
        const slideMenu = window.innerHeight*1.5
        menuSlides.forEach(element => {
            if ((container.scrollTop + window.innerHeight)> slideMenu && container.scrollTop < slideMenu) {
                element.classList.add('active');
            } else {
                element.classList.remove('active');
            }
        });
        koktajleSlides.forEach(element => {
            const slideKoktajle = window.innerHeight*2.5
            if ((container.scrollTop + window.innerHeight)> slideKoktajle && container.scrollTop < slideKoktajle) {
                element.classList.add('active');
            } else {
                element.classList.remove('active');
            }
        });
        const slideKontakt = window.innerHeight*3.5
        if ((container.scrollTop + window.innerHeight)> slideKontakt) {
            kontaktSlide.classList.add('contact-page-active');
        } else {
            kontaktSlide.classList.remove('contact-page-active');
        }
    }

    container.addEventListener('scroll', debounce(checklSlide));

    open.addEventListener('click', () => {
        container.style.display = 'none';
        navigation.style.display = 'flex';
    });

    close.addEventListener('click', () => {
        container.style.display = 'inherit';
        navigation.style.display = 'none';
    });

    navigationElements.forEach(element => {
        element.addEventListener('click', () => {
            container.style.display = 'inherit';
            navigation.style.display = 'none';
        })
    })
})
