AOS.init({
    once: true,
    duration: 1200
});

function handleScroll() {
    var masthead = document.getElementById('masthead');
    var page = document.getElementById('page');

    if (masthead && page) {
        var mastheadHeight = masthead.clientHeight;
        page.style.paddingTop = mastheadHeight + 'px';

        if (window.scrollY > 350) {
            masthead.classList.add('header-fixed');
        } else {
            masthead.classList.remove('header-fixed');
        }
    }
}
handleScroll();
window.addEventListener('scroll', handleScroll);



/*--------------------------------mobile-menu---------------------------------*/
if (window.innerWidth < 1200) {
    const burgerMenu = document.querySelector('.burger-menu');
    const mobileMenu = document.querySelector('.main-menu');
    const mobileMenuItems = document.querySelectorAll('.main-menu a');

    if (burgerMenu && mobileMenu && mobileMenuItems.length > 0) {
        burgerMenu.addEventListener('click', () => {
            burgerMenu.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.classList.toggle('_lock');
        });

        mobileMenuItems.forEach((menuItem) => {
            menuItem.addEventListener('click', () => {
                burgerMenu.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.classList.remove('_lock');
            });
        });
    }
}

document.querySelectorAll('a.js-link-anchor[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        var target = document.querySelector(this.hash);
        if (target) {
            var headerHeight = document.querySelector('header').offsetHeight;
            var targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

if (document.querySelector('.user-phone')) {
    document.querySelectorAll('.user-phone').forEach(phone => {
        Inputmask({ "mask": "+7 (999) 999-99-99" }).mask(phone);
    });
}

const footer = document.querySelector('.footer');
const buttonUp = document.querySelector('.button-up');
const upHeader = document.querySelector('.header');
const page = document.querySelector('.page');

if (footer && buttonUp && upHeader) {
    const observerFooter = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                buttonUp.classList.add('active');
            } else {
                buttonUp.classList.remove('active');
            }
        });
    }, { threshold: 0.2 });
    observerFooter.observe(footer);
}

if (buttonUp && page) {
    buttonUp.addEventListener('click', () => {
        const headerHeight = upHeader.offsetHeight;
        window.scrollTo({
            top: page.offsetTop - headerHeight,
            behavior: "smooth"
        });
    });
}
const buttonModalOpen = document.querySelectorAll('.modal-open--js');
const buttonModalClose = document.querySelectorAll('.close-modal--js');
const buttonSubModalOpen = document.querySelectorAll('.sub-modal-open--js');
const modalOverlays = document.querySelectorAll('.modal-overlay');

buttonModalOpen.forEach(modal => {
    modal.addEventListener('click', (event) => {
        const modalId = event.currentTarget.dataset.modal;
        showModal(modalId);
        document.body.classList.add('_lock');
    });
});

buttonSubModalOpen.forEach(subModal => {
    subModal.addEventListener('click', (event) => {
        const modalId = event.currentTarget.dataset.modal;
        hideModal();
        showModal(modalId);
    });
});

buttonModalClose.forEach(buttonClose => {
    buttonClose.addEventListener('click', () => {
        hideModal();
    });
});

function showModal(modalId) {
    const modalOverlay = document.querySelector(`.modal-overlay[id="${modalId}"]`);
    if (modalOverlay) {
        modalOverlay.classList.add('active');
        document.body.classList.add('_lock');
    }
}

function hideModal() {
    const activeModal = document.querySelector('.modal-overlay.active');
    if (activeModal) {
        activeModal.classList.remove('active');
        document.body.classList.remove('_lock');
    }
}


const currentYear = document.querySelector('#current-year');

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


