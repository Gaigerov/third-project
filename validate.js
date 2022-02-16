const spanName = document.querySelector('#spanName');
const spanJob = document.querySelector('#spanJob');
const spanPlace = document.querySelector('#spanPlace');
const spanUrl = document.querySelector('#spanUrl');
const inputName = document.querySelector('#nameInput');
const inputJob = document.querySelector('#jobInput');
const inputPlace = document.querySelector('#namePlaceInput');
const inputUrl = document.querySelector('#urlPlaceInput')
const inputs = document.querySelectorAll('input[data-rule]');

for (let input of inputs) {
    input.addEventListener('input', function () {
        const rule = this.dataset.rule;
        const value = this.value;
        let check;


        switch (rule) {
            case 'length':
                let length = value.length;
                let from = +this.dataset.from;
                let to = +this.dataset.to;

                check = length >= from && length <= to;
                if (inputName.value === "") {
                    spanName.textContent = "Вы пропустили это поле";
                    spanName.classList.add('editForm__input_type_error');
                } 
                if (inputJob.value === "") {
                    spanJob.textContent = "Вы пропустили это поле";
                    spanJob.classList.add('editForm__input_type_error');
                } 
                if (inputPlace.value) {
                    spanPlace.textContent = "Вы пропустили это поле";
                    spanPlace.classList.add('addForm__input_type_error');
                } 
                else {
                    spanName.textContent = "Минимальная длинна для этого поля 2 символа. Длинна текста сейчас 1 символ";
                    spanJob.textContent = "Минимальная длинна для этого поля 2 символа. Длинна текста сейчас 1 символ"
                    spanPlace.textContent = "Минимальная длинна для этого поля 2 символа. Длинна текста сейчас 1 символ"
                }
                break;
            case 'domain':
                
                check = /(?:https?|file|ftp):\/\/([^\/\s]+)[^\s]*/ig.test(value);
                if (!check) {
                    spanUrl.textContent = "Введите адрес сайта";
                    spanUrl.classList.add('addForm__input_type_error');
                } 
                if (inputUrl.length < to) {
                    spanUrl.textContent = "Вы пропустили это поле";
                    spanUrl.classList.add('addForm__input_type_error');
                }
                break;
        }
        this.classList.remove('invalid');
        this.classList.remove('valid');
        editFormButton.classList.remove('editForm__button_status_disabled');
        addFormButton.classList.remove('addForm__button_status_disabled');
        if (check) {
            this.classList.add('valid')
            editFormButton.removeAttribute('disabled');
            addFormButton.removeAttribute('disabled');
            editFormButton.classList.add('editForm__button_status_active');
            addFormButton.classList.add('addForm__button_status_active');
            spanName.classList.remove('editForm__input_type_error');
            spanJob.classList.remove('editForm__input_type_error');
            spanPlace.classList.remove('editForm__input_type_error');
            spanUrl.classList.remove('editForm__input_type_error');
        } else {
            this.classList.add('invalid')
            editFormButton.setAttribute('disabled', true);
            addFormButton.setAttribute('disabled', true);
            addFormButton.classList.remove('addForm__button_status_active');
            addFormButton.classList.remove('addForm__button_status_active');
            editFormButton.classList.add('editForm__button_status_disabled');
            addFormButton.classList.add('editForm__button_status_disabled');
        }
    })
}