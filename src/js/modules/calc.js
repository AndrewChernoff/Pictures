const calc = (store) => {
    let promocode = document.querySelector('.promocode');
    let calcPrice = document.querySelector('.calc-price');
    let isCodeGot = false;
    const btn = document.querySelector('.calc-button');

    btn.disabled = true;

    function calculate(listener, selector) {
        let param = document.querySelector(selector);

        param.addEventListener(listener, function (e) {
            if (selector === '#size') {
                let pictureParam = e.target.options[e.target.selectedIndex].dataset.price;
                store.sizePrice = +pictureParam;
            } else if (selector === '#material') {
                let pictureParam = e.target.options[e.target.selectedIndex].dataset.price;
                store.materialPrice = +pictureParam;
            } else if (selector === '#options') {
                let pictureParam = e.target.options[e.target.selectedIndex].dataset.price;
                store.options = +pictureParam;
                if (!e.target.selectedIndex) {
                    store.options = 0;
                }
            } else if (selector === 'input[name="upload"]') {
                let pictureParam = e.target.options[e.target.selectedIndex].dataset.price;
                console.log(pictureParam);
                store.image = pictureParam;
            } else if (selector === '.promocode') {
                if (promocode.value == 'IWANTPOPART' || promocode.value == 'IWANTPOPART ') {
                    isCodeGot = true;
                    store.promocode = isCodeGot;
                } else {
                    isCodeGot = false;
                    store.promocode = isCodeGot;
                }
            }

            store.sum = store.sizePrice + store.materialPrice;

            if (!store.sizePrice || !store.materialPrice) {
                calcPrice.textContent = `
                Для расчета нужно выбрать размер картины и материал картины
                `
                btn.disabled = true;
            } else if (store.sizePrice && store.materialPrice && !store.options) {
                btn.disabled = false;
                store.options = 0;
                calcPrice.textContent = store.sizePrice + store.materialPrice + store.options;
            } else if (store.sizePrice && store.materialPrice && store.options) {
                btn.disabled = false;
                store.sum = store.sizePrice + store.materialPrice + store.options;
                calcPrice.textContent = store.sum;
            }

            if (isCodeGot) {
                store.sum = store.sum - (store.sum * .30);
                console.log(store.sum);
                calcPrice.textContent = store.sum;
                if (store.sum === NaN || !store.materialPrice) {
                    calcPrice.textContent = `
                    Для расчета нужно выбрать размер картины и материал картины
                    `
                }
            }

            console.log(store);

        })
    }

    calculate('change', '#size');
    calculate('change', '#material');
    calculate('change', '#options');
    calculate('input', '.promocode');
    calculate('input', 'input[name="upload"]');
}


export default calc;