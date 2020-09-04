backDrop = document.querySelector('.backdrop');
modal = document.querySelector('.modal');
modalButton = document.querySelector('.modal__action--negative')
buttons = document.querySelectorAll('.button');

const choosePlan = (evt) => {
  modal.classList.add('open');
  backDrop.style["display"] = "block";
  setTimeout(function () {
    backDrop.classList.add('open');
  },10)
  console.dir(modal);
}
modalButton.addEventListener('click', () => {
  backDrop.classList.remove('open');
  setTimeout(function () {
    backDrop.style["display"] = "none";
  },500)
  modal.classList.remove('open');
})

for (const button of buttons) {
  button.addEventListener('click', choosePlan)
}
