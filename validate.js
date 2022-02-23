// Запись ошибок в переменные
const errorEmptyInput = "Вы пропустили это поле";
const errorLittleValue = "Минимальная длинна для этого поля 2 символа. Длинна текста сейчас 1 символ";
const errorWriteUrl = "Введите адрес сайта";

for (const input of inputs) {
    const isValid = evt => {
        if (!input.validity.valid && editForm) {
            editFormButton.classList.add('editForm__button_status_disabled');
            editFormButton.setAttribute('disabled', true);
            if (evt.target.value === "" && evt.target === nameInput) {
                spanName.textContent = errorEmptyInput;
                spanName.classList.add('invalid');
                nameInput.classList.add('input_error');
            }
            if (evt.target.value === "" && evt.target === jobInput) {
                spanJob.textContent = errorEmptyInput;
                spanJob.classList.add('invalid');
                jobInput.classList.add('input_error');
            }
            if (evt.target.value.length === 1 && evt.target === nameInput) {
                spanName.textContent = errorLittleValue;
                spanName.classList.add('invalid');
                nameInput.classList.add('input_error');
            }
            if (evt.target.value.length === 1 && evt.target === jobInput) {
                spanJob.textContent = errorLittleValue;
                spanJob.classList.add('invalid');
                jobInput.classList.add('input_error');
            }
        }
        if (!input.validity.valid && addForm) {
            addFormButton.classList.add('addForm__button_status_disabled');
            addFormButton.setAttribute('disabled', true);
            if (evt.target.value === "" && evt.target === namePlaceInput) {
                spanPlace.textContent = errorEmptyInput;
                spanPlace.classList.add('invalid');
                namePlaceInput.classList.add('input_error');
            }
            if (evt.target.value.length === 1 && evt.target === namePlaceInput) {
                spanPlace.textContent = errorLittleValue;
                spanPlace.classList.add('invalid');
                namePlaceInput.classList.add('input_error');
            }
            if (evt.target.type !== 'url') {
                spanUrl.textContent = errorWriteUrl;
                spanUrl.classList.add('invalid');
                urlPlaceInput.classList.add('input_error');
            }
        }
        if (evt.target.validity.valid && editForm) {
            editFormButton.classList.remove('editForm__button_status_disabled')
            editFormButton.removeAttribute('disabled');
            input.classList.remove('input_error');
            for (let i = 0; i < spans.length; i += 1) {
                spans[i].textContent = "";
                spans[i].classList.remove('invalid');
            }
        }
        if (evt.target.validity.valid && addForm) {
            addFormButton.classList.remove('addForm__button_status_disabled')
            addFormButton.removeAttribute('disabled');
            input.classList.remove('input_error');
            for (let i = 0; i < spans.length; i += 1) {
                spans[i].textContent = "";
                spans[i].classList.remove('invalid');
            }
        }
    }
    input.addEventListener('input', isValid);
}
