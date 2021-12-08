let formElement = document.querySelector('.editForm');
let nameInput = document.querySelector('#nameInput');
let jobInput = document.querySelector('#jobInput');
let formButton = document.querySelector('.editForm__button');
let formCloseIcon = document.querySelector('.editForm__close-icon');
let infoTitle = document.querySelector('.profile-info__title');
let infoSubtitle = document.querySelector('.profile-info__subtitle');
let editButton = document.querySelector('.profile-info__edit-button');


editButton.addEventListener('click', (evt) => {
        evt.preventDefault();
        nameInput.value = infoTitle.innerHTML;
        jobInput.value = infoSubtitle.innerHTML;
        formElement.classList.add('editForm_opened');
})


formCloseIcon.addEventListener('click',(evt) => {
    evt.preventDefault();
    formElement.classList.remove('editForm_opened');
});

formButton.addEventListener('click',(evt) => { 
    evt.preventDefault();
    infoTitle.textContent = nameInput.value;
    infoSubtitle.textContent = jobInput.value;
    formElement.classList.remove('editForm_opened');
});
