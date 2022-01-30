const IDS = {
    NAME_INPUT: 'nameInput',
    JOB_INPUT: 'jobInput',
    NAME_PLACE_INPUT: 'namePlaceInput',
    LINK_PLACE_INPUT: 'linkPlaceInput'
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
    SUBMIT: 'submit'
};

const nameInput = document.querySelector(`#${IDS.NAME_INPUT}`);
const jobInput = document.querySelector(`#${IDS.JOB_INPUT}`);
const namePlaceInput = document.querySelector(`#${IDS.NAME_PLACE_INPUT}`);
const linkPlaceInput = document.querySelector(`#${IDS.LINK_PLACE_INPUT}`);

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
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const renderCard = (title, link) => {
    let elements = document.querySelector('.elements');

    let elementContainer = document.createElement('div');
    elementContainer.className = 'element';

    let elementImage = document.createElement('img');
    elementImage.className = 'element__image';
    elementImage.src = link;

    let elementTrashButton = document.createElement('img');
    elementTrashButton.className = 'element__trash-button';
    elementTrashButton.src = './images/Trash.svg';

    let elementSignature = document.createElement('div');
    elementSignature.className = 'element__signature';

    let elementText = document.createElement('p');
    elementText.className = 'element__text';
    elementText.innerHTML = title;

    let elementLikeStatus = document.createElement('img');
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

    elementLikeStatus.addEventListener(EVENTS.CLICK, evt => {
        evt.preventDefault();

        if (isLikeStatus || evt.target.classList.contains(elementLikeStatus)) {
            elementLikeStatus.src = './images/VectorHeart.svg';
            isLikeStatus = false;
        } else {
            elementLikeStatus.src = './images/Union.svg';
            isLikeStatus = true;
        }
    });

    // открытие карточки ----------------------------
    elementImage.addEventListener(EVENTS.CLICK, evt => {
        evt.preventDefault();
        let imagePopup = document.querySelector('.image-popup');

        let imagePopupImage = document.createElement('img');
        imagePopupImage.className = 'image-popup__image';
        imagePopupImage.src = elementImage.src;
        let imagePopupTitle = document.createElement('p');
        imagePopupTitle.className = 'image-popup__title';
        imagePopupTitle.innerHTML = elementText.textContent;

        imagePopup.append(imagePopupContainer);
        imagePopupContainer.append(imagePopupImage);
        imagePopupContainer.append(imagePopupTitle);

        imagePopup.classList.add('image-popup_opened');
    });
};

const initCards = cards => {
    elements.innerHTML = '';
    for (const card of cards) {
        renderCard(card.name, card.link);
    }
};
initCards(initialCards);

// закрытие карточки ----------------------------
imagePopupCloseIcon.addEventListener(EVENTS.CLICK, evt => {
    evt.preventDefault();
    imagePopupContainer.innerHTML = '';
    imagePopup.classList.remove('image-popup_opened');
});

// добавление карточки ----------------------------
addFormButton.addEventListener(EVENTS.CLICK, evt => {
    evt.preventDefault();
    renderCard(namePlaceInput.value, linkPlaceInput.value);
    addForm.classList.remove('addForm_opened');
});

// удаление карточки ----------------------------
elements.addEventListener(EVENTS.CLICK, evt => {
    evt.preventDefault();
    const btn = evt.target.closest('.element__trash-button');
    if (!btn) {
        return;
    }
    btn.parentElement.remove();
});

// открытие формы редактирования ----------------------------
profileInfoEditButton.addEventListener(EVENTS.CLICK, evt => {
    evt.preventDefault();
    nameInput.value = profileInfoTitle.innerHTML;
    jobInput.value = profileInfoSubtitle.innerHTML;
    editForm.classList.add('editForm_opened');
});

// сохранение изменений формы редактирования ----------------------------
editFormButton.addEventListener(EVENTS.CLICK, evt => {
    evt.preventDefault();
    profileInfoTitle.textContent = nameInput.value;
    profileInfoSubtitle.textContent = jobInput.value;
    editForm.classList.remove('editForm_opened');
});

// закрытие формы редактирования ----------------------------
editFormCloseIcon.addEventListener(EVENTS.CLICK, evt => {
    evt.preventDefault();
    editForm.classList.remove('editForm_opened');
});

// открытие формы добавления карточки ----------------------------
profileAddButton.addEventListener(EVENTS.CLICK, evt => {
    evt.preventDefault();
    namePlaceInput.value = '';
    linkPlaceInput.value = '';
    addForm.classList.add('addForm_opened');
});

// закрытие формы добавления карточки ----------------------------
addFormCloseIcon.addEventListener(EVENTS.CLICK, evt => {
    evt.preventDefault();
    addForm.classList.remove('addForm_opened');
});
