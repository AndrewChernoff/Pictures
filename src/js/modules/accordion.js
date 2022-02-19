const accordion = (headingSelector, blocksSelector) => {
    const accordionHeadings = document.querySelectorAll(headingSelector);
    const blocks = document.querySelectorAll(blocksSelector);

    blocks.forEach(block => block.classList.add('animated', 'flipInX'))
    accordionHeadings.forEach(el => {

        el.addEventListener('click', function () {
            this.classList.toggle('active');
        });
    })
}

export default accordion;