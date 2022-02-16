const pictures = (selector) => {
    const pics = document.querySelectorAll(selector);

    pics.forEach((el) => {
        let img = el.firstElementChild;
        el.addEventListener('mouseenter', () => {
            el.querySelectorAll('p:not(.sizes-hit)').forEach(item => item.style.display = 'none');
            img.src = el.firstElementChild.src.substring(0, el.firstElementChild.src.length - 4) + '-1.png';
        });
        el.addEventListener('mouseleave', () => {
            el.querySelectorAll('p').forEach(item => item.style.display = 'block');
            img.src = el.firstElementChild.src.substring(0, el.firstElementChild.src.length - 6) + '.png';
        })
    })
}

export default pictures;