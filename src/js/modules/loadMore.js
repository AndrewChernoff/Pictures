const loadMore = (button, styles) => {
    const row = document.querySelector(styles);
    const trigger = document.querySelector(button);

    function getStyles() {
        fetch('assets/db.json')
            .then(response => response.json())
            .then(data => {
                data.styles.forEach(({ src, title, link }) => {
                    row.innerHTML += `
            <div class="animated zoomInUp col-sm-3 col-sm-offset-0 col-xs-10 col-xs-offset-1">
                    <div class=styles-block>
                        <img src=${src} alt>
                        <h4>${title}</h4>
                        <a href="${link}">Подробнее</a>
                    </div>
                </div>
            `;
                })
            });
    }

    trigger.addEventListener('click', () => {
        getStyles();
        trigger.remove();
    });
}

///finish loading by refactoring query in DAL

export default loadMore;