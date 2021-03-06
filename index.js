const TAGS = {
    INPUTS: 'input',
    SPANS: 'span'
}

const IDS = {
    EDIT_FORM_OVERLAY: 'editFormOverlay',
    ADD_FORM_OVERLAY: 'addFormOverlay',
    IMAGE_POPUP_OVERLAY: 'imagePopupOverlay',
    NAME_INPUT: 'nameInput',
    JOB_INPUT: 'jobInput',
    NAME_PLACE_INPUT: 'namePlaceInput',
    URL_PLACE_INPUT: 'urlPlaceInput',
    NAME_SPAN: 'spanName',
    JOB_SPAN: 'spanJob',
    PLACE_SPAN: 'spanPlace',
    URL_SPAN: 'spanUrl'
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
    MOUSEDOWN: 'mousedown'
};

const inputs = document.querySelectorAll(`${TAGS.INPUTS}`);
const spans = document.querySelectorAll(`${TAGS.SPANS}`);

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

const nameInput = document.querySelector(`#${IDS.NAME_INPUT}`);
const jobInput = document.querySelector(`#${IDS.JOB_INPUT}`);
const namePlaceInput = document.querySelector(`#${IDS.NAME_PLACE_INPUT}`);
const urlPlaceInput = document.querySelector(`#${IDS.URL_PLACE_INPUT}`);
const spanName = editForm.querySelector(`#${IDS.NAME_SPAN}`);
const spanJob = editForm.querySelector(`#${IDS.JOB_SPAN}`);
const spanPlace = addForm.querySelector(`#${IDS.PLACE_SPAN}`);
const spanUrl = addForm.querySelector(`#${IDS.URL_SPAN}`);
const editFormOverlay = document.querySelector(`#${IDS.EDIT_FORM_OVERLAY}`);
const addFormOverlay = document.querySelector(`#${IDS.ADD_FORM_OVERLAY}`);
const imagePopupOverlay = document.querySelector(`#${IDS.IMAGE_POPUP_OVERLAY}`);


const initialCards = [
    {
        name: '??????????',
        url: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: '?????????????????????? ??????????????',
        url: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: '??????????????',
        url: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: '????????????????',
        url: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: '???????????????????????? ??????????',
        url: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: '????????????',
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

    // ?????????? ?????????????? ???????????????? ----------------------------
    let isLikeStatus = false;

    const changeLikeStatus = evt => {
        if (isLikeStatus || evt.target.classList.contains(elementLikeStatus)) {
            elementLikeStatus.src = './images/VectorHeart.svg';
            isLikeStatus = false;
        } else {
            elementLikeStatus.src = './images/Union.svg';
            isLikeStatus = true;
        }
    }

    elementLikeStatus.addEventListener(EVENTS.CLICK, changeLikeStatus);

    // ???????????????? ?????????? ???????????????????? ???????????????? ----------------------------
    const openAddForm = evt => {
        if (addForm) {
            evt.preventDefault();
            namePlaceInput.value = '';
            urlPlaceInput.value = '';
            addFormOverlay.classList.add('formOverlay');
            addForm.classList.add('addForm_opened');
        }
    }

    profileAddButton.addEventListener(EVENTS.CLICK, openAddForm);

    // ???????????????? ?????????? ???????????????????????????? ----------------------------
    const openEditForm = evt => {
        if (editForm) {
            evt.preventDefault();
            nameInput.value = profileInfoTitle.innerHTML;
            jobInput.value = profileInfoSubtitle.innerHTML;
            editFormOverlay.classList.add('formOverlay');
            editForm.classList.add('editForm_opened');
        }
    }

    profileInfoEditButton.addEventListener(EVENTS.CLICK, openEditForm);

    // ???????????????? ???????????????? ----------------------------
    const openCard = evt => {
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

        imagePopupOverlay.classList.add('formOverlay');
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

// ???????????????????? ???????????????? ----------------------------
const addCard = evt => {
    evt.preventDefault();
    renderCard(namePlaceInput.value, urlPlaceInput.value);
    addFormOverlay.classList.remove('formOverlay');
    addForm.classList.remove('addForm_opened');
}

addFormButton.addEventListener(EVENTS.CLICK, addCard);

// ???????????????? ???????????????? ----------------------------
const removeCard = evt => {
    evt.preventDefault();
    const btn = evt.target.closest('.element__trash-button');
    if (!btn) {
        return;
    }
    btn.parentElement.remove()
}

elements.addEventListener(EVENTS.CLICK, removeCard);

// ???????????????????? ?????????????????? ?????????? ???????????????????????????? ----------------------------
const saveChangesEditForm = evt => {
    evt.preventDefault();
    profileInfoTitle.textContent = nameInput.value;
    profileInfoSubtitle.textContent = jobInput.value;
    editFormOverlay.classList.remove('formOverlay');
    editForm.classList.remove('editForm_opened');
}

editFormButton.addEventListener(EVENTS.CLICK, saveChangesEditForm);

// ???????????????????? ???????? ?? submit ?????????? ?????????????? Enter ----------------------------
editForm.addEventListener(EVENTS.KEYUP, evt => {
    if ((editForm || addForm) && evt.key === 'Enter') {
        if (editForm && nameInput.validity.valid && jobInput.validity.valid) {saveChangesEditForm(evt);}
        if (addForm && namePlaceInput.validity.valid && urlPlaceInput.validity.valid) {addCard(evt);}
    }
})

// ?????????????? ???????????????? ----------------------------
const closePopup = evt => {
    evt.preventDefault();
    if (editForm) {
        editFormOverlay.classList.remove('formOverlay');
        editForm.classList.remove('editForm_opened');
    }
    if (addForm) {
        addFormOverlay.classList.remove('formOverlay');
        addForm.classList.remove('addForm_opened');
    }
    if (imagePopup) {
        imagePopupContainer.innerHTML = '';
        imagePopupOverlay.classList.remove('formOverlay');
        imagePopup.classList.remove('image-popup_opened');
    }
}

// ???????????????? ???????????????? ----------------------------
imagePopupCloseIcon.addEventListener(EVENTS.CLICK, closePopup);

// ???????????????? ?????????? ???????????????????????????? ----------------------------
editFormCloseIcon.addEventListener(EVENTS.CLICK, closePopup);

// ???????????????? ?????????? ???????????????????? ???????????????? ----------------------------
addFormCloseIcon.addEventListener(EVENTS.CLICK, closePopup);

// ???????????????? ?????????? ?????? ?????????????? ???? ???????????? ----------------------------
document.body.addEventListener(EVENTS.KEYUP, evt => {
    if (evt.key === 'Escape') {
        closePopup(evt)
    }
})

// ???????????????? ?????????? ?????? ?????????????? ???? ?????????? ?????? ?????????????? ----------------------------
document.body.addEventListener(EVENTS.MOUSEDOWN, evt => {
    const edit = evt.target.closest('.editForm');
    const add = evt.target.closest('.addForm');
    const image = evt.target.closest('.image-popup');

    if (edit || add || image) {
        return;
    }
    closePopup(evt)
})
