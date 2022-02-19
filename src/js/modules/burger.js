const burger = (triggerSelector, menuSelector) => {
    const trigger = document.querySelector(triggerSelector);
    const menu = document.querySelector(menuSelector);
    menu.style.display = 'none';
    menu.classList.add('faded');

    trigger.addEventListener('click', () => {
        if (menu.style.display == 'none' && window.screen.width < 993) {
            menu.style.display = 'block';
            menu.style.transition = 'all 0.5s';
        } else if (menu.style.display == 'block' && window.screen.width < 993) {
            menu.style.display = 'none';
            menu.style.transition = 'all 0.5s';
        }
    })

}

export default burger;