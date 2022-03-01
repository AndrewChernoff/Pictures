const dragAndDrop = () => {

    const uploadInputs = document.querySelectorAll('[name = "upload"]');

    ['dragover', 'dragleave', 'dragenter', 'drop'].forEach(evtName => {
        uploadInputs.forEach(input => {
            input.addEventListener(evtName, preventDefault);
        })
    });

    function preventDefault(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function hightlight(item) {
        item.parentElement.style.backgroundColor = '#865b59';
        item.parentElement.style.border = '3px solid red';
    }

    function unhightlight(item) {
        item.parentElement.style.backgroundColor = item.parentElement.parentElement.style.backgroundColor;
        item.parentElement.style.border = 'none';
    }

    ['dragover', 'dragenter'].forEach(evtName => {
        uploadInputs.forEach(input => {
            input.addEventListener(evtName, () => hightlight(input));
        })
    });

    ['dragleave', 'drop'].forEach(evtName => {
        uploadInputs.forEach(input => {
            input.addEventListener(evtName, () => unhightlight(input));
        })
    });

    uploadInputs.forEach(input => {
        input.addEventListener('drop', (e) => {
            input.files = e.dataTransfer.files
            let fileName = input.files[0].name;
            let array = fileName.split('.');
            if (array[0].length > 6) {
                array.value = array[0].slice(0, 6) + '...' + array[1];
            }
            input.previousSibling.previousSibling.textContent = array.value;
            unhightlight(input);
        })
    });
}

export default dragAndDrop;