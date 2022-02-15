import postData from "./DAL";

const forms = (store) => {
    let form = document.querySelectorAll('form');
    let modal = document.querySelectorAll('[data-modal]');
    let uploadInput = document.querySelectorAll('[name="upload"]');

    uploadInput.forEach(el => {
        el.addEventListener('input', () => {
            let fileName = el.files[0].name;
            let array = fileName.split('.');
            if (array[0].length > 6) {
                array.value = array[0].slice(0, 6) + '...' + array[1];
            }
            el.previousSibling.previousSibling.textContent = array.value;
        })
    })

    function clearUploadInput() {
        uploadInput.forEach(el => {
            el.previousSibling.previousSibling.textContent = 'Файл не выбран';
        })
    }

    function closeModal() {
        modal.forEach(el => el.style.display = 'none');
    }

    let sendFormData = (formEl) => {
        formEl.addEventListener('submit', (e) => {
            e.preventDefault();

            let formData = new FormData(formEl);

            let obj = {};

            let calc = formEl.getAttribute('data-calc');
            if (calc === 'end') {
                for (let key in store) {
                    formData.append(key, store[key])
                }
            }

            formData.forEach((value, key) => {
                obj[key] = value;
            })

            console.log(obj);



            const message = {
                success: 'Скоро с вами свяжемся!',
                failure: 'Что-то пошло не так',
                loading: 'Загрузка...',
                loadingGIF: 'assets/img/spinner.gif',
                ok: 'assets/img/ok.png'
            }

            const server = {
                question: 'assets/question.php',
                design: 'assets/server.php'
            }

            let serverPath;

            if (formEl.closest('.popup-design')) {/// if statements for server path
                serverPath = server.design;
            } else if (formEl.closest('.popup-consultation')) {
                serverPath = server.question;
            } else if (formEl.closest('.calc')) {
                serverPath = server.question;
            }

            let formStatus = document.createElement('div');
            formStatus.style.color = 'red';
            formStatus.innerHTML = `<div>
                <img src='${message.loadingGIF}'/>
                <div>${message.loading}</div>
            </div>`;
            formStatus.classList.add('animated', 'slideInUp');
            if (formEl.closest('.consultation')) {
                formStatus.style.margin = '0 40%';
            }
            formEl.parentNode.appendChild(formStatus);

            postData(serverPath, obj)
                .then((response) => {
                    console.log(response);
                    console.log(obj);
                    console.log(serverPath);
                    formEl.style.display = 'none';
                    formStatus.innerHTML = `<div>
                    <img src='${message.ok}'> 
                    <div>${message.success}</div>
                    </div>`;
                })
                .then(() => {
                    setTimeout(() => {
                        closeModal();
                        formStatus.remove();
                        formEl.style.display = 'block';
                        document.body.style.overflow = '';
                        document.body.style.marginRight = '0px';
                    }, 4000);
                }).catch(() => {
                    formStatus.textContent = message.failure;
                    setTimeout(() => formStatus.remove(), 5000);
                    document.body.style.overflow = '';
                }).finally(() => {
                    formEl.reset();
                    clearUploadInput();

                    formEl.classList.add('animated', 'slideInUp');

                    setTimeout(() => {
                        formEl.classList.remove('animated', 'slideInUp');
                    }, 5000);
                })

        })
    }

    form.forEach(el => sendFormData(el));
}


export default forms;