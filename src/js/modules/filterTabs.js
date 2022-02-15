const filterTabs = (menuItemsSelector, imagesSelector) => {
    const menuItems = document.querySelectorAll(menuItemsSelector);
    const images = document.querySelectorAll(imagesSelector);
    const emptyTab = document.querySelector('.portfolio-no');

    menuItems.forEach((item, i) => {
        item.addEventListener('click', () => {
            menuItems.forEach(item => item.classList.remove('active'));
            item.classList.add('active');
            if (item.classList.contains('all')) {
                images.forEach(img => {
                    img.style.display = 'none';
                })
                images.forEach(img => {
                    if (img.classList.contains('all')) {
                        img.classList.add('faded');
                        img.style.display = 'block';
                    }
                })
                emptyTab.style.display = 'none';
            } else if (item.classList.contains('lovers')) {
                images.forEach(img => {
                    img.style.display = 'none';
                })
                images.forEach(img => {
                    if (img.classList.contains('lovers')) {
                        img.classList.add('faded');
                        img.style.display = 'block';
                    }
                })
                emptyTab.style.display = 'none';
            } else if (item.classList.contains('chef')) {
                images.forEach(img => {
                    img.style.display = 'none';
                })
                images.forEach(img => {
                    if (img.classList.contains('chef')) {
                        img.classList.add('faded');
                        img.style.display = 'block';
                    }
                })
                emptyTab.style.display = 'none';
            } else if (item.classList.contains('girl')) {
                images.forEach(img => {
                    img.style.display = 'none';
                })
                images.forEach(img => {
                    if (img.classList.contains('girl')) {
                        img.classList.add('faded');
                        img.style.display = 'block';
                    }
                })
                emptyTab.style.display = 'none';
            } else if (item.classList.contains('guy')) {
                images.forEach(img => {
                    img.style.display = 'none';
                })
                images.forEach(img => {
                    if (img.classList.contains('guy')) {
                        img.classList.add('faded');
                        img.style.display = 'block';
                    }
                })
                emptyTab.style.display = 'none';
            } else if (item.classList.contains('grandmother') || item.classList.contains('granddad')) {
                images.forEach(img => {
                    img.style.display = 'none';
                })
                emptyTab.classList.add('faded');
                emptyTab.style.display = 'block';
            }
        })
    })

}

export default filterTabs;