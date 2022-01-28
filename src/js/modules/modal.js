const modal = () => {

    function modalWindow(triggerSelector, modalSelector) {
        const trigger = document.querySelectorAll(triggerSelector);
        const modalWindow = document.querySelector(modalSelector);
        const windows = document.querySelectorAll('[data-modal]');

        trigger.forEach(el => {
            el.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                windows.forEach(window => window.style.display = 'none');

                modalWindow.style.display = 'block';
                document.body.style.overflow = 'hidden';
            });
        })

        modalWindow.addEventListener('click', (e) => {
            if (e.target.className === modalSelector.slice(1) || e.target.className === 'popup-close') {
                modalWindow.style.display = 'none';
                document.body.style.overflow = '';
                document.body.style.marginRight = '0px';
            }
        })

    }

    modalWindow('.button-consultation', '.popup-consultation');
    modalWindow('.button-design', '.popup-design');

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
                document.body.style.overflow = 'hidden';
            }
        }, 5000)
    }

    showModalByTime('.popup-consultation');

}

export default modal;