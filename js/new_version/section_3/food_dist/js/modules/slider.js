function slider({
  container,
  slide,
  nextArrow,
  prevArrow,
  totalCounter,
  currentCounter,
  wrapper,
  field
}) {
  // SLIDER
  let slideNow = 1,
    currentSlideNum = document.querySelector(currentCounter),
    totalSlidesNum = document.querySelector(totalCounter);

  const slidesWrapper = document.querySelector(wrapper),
    slidesField = document.querySelector(field),
    slider = document.querySelector(container),
    allSlides = document.querySelectorAll(slide),
    prevSlideBtn = document.querySelector(prevArrow),
    nextSlideBtn = document.querySelector(nextArrow),
    width = window.getComputedStyle(slidesWrapper).width;

  //SLIDER usual
  // showSlides(slideNow);

  if (allSlides.length < 10) {
    totalSlidesNum.textContent = `0${allSlides.length}`;
    currentSlideNum.textContent = `0${slideNow}`;
  } else {
    totalSlidesNum.textContent = allSlides.length;
    currentSlideNum.textContent = slideNow;
  }


  // function showSlides(n) {
  //   if (n > allSlides.length) {
  //     slideNow = 1;
  //   }

  //   if (n < 1) {
  //     slideNow = allSlides.length;
  //   }

  //   allSlides.forEach(slide => {
  //     slide.classList.add('hide');
  //     slide.classList.add('fade');
  //   });

  //   allSlides[slideNow - 1].classList.add('show');
  //   allSlides[slideNow - 1].classList.remove('hide');
  // }

  function changeCurrentSlideNum(slideNow) {
    if (slideNow < 10) {
      currentSlideNum.textContent = `0${slideNow}`;
    } else {
      currentSlideNum.textContent = slideNow;
    }
  }

  // function changeSlide(n) {
  //   showSlides(slideNow += n);
  //   changeCurrentSlideNum(slideNow);
  // }

  // prevSlideBtn.addEventListener('click', () => {
  //   changeSlide(-1);
  // });

  // nextSlideBtn.addEventListener('click', () => {
  //   changeSlide(1);
  // });

  // SLIDER carousel
  slidesField.style.width = 100 * allSlides.length + '%';
  slidesField.style.display = 'flex';
  slidesField.style.transition = '.5s all';

  slidesWrapper.style.overflow = 'hidden';

  allSlides.forEach(slide => {
    slide.style.width = width;
  });

  //DOTS
  slider.style.position = 'relative';

  const indicators = document.createElement('ol'),
    dots = [];

  indicators.classList.add('carousel-indicators');
  indicators.style.cssText = `
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 15;
    display: flex;
    justify-content: center;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;
  `;

  slider.append(indicators);

  for (let i = 0; i < allSlides.length; i++) {
    const dot = document.createElement('li');
    dot.setAttribute('data-slide-to', i + 1);
    dot.style.cssText = `
      box-sizing: content-box;
      flex: 0 1 auto;
      width: 30px;
      height: 6px;
      margin-right: 3px;
      margin-left: 3px;
      cursor: pointer;
      background-color: #fff;
      background-clip: padding-box;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      opacity: .5;
      transition: opacity .6s ease;
    `;

    if (i == 0) {
      dot.style.opacity = 1;
    }

    indicators.append(dot);
    dots.push(dot);
  }

  function dotsOpacity() {
    dots.forEach(dot => dot.style.opacity = '.5');
    dots[slideNow - 1].style.opacity = 1;
  }

  function deleteNotDigits(str) {
    return +str.replace(/\D/g, '');
  }

  let offset = 0;

  nextSlideBtn.addEventListener('click', () => {
    if (offset == deleteNotDigits(width) * (allSlides.length - 1)) {
      offset = 0;
    } else {
      offset += deleteNotDigits(width);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideNow == allSlides.length) {
      slideNow = 1;
    } else {
      slideNow++;
    }

    changeCurrentSlideNum(slideNow);
    dotsOpacity();
  });

  prevSlideBtn.addEventListener('click', () => {
    if (offset == 0) {
      offset = deleteNotDigits(width) * (allSlides.length - 1);
    } else {
      offset -= deleteNotDigits(width);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideNow == 1) {
      slideNow = allSlides.length;
    } else {
      slideNow--;
    }

    changeCurrentSlideNum(slideNow);
    dotsOpacity();
  });

  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      const slideTo = e.target.getAttribute('data-slide-to');

      slideNow = slideTo;
      offset = deleteNotDigits(width) * (slideTo - 1);

      slidesField.style.transform = `translateX(-${offset}px)`;

      changeCurrentSlideNum(slideNow);
      dotsOpacity();
    });
  });
}

// module.exports = slider;
export default slider;