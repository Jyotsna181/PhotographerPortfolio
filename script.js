$(document).ready(function(){
    $('#carouselExampleSlidesOnly').carousel();

    $('#carouselExampleSlidesOnly').on('slid.bs.carousel', function (e) {
        var currentIndex = $('div.carousel-item.active').index() + 1;
        $('.direction span').text('0' + currentIndex + '/02');
    });

    $('.next').click(function() {
        $('#carouselExampleSlidesOnly').carousel('next');
    });

    $('.prev').click(function() {
        $('#carouselExampleSlidesOnly').carousel('prev');
    });
});


window.addEventListener('scroll', function() {
    console.log("Scrolling!"); 
    var navbar = document.getElementById('main-navbar');
    var heroHeight = document.getElementById('hero').offsetHeight;
    if (window.scrollY > heroHeight) {
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
    }
});

document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll("#gallery .container .row .column img");
  let index = 0;

  function showNextImage() {
    if (index < images.length) {
      images[index].style.opacity = "1";
      index++;
      setTimeout(showNextImage, 1000); 
    }
  }

  showNextImage(); 
});

document.addEventListener('DOMContentLoaded', function () {
    var carousel = document.getElementById('carouselExampleIndicators');
    var direction = document.querySelector('.test span');
    var prevBtn = document.querySelector('.prev-btn');
    var nextBtn = document.querySelector('.next-btn');
    var testimonial1 = document.querySelector('.testimoni1');
    var testimonial2 = document.querySelector('.testimoni2');
    var testimonial3 = document.querySelector('.testimoni3');
  
    function updateTestimonial(index) {
      switch (index) {
        case 0:
          testimonial1.style.display = 'block';
          testimonial2.style.display = 'none';
          testimonial3.style.display = 'none';
          direction.textContent = '1/3';
          break;
        case 1:
          testimonial1.style.display = 'none';
          testimonial2.style.display = 'block';
          testimonial3.style.display = 'none';
          direction.textContent = '2/3';
          break;
        case 2:
          testimonial1.style.display = 'none';
          testimonial2.style.display = 'none';
          testimonial3.style.display = 'block';
          direction.textContent = '3/3';
          break;
      }
    }
  
    prevBtn.addEventListener('click', function() {
      var activeIndex = Array.from(carousel.querySelectorAll('.carousel-item')).indexOf(carousel.querySelector('.carousel-item.active'));
      if (activeIndex > 0) {
        carousel.querySelector('.carousel-item.active').classList.remove('active');
        carousel.querySelectorAll('.carousel-item')[activeIndex - 1].classList.add('active');
        updateTestimonial(activeIndex - 1);
      }
    });
  
    nextBtn.addEventListener('click', function() {
      var activeIndex = Array.from(carousel.querySelectorAll('.carousel-item')).indexOf(carousel.querySelector('.carousel-item.active'));
      if (activeIndex < carousel.querySelectorAll('.carousel-item').length - 1) {
        carousel.querySelector('.carousel-item.active').classList.remove('active');
        carousel.querySelectorAll('.carousel-item')[activeIndex + 1].classList.add('active');
        updateTestimonial(activeIndex + 1);
      }
    });
  
    carousel.addEventListener('slid.bs.carousel', function() {
      var activeIndex = Array.from(carousel.querySelectorAll('.carousel-item')).indexOf(carousel.querySelector('.carousel-item.active'));
      updateTestimonial(activeIndex);
    });
  });

  var swiper = new Swiper(".image-slider", {
    loop: true,
    spaceBetween: 10,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });

  var currentSlide = 0;
  var totalSlides = document.querySelectorAll('.swiper-slide').length;

  function prevSlide() {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      updateSlideNumber();
      swiper.slideTo(currentSlide);
  }

  function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateSlideNumber();
      swiper.slideTo(currentSlide);
  }

  function updateSlideNumber() {
      document.getElementById('slide-number').textContent = (currentSlide + 1) + '/' + totalSlides;
  }

  document.addEventListener("DOMContentLoaded", function() {
    const scrollTopBtn = document.getElementById('scrollTopBtn');
  
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        scrollTopBtn.style.display = 'block';
      } else {
        scrollTopBtn.style.display = 'none';
      }
    });
  
    scrollTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
  