backDrop = document.querySelector('.backdrop');
toggleButton = document.querySelector('.toggle-button')
mobileNav = document.querySelector('.mobile-nav')

toggleButton.addEventListener('click', () => {
  mobileNav.classList.add('open');
  backDrop.classList.add('open');
})

backDrop.addEventListener('click', () => {
  if (mobileNav.classList.contains('open')) {
    mobileNav.classList.remove('open');
    backDrop.classList.remove('open');
  }
})

