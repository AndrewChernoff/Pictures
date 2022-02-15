const calc = (store) => {
    let size;
    let material;
    let options = 0;
    let promocode = document.querySelector('.promocode');
    let calcPrice = document.querySelector('.calc-price');
    let result;
    let isCodeGot = false;
    const btn = document.querySelector('.calc-button');

    btn.disabled = true;

    function calculate(listener, selector) {
        let param = document.querySelector(selector);

        param.addEventListener(listener, function (e) {
            if (selector === '#size') {
                let pictureParam = e.target.options[e.target.selectedIndex].dataset.price;
                console.log(pictureParam);
                size = +pictureParam;
                store.sizePrice = pictureParam;
            } else if (selector === '#material') {
                let pictureParam = e.target.options[e.target.selectedIndex].dataset.price;
                console.log(pictureParam);
                material = +pictureParam;
                store.materialPrice = pictureParam;
            } else if (selector === '#options') {
                let pictureParam = e.target.options[e.target.selectedIndex].dataset.price;
                console.log(pictureParam);
                options = +pictureParam;
                if (e.target.selectedIndex === 0) {
                    options = 0;
                }
                storePrice.options = pictureParam;
            } else if (selector === 'input[name="upload"]') {///
                let pictureParam = e.target.options[e.target.selectedIndex].dataset.price;
                console.log(pictureParam);
                options = +pictureParam;
                if (e.target.selectedIndex === 0) {
                    options = 0;
                }
                storePrice.image = pictureParam;
            } else if (selector === '.promocode') {
                if (promocode.value == 'IWANTPOPART') {
                    isCodeGot = true;
                } else {
                    isCodeGot = false;
                }
            }

            let sum = size + material + options;
            result = sum;
            console.log(result);

            if (isCodeGot) {
                result = sum - (sum * .30);
                console.log(promocode.value);
                console.log(result);
            }

            if (!size || !material) {
                calcPrice.textContent = `
                Для расчета нужно выбрать размер картины и материал картины
                `
                btn.disabled = true;////
            } else if (size || material) {
                calcPrice.textContent = result;
                btn.disabled = false;////
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