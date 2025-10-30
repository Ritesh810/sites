var modal = document.getElementById("videoPopup");
var body = document.body;

function openPopup() {
    modal.style.display = "block";
    body.classList.add("modal-open");
}

function closePopup() {
    modal.style.display = "none";
    body.classList.remove("modal-open");
}

window.onclick = function(event) {
    if (event.target == modal) {
        closePopup();
    }
}


$('.banner-slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
});

new WOW().init();

var owl = $('.owl-carousel');
    owl.owlCarousel({
    loop:true,
    nav:true,
    padding:0,
    dots: true,
    animateOut: "animate__animated animate__fadeInDown",
    stagePadding :0,
    responsive:{
        0:{
            items:1
        },
        575:{
            items:1
        },   
        768:{
            items:1
        },            
        992:{
            items:1
        },
        1200:{
            items:1
        },
        1400:{
          items:1
        }
    }
});

var swiper = new Swiper(".swiper-container", {
	slidesPerView: 1,
	loop: true,
	effect: "coverflow",
	grabCursor: true,
	centeredSlides: true,
	spaceBetween: 100,
	coverflowEffect: {
		rotate: 0,
		stretch: 0,
		depth: 800,
		modifier: 1,
		slideShadows: false
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev"
	},
});


$(document).ready(function(){
	progress_bar();
});

function progress_bar() {
	var speed = 30;
	var items = $('.progress-bar').find('.progress-bar-item');
	
    items.each(function() {
        var item = $(this).find('.progress');
        var itemValue = item.data('progress');
        var i = 0;
        var value = $(this);
		
        var count = setInterval(function(){
            if(i <= itemValue) {
                var iStr = i.toString();
                item.css({
                    'width': iStr+'%'
                });
                value.find('.item-value').html(iStr +'%');
            }
            else {
                clearInterval(count);
            }
            i++;
        },speed);
    });
}
