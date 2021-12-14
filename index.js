const IDS = {
    NAME_INPUT: 'nameInput',
    JOB_INPUT: 'jobInput',
    LIKE_STATUS: 'likeStatus',
  };

const CLASSES = {
    EDIT_FORM: 'editForm',
    EDIT_FORM_BUTTON: 'editForm__button',
    EDIT_FORM_CLOSE_ICON: 'editForm__close-icon',
    PROFILE_INFO_TITLE: 'profile-info__title',
    PROFILE_INFO_SUBTITLE: 'profile-info__subtitle',
    PROFILE_INFO_EDIT_BUTTON: 'profile-info__edit-button',
    ELEMENT_LIKE_STATUS: 'element__like-status',
  };

const EVENTS = {
    CLICK: 'click',
    TOGGLE: 'toggle',
};

const nameInput = document.querySelector(`#${IDS.NAME_INPUT}`);
const jobInput = document.querySelector(`#${IDS.JOB_INPUT}`);
const likeStatus = document.querySelector(`#${IDS.LIKE_STATUS}`);

const formElement = document.querySelector(`.${CLASSES.EDIT_FORM}`);
const formButton = document.querySelector(`.${CLASSES.EDIT_FORM_BUTTON}`);
const formCloseIcon = document.querySelector(`.${CLASSES.EDIT_FORM_CLOSE_ICON}`);
const infoTitle = document.querySelector(`.${CLASSES.PROFILE_INFO_TITLE}`);
const infoSubtitle = document.querySelector(`.${CLASSES.PROFILE_INFO_SUBTITLE}`);
const editButton = document.querySelector(`.${CLASSES.PROFILE_INFO_EDIT_BUTTON}`);
const elementLikeStatus = document.querySelector(`${CLASSES.ELEMENT_LIKE_STATUS}`);


editButton.addEventListener(EVENTS.CLICK, (evt) => {
        evt.preventDefault();
        nameInput.value = infoTitle.innerHTML;
        jobInput.value = infoSubtitle.innerHTML;
        formElement.classList.add('editForm_opened');
})


formCloseIcon.addEventListener(EVENTS.CLICK, (evt) => {
    evt.preventDefault();
    formElement.classList.remove('editForm_opened');
});

formButton.addEventListener(EVENTS.CLICK, (evt) => { 
    evt.preventDefault();
    infoTitle.textContent = nameInput.value;
    infoSubtitle.textContent = jobInput.value;
    formElement.classList.remove('editForm_opened');
});

let isLikeStatus = false;

likeStatus.addEventListener(EVENTS.CLICK, (evt) => {
    evt.preventDefault();

    if (isLikeStatus) {
    likeStatus.src='./images/VectorHeart.svg';
    isLikeStatus = false;
}
    else {
    likeStatus.src='./images/Union.svg';
    isLikeStatus = true;
}
});
