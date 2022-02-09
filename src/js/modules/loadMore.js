const loadMore = (button, styles) => {
    const trigger = document.querySelector(button);
    const styleCards = document.querySelectorAll(styles);

    console.log(styleCards[0] + '5')

    trigger.addEventListener('click', () => {
        styleCards.forEach(el => {
            el.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
            el.classList.add('animated', 'zoomInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
            console.log(el)
        });

        trigger.remove();
    })

}

export default loadMore;