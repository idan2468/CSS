backDrop = document.querySelector('.backdrop');
toggleButton = document.querySelector('.toggle-button');
mobileNav = document.querySelector('.mobile-nav');
ctaButton = document.querySelector('.main-nav__cta');
toggleButton.addEventListener('click', () => {
    mobileNav.classList.add('open');
    backDrop.style["display"] = "block";
    setTimeout(function () {
        backDrop.classList.add('open');
    }, 10)
})

backDrop.addEventListener('click', () => {
    if (mobileNav.classList.contains('open')) {
        mobileNav.classList.remove('open');
        backDrop.classList.remove('open');
        setTimeout(function () {
            backDrop.style["display"] = "none";
        }, 500)
    }
})

ctaButton.addEventListener('animationstart', function (event) {
    console.log('Animation started', event);
})
ctaButton.addEventListener('animationend', function (event) {
    document.querySelector('.main-header').style['overflow'] = 'hidden';
    // ctaButton.parentElement.parentElement.style['overflow'] = 'hidden';
    console.log('Animation Ended', event);
})
ctaButton.addEventListener('animationiteration', function (event) {
    console.log('Animation Iteration', event);
})

