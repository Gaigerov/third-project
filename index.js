const IDS = {
    NAME_INPUT: 'nameInput',
    JOB_INPUT: 'jobInput',
    NAME_PLACE_INPUT: 'namePlaceInput',
    URL_PLACE_INPUT: 'urlPlaceInput'
};

const CLASSES = {
    PROFILE_INFO_TITLE: 'profile-info__title',
    PROFILE_INFO_SUBTITLE: 'profile-info__subtitle',
    PROFILE_INFO_EDIT_BUTTON: 'profile-info__edit-button',
    PROFILE_ADD_BUTTON: 'profile__add-button',
    EDIT_FORM: 'editForm',
    EDIT_FORM_BUTTON: 'editForm__button',
    EDIT_FORM_CLOSE_ICON: 'editForm__close-icon',
    ADD_FORM: 'addForm',
    ADD_FORM_BUTTON: 'addForm__button',
    ADD_FORM_CLOSE_ICON: 'addForm__close-icon',
    ELEMENTS: 'elements',
    ELEMENT: 'element',
    ELEMENT_IMAGE: 'element__image',
    ELEMENT_TEXT: 'element__text',
    ELEMENT_LIKE_STATUS: 'element__like-status',
    ELEMENT_TRASH_BUTTON: 'element__trash-button',
    IMAGE_POPUP: 'image-popup',
    IMAGE_POPUP_CONTAINER: 'image-popup__container',
    IMAGE_POPUP_IMAGE: 'image-popup__image',
    IMAGE_POPUP_TITLE: 'image-popup__image',
    IMAGE_POPUP_CLOSE_ICON: 'image-popup__close-icon'
};

const EVENTS = {
    CLICK: 'click',
    SUBMIT: 'submit',
    KEYUP: 'keyup',
    MOUSEUP: 'mouseup'
};

const nameInput = document.querySelector(`#${IDS.NAME_INPUT}`);
const jobInput = document.querySelector(`#${IDS.JOB_INPUT}`);
const namePlaceInput = document.querySelector(`#${IDS.NAME_PLACE_INPUT}`);
const urlPlaceInput = document.querySelector(`#${IDS.URL_PLACE_INPUT}`);

const profileInfoTitle = document.querySelector(`.${CLASSES.PROFILE_INFO_TITLE}`);
const profileInfoSubtitle = document.querySelector(`.${CLASSES.PROFILE_INFO_SUBTITLE}`);
const profileInfoEditButton = document.querySelector(`.${CLASSES.PROFILE_INFO_EDIT_BUTTON}`);
const profileAddButton = document.querySelector(`.${CLASSES.PROFILE_ADD_BUTTON}`);

const editForm = document.querySelector(`.${CLASSES.EDIT_FORM}`);
const editFormButton = document.querySelector(`.${CLASSES.EDIT_FORM_BUTTON}`);
const editFormCloseIcon = document.querySelector(`.${CLASSES.EDIT_FORM_CLOSE_ICON}`);

const addForm = document.querySelector(`.${CLASSES.ADD_FORM}`);
const addFormButton = document.querySelector(`.${CLASSES.ADD_FORM_BUTTON}`);
const addFormCloseIcon = document.querySelector(`.${CLASSES.ADD_FORM_CLOSE_ICON}`);

const imagePopup = document.querySelector(`.${CLASSES.IMAGE_POPUP}`);
const imagePopupContainer = document.querySelector(`.${CLASSES.IMAGE_POPUP_CONTAINER}`);
const imagePopupImage = document.querySelector(`.${CLASSES.IMAGE_POPUP_IMAGE}`);
const imagePopupTitle = document.querySelector(`.${CLASSES.IMAGE_POPUP_TITLE}`);
const imagePopupCloseIcon = document.querySelector(`.${CLASSES.IMAGE_POPUP_CLOSE_ICON}`);

const elements = document.querySelector(`.${CLASSES.ELEMENTS}`);
const element = document.querySelector(`.${CLASSES.ELEMENT}`);
const elementImage = document.querySelector(`.${CLASSES.ELEMENT_IMAGE}`);
const elementText = document.querySelector(`.${CLASSES.ELEMENT_TEXT}`);
const elementLikeStatus = document.querySelector(`.${CLASSES.ELEMENT_LIKE_STATUS}`);
const elementTrashButton = document.querySelector(`.${CLASSES.ELEMENT_TRASH_BUTTON}`);

