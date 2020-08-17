backDrop = document.querySelector('.backdrop');
modal = document.querySelector('.modal');
modalButton = document.querySelector('.modal__action--negative')
buttons = document.querySelectorAll('.button');

const choosePlan = (evt) => {
  modal.classList.add('open');
  backDrop.classList.add('open');
  console.dir(modal);
}
modalButton.addEventListener('click', () => {
  backDrop.classList.remove('open');
  modal.classList.remove('open');
})

for (const button of buttons) {
  button.addEventListener('click', choosePlan)
}
