const modalContainer = document.querySelector('.modal_container');
const openButton = document.querySelector('.open');
const closeButton = document.querySelector('.close');

openButton.addEventListener('click', () => {
  modalContainer.classList.add('show');
});

closeButton.addEventListener('click', () => {
  modalContainer.classList.remove('show');
})