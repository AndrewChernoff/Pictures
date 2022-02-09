const inputLangText = (selector) => {
    const input = document.querySelectorAll(selector);

    input.forEach(el => {
        el.addEventListener('input', () => {
            el.value = el.value.replace(/[^а-яё 0-9]/i, "");

            if (el.value.match(/[a-z]/i)) {
                el.value = '';
            }
        })

    })

}

export default inputLangText