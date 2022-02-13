const calc = () => {
    let size;
    let material;
    let options = 0;
    let promocode = document.querySelector('.promocode');
    let calcPrice = document.querySelector('.calc-price');
    let result;
    let isGotCode = false;

    function calculate(listener, selector) {
        let param = document.querySelector(selector);

        param.addEventListener(listener, function (e) {
            if (selector === '#size') {
                let pictureParam = e.target.options[e.target.selectedIndex].dataset.price;
                console.log(pictureParam);
                size = +pictureParam;
            } else if (selector === '#material') {
                let pictureParam = e.target.options[e.target.selectedIndex].dataset.price;
                console.log(pictureParam);
                material = +pictureParam;
            } else if (selector === '#options') {
                let pictureParam = e.target.options[e.target.selectedIndex].dataset.price;
                console.log(pictureParam);
                options = +pictureParam;
                if (e.target.selectedIndex === 0) {
                    options = 0;
                }
            } else if (selector === '.promocode') {
                if (promocode.value == 'IWANTPOPART') {
                    isGotCode = true;
                } else {
                    isGotCode = false;
                }
            }

            let sum = size + material + options;
            result = sum;
            console.log(result);

            if (isGotCode) {
                result = sum - (sum * .30);
                console.log(promocode.value);
                console.log(result);
            }

            if (!size || !material) {
                calcPrice.textContent = `
                Для расчета нужно выбрать размер картины и материал картины
                `
            } else {
                calcPrice.textContent = result;
            }
        })
    }

    calculate('change', '#size');
    calculate('change', '#material');
    calculate('change', '#options');
    calculate('input', '.promocode');
}

export default calc;