const initialCards = [
    {
        name: 'Архыз',
        url: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        url: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        url: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        url: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        url: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        url: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const renderCard = (title, url) => {
    const elements = document.querySelector('.elements');

    const elementContainer = document.createElement('div');
    elementContainer.className = 'element';

    const elementImage = document.createElement('img');
    elementImage.className = 'element__image';
    elementImage.src = url;

    const elementTrashButton = document.createElement('img');
    elementTrashButton.className = 'element__trash-button';
    elementTrashButton.src = './images/Trash.svg';

    const elementSignature = document.createElement('div');
    elementSignature.className = 'element__signature';

    const elementText = document.createElement('p');
    elementText.className = 'element__text';
    elementText.innerHTML = title;

    const elementLikeStatus = document.createElement('img');
    elementLikeStatus.className = 'element__like-status';
    elementLikeStatus.src = './images/VectorHeart.svg';

    elements.append(elementContainer);
    elementContainer.append(elementImage);
    elementContainer.append(elementTrashButton);
    elementContainer.append(elementSignature);
    elementSignature.append(elementText);
    elementSignature.append(elementLikeStatus);

    // смена статуса карточки ----------------------------
    let isLikeStatus = false;

    const changeLikeStatus = (evt) => {
        if (isLikeStatus || evt.target.classList.contains(elementLikeStatus)) {
            elementLikeStatus.src = './images/VectorHeart.svg';
            isLikeStatus = false;
        } else {
            elementLikeStatus.src = './images/Union.svg';
            isLikeStatus = true;
        }
    }

    elementLikeStatus.addEventListener(EVENTS.CLICK, changeLikeStatus);

    // открытие формы добавления карточки ----------------------------
    const openAddForm = (evt) => {
        if (addForm) {
            evt.preventDefault();
            namePlaceInput.value = '';
            urlPlaceInput.value = '';
            addForm.classList.add('addForm_opened');
        }
    }

    profileAddButton.addEventListener(EVENTS.CLICK, openAddForm);

    // открытие формы редактирования ----------------------------
    const openEditForm = (evt) => {
        if (editForm) {
            evt.preventDefault();
            nameInput.value = profileInfoTitle.innerHTML;
            jobInput.value = profileInfoSubtitle.innerHTML;
            editForm.classList.add('editForm_opened');
        }
    }

    profileInfoEditButton.addEventListener(EVENTS.CLICK, openEditForm);

    // открытие карточки ----------------------------
    const openCard = (evt) => {
        evt.preventDefault();
        const imagePopup = document.querySelector('.image-popup');

        const imagePopupImage = document.createElement('img');
        imagePopupImage.className = 'image-popup__image';
        imagePopupImage.src = elementImage.src;
        const imagePopupTitle = document.createElement('p');
        imagePopupTitle.className = 'image-popup__title';
        imagePopupTitle.innerHTML = elementText.textContent;

        imagePopup.append(imagePopupContainer);
        imagePopupContainer.append(imagePopupImage);
        imagePopupContainer.append(imagePopupTitle);

        imagePopup.classList.add('image-popup_opened');
    }

    elementImage.addEventListener(EVENTS.CLICK, openCard);
};

const initCards = cards => {
    elements.innerHTML = '';
    for (const card of cards) {
        renderCard(card.name, card.url);
    }
};
initCards(initialCards);

// добавление карточки ----------------------------
const addCard = (evt) => {
    evt.preventDefault();
    renderCard(namePlaceInput.value, urlPlaceInput.value);
    addForm.classList.remove('addForm_opened');
}

addFormButton.addEventListener(EVENTS.CLICK, addCard);

// удаление карточки ----------------------------
const removeCard = (evt) => {
    evt.preventDefault();
    const btn = evt.target.closest('.element__trash-button');
    if (!btn) {
        return;
    }
    btn.parentElement.remove()
}

elements.addEventListener(EVENTS.CLICK, removeCard);

// сохранение изменений формы редактирования ----------------------------
const saveChangesEditForm = (evt) => {
    evt.preventDefault();
    profileInfoTitle.textContent = nameInput.value;
    profileInfoSubtitle.textContent = jobInput.value;
    editForm.classList.remove('editForm_opened');
}

editFormButton.addEventListener(EVENTS.CLICK, saveChangesEditForm);

// сохранение форм с submit через нажатие Enter ----------------------------
editForm.addEventListener(EVENTS.KEYUP, function (evt) {
    if ((editForm || addForm) && evt.key === 'Enter') {
        if (editForm) {saveChangesEditForm(evt);}
        if (addForm) {addCard(evt);}
    }
})

// функция закрытия ----------------------------
const closePopup = (evt) => {
    evt.preventDefault();
    if (editForm) {
        editForm.classList.remove('editForm_opened');
    }
    if (addForm) {
        addForm.classList.remove('addForm_opened');
    }
    if (imagePopup) {
        imagePopupContainer.innerHTML = '';
        imagePopup.classList.remove('image-popup_opened');
    }
}

// закрытие карточки ----------------------------
imagePopupCloseIcon.addEventListener(EVENTS.CLICK, closePopup);

// закрытие формы редактирования ----------------------------
editFormCloseIcon.addEventListener(EVENTS.CLICK, closePopup);

// закрытие формы добавления карточки ----------------------------
addFormCloseIcon.addEventListener(EVENTS.CLICK, closePopup);

// закрытие формы при нажатии на эскейп ----------------------------
document.body.addEventListener(EVENTS.KEYUP, function (evt) {
    if (evt.key === 'Escape') {
        closePopup(evt)
    }
})

// закрытие формы при нажатии на клике вне объекта ----------------------------
document.body.addEventListener(EVENTS.MOUSEUP, function (evt) {
    const edit = evt.target.closest('.editForm');
    const add = evt.target.closest('.addForm');
    const image = evt.target.closest('imagePopup');

    if ((edit || add || image) || (!editForm || !addForm)) {
        return;
    }
    closePopup(evt)
})
