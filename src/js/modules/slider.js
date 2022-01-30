const slider = (slides, direction, prevBtn, nextBtn) => {
    const slidesItems = document.querySelectorAll(slides);
    const prevButton = document.querySelector(prevBtn);
    const nextButton = document.querySelector(nextBtn);

    let autoSlide;

    function hideSlides() {
        slidesItems.forEach(el => {
            el.classList.add('animated');
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
    };

    try {
        prevButton.addEventListener('click', () => {
            moveSlide(-1);
            slidesItems[slideIndex - 1].classList.remove('slideInLeft');
            slidesItems[slideIndex - 1].classList.add('slideInRight');
        });

        nextButton.addEventListener('click', () => {
            moveSlide(1)
            slidesItems[slideIndex - 1].classList.remove('slideInRight');
            slidesItems[slideIndex - 1].classList.add('slideInLeft');
        });

    } catch (e) { }

    function activteSliderAnimation() {
        if (direction === 'horizontal') {
            autoSlide = setInterval(() => {
                moveSlide(1)
                slidesItems[slideIndex - 1].classList.remove('slideInRight');
                slidesItems[slideIndex - 1].classList.add('slideInLeft');

            }, 3000)

        } else if (direction === 'vertical') {
            autoSlide = setInterval(() => {
                moveSlide(1);
                slidesItems[slideIndex - 1].classList.add('slideInUp');
            }, 3000)

        }
    }

    activteSliderAnimation();

    slidesItems[0].parentNode.addEventListener('mouseenter', () => clearInterval(autoSlide));
    slidesItems[0].parentNode.addEventListener('mouseleave', activteSliderAnimation);
}

export default slider;