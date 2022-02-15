const filterTabs = (menuItemsSelector, imagesSelector) => {
    const menuItems = document.querySelectorAll(menuItemsSelector);
    const images = document.querySelectorAll(imagesSelector);
    const emptyTab = document.querySelector('.portfolio-no');

    function switchTab(className) {
        images.forEach(img => {
            img.style.display = 'none';
        })
        images.forEach(img => {
            if (img.classList.contains(className)) {
                img.classList.add('faded');
                img.style.display = 'block';
            }
        })
        emptyTab.style.display = 'none';
    }

    menuItems.forEach((item) => {
        item.addEventListener('click', () => {
            menuItems.forEach(item => item.classList.remove('active'));
            item.classList.add('active');
            switch (true) {
                case (item.classList.contains('all')):
                    switchTab('all');
                    break;
                case (item.classList.contains('lovers')):
                    switchTab('lovers');
                    break;
                case (item.classList.contains('chef')):
                    switchTab('chef');
                    break;
                case (item.classList.contains('girl')):
                    switchTab('girl');
                    break;
                case (item.classList.contains('guy')):
                    switchTab('guy');
                    break;
                case (item.classList.contains('grandmother') || item.classList.contains('granddad')):
                    images.forEach(img => {
                        img.style.display = 'none';
                    })
                    emptyTab.classList.add('faded');
                    emptyTab.style.display = 'block';
                    break;
                default:
                    break;
            }
        })
    })

}

export default filterTabs;