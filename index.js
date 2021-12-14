const formElement = document.querySelector('.editForm');
const  nameInput = document.querySelector('#nameInput');
const  jobInput = document.querySelector('#jobInput');
const  formButton = document.querySelector('.editForm__button');
const  formCloseIcon = document.querySelector('.editForm__close-icon');
const  infoTitle = document.querySelector('.profile-info__title');
const  infoSubtitle = document.querySelector('.profile-info__subtitle');
const  editButton = document.querySelector('.profile-info__edit-button');


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

