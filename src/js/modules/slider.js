const slider = (slides, prevBtn, nextBtn) => {
    const slidesItems = document.querySelectorAll(slides);
    const prevButton = document.querySelector(prevBtn);
    const nextButton = document.querySelector(nextBtn);

    function hideSlides() {
        slidesItems.forEach(el => {
            ///el.classList.add('faded');
            el.style.display = 'none';
        })
    }

    hideSlides();

    let slideIndex = 1;

    function showSlide(number) {
        if (number < 1) {
            slideIndex = slidesItems.length;
        } else if (number > slidesItems.length) {
            slideIndex = 1;
        }
        hideSlides();

        slidesItems[slideIndex - 1].style.display = 'block';
    }

    showSlide();

    function moveSlide(number) {
        showSlide(slideIndex += number);
    }

    prevButton.addEventListener('click', () => {
        moveSlide(-1);
        slidesItems[slideIndex - 1].classList.remove('slideInLeft');
        slidesItems[slideIndex - 1].classList.add('slideInRight');
    })

    nextButton.addEventListener('click', () => {
        moveSlide(1)
        slidesItems[slideIndex - 1].classList.remove('slideInRight');
        slidesItems[slideIndex - 1].classList.add('slideInLeft');
    })
}

export default slider;