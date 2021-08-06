import $ from '../core';

$.prototype.carousel = function () {
    for (let i = 0; i < this.length; i++) {
        const width = window.getComputedStyle(this[i].querySelector('.carousel-inner')).width;
        const slides = this[i].querySelectorAll('.carousel-item');
        const slidesField = this[i].querySelector('.carousel-slides');
        const dots = this[i].querySelectorAll('.carousel-indicators li');

        slidesField.style.width = 100 * slides.length + '%';
        slides.forEach(slide => {
            slide.style.width = width;
        });

        let offset = 0;
        let slideIndex = 0;

        $(this[i].querySelector('[data-slide="next"]')).click((e) => {
            e.preventDefault();
            if (offset == (+width.replace(/\D/g, '') * (slides.length - 1))) {
                offset = 0;
            } else {
                offset += +width.replace(/\D/g, '');
            }

            slidesField.style.transform = `translateX(-${offset}px)`;

            if (slideIndex == slides.length - 1) {
                slideIndex = 0;
            } else {
                slideIndex++;
            }

            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        });

        $(this[i].querySelector('[data-slide="prev"]')).click((e) => {
            e.preventDefault();
            if (offset == 0) {
                offset = +width.replace(/\D/g, '') * (slides.length - 1);
            } else {
                offset -= +width.replace(/\D/g, '');
            }

            slidesField.style.transform = `translateX(-${offset}px)`;

            if (slideIndex == 0) {
                slideIndex = slides.length - 1;
            } else {
                slideIndex--;
            }

            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        });

        const sliderId = this[i].getAttribute('id');
        $(`#${sliderId} .carousel-indicators li`).click(e => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = +width.replace(/\D/g, '') * slideTo;

            slidesField.style.transform = `translateX(-${offset}px)`;
            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        })
    }
};

$.prototype.createCarousel = function ({id = 'e', settings} = {}) {
    for (let i = 0; i < this.length; i++) {
        let carousel = document.createElement('div');
        carousel.classList.add('carousel');
        carousel.id = id;

        let images = [];
        let dots = [];

        for (let j = 0; j < settings.images.length; j++) {
            let carouselItem = document.createElement('div');
            carouselItem.innerHTML = `
                <div class="carousel-item">
                    <img src="${settings.images[j]}" alt="Slide ${j}">
                </div>`;
            images.push(carouselItem);

            let carouselDot = document.createElement('li');
            carouselDot.setAttribute('data-slide-to', `${j}`);
            if (j == 0) {
                carouselDot.classList.add('active');
            }

            dots.push(carouselDot);
        }
        carousel.innerHTML = `
        <ol class="carousel-indicators">
        </ol>
        <div class="carousel-inner">
            <div class="carousel-slides">

            </div>
        </div>
        <a href="#" class="carousel-prev" data-slide="prev">
            <span class="carousel-prev-icon">&lt;</span>
        </a>
        <a href="#" class="carousel-next" data-slide="next">
            <span class="carousel-prev-icon">&gt;</span>
        </a>`;

        carousel.querySelector('.carousel-indicators').append(...dots);
        carousel.querySelector('.carousel-slides').append(...images);

        this[i].appendChild(carousel);

        $('.carousel').carousel();

        let focus = false;


        function activateAnimation() {
            focus = setInterval(function () {
                carousel.querySelector('.carousel-next').click();
            }, settings.autoSlideSpeed || 5000);
        }

        if (settings.autoSlide) {
            activateAnimation();

            [...carousel.querySelectorAll('.carousel-item'), carousel.querySelector('a.carousel-prev'), carousel.querySelector('.carousel-next')].forEach(item => {
                item.addEventListener('mouseover', () => {
                    clearInterval(focus);
                })
            });
            [...carousel.querySelectorAll('.carousel-item'), carousel.querySelector('a.carousel-prev'), carousel.querySelector('.carousel-next')].forEach(item => {
                item.addEventListener('mouseleave', () => {
                    activateAnimation(focus);
                })
            });
        }
    }
}
$('.carousel').carousel();


