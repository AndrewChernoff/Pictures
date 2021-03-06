const modal = () => {
    let uploadInput = document.querySelectorAll('[name="upload"]');

    function getScrollbarWidth() {
        let div = document.createElement('div');

        div.style.overflowY = 'scroll';
        div.style.width = '50px';
        div.style.height = '50px';

        document.body.append(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;

        div.remove();

        return scrollWidth;
    }

    let popedUp = false;


    function modalWindow(triggerSelector, modalSelector, removeTrigger = false) {
        const trigger = document.querySelectorAll(triggerSelector);
        const modalWindow = document.querySelector(modalSelector);
        const windows = document.querySelectorAll('[data-modal]');
        const forms = document.querySelectorAll('form');

        windows.forEach(el => {
            el.classList.add('faded');
        })

        trigger.forEach(el => {
            el.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                popedUp = true;

                modalWindow.style.display = 'block';
                document.body.style.marginRight = `${getScrollbarWidth()}px`;
                document.body.style.overflow = 'hidden';

                if (removeTrigger) {
                    el.remove();
                }
            });
        })

        modalWindow.addEventListener('click', (e) => {
            if (e.target.classList.contains(modalSelector.slice(1)) || e.target.className === 'popup-close') {
                modalWindow.style.display = 'none';
                document.body.style.overflow = '';
                document.body.style.marginRight = '0px';
                forms.forEach(form => form.reset());
            }

            uploadInput.forEach(input => { ////next siblng textContent of uploaded photo in form after closing modal window  
                if (input.previousSibling.previousSibling.textContent != 'Файл не выбран') {
                    input.previousSibling.previousSibling.textContent = 'Файл не выбран';
                }
            })
        })
    }

    modalWindow('.button-consultation', '.popup-consultation');
    modalWindow('.button-design', '.popup-design');
    modalWindow('.fixed-gift', '.popup-gift', true);

    document.addEventListener('scroll', function (e) { ///user reached the buttom
        let documentHeight = document.body.scrollHeight;
        let currentScroll = window.scrollY + window.innerHeight;

        let scrollHeight = Math.ceil(documentHeight, currentScroll);
        let modifier = 200;
        if (currentScroll + modifier > documentHeight && !popedUp) {
            //console.log('You are at the bottom!')
            document.querySelector('.popup-consultation').style.display = 'block';
            document.body.style.overflow = 'hidden';
            popedUp = true;
        }
    })

    function showModalByTime(selector) {
        setTimeout(function () {
            let display;

            document.querySelectorAll('[data-modal]').forEach(el => {
                if (getComputedStyle(el).display !== 'none') {
                    display = 'block';
                }
            });

            if (!display) {
                document.querySelector(selector).style.display = 'block';
                document.body.style.marginRight = `${getScrollbarWidth()}px`;
                document.body.style.overflow = 'hidden';
                popedUp = true;
            }
        }, 7000)
    }

    //showModalByTime('.popup-consultation');
}

export default modal;