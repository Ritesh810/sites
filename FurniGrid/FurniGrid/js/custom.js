// wow animation
var config = {
  boxClass: 'wow',
  animateClass: 'animated',
  offset: 0,
  mobile: true,
  live: true
};
new WOW(config).init();

// category slider 
$(document).ready(function () {
  $('.category-slider').slick({
    infinite: true,
    slidesToShow: 6, 
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1399, 
        settings: {
          slidesToShow: 4 
        }
      },
      {
        breakpoint: 991, 
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 575, 
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});

// what client Say slider 
$('.testimonial-slider').slick({
  dots: true,
  arrows: true,
  centerMode: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  variableWidth: true,
  autoplay: false,
  autoplaySpeed: 2000,

  responsive: [
      {
          breakpoint: 768,
          settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '2.5rem',
              slidesToShow: 1
          }
      },
      {
          breakpoint: 480,
          settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '2.5rem',
              slidesToShow: 1,
              infinite: false
          }
      }
  ]
});

// all collection sidebar 
document.querySelectorAll('.list-unstyled li label').forEach(label => {
  label.addEventListener('click', function () {
      const checkbox = document.getElementById(label.getAttribute('for'));
      checkbox.checked = !checkbox.checked; // Toggle checkbox
  });
});

document.querySelectorAll('.filter-title').forEach(title => {
  title.addEventListener('click', function () {
      const icon = this.querySelector('.toggle-icon');
      icon.textContent = icon.textContent === '−' ? '+' : '−';
  });
});



// product page slider
$('.products-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows:true
});

// quantity
var QtyInput = (function () {
	var $qtyInputs = $(".qty-input");

	if (!$qtyInputs.length) {
		return;
	}

	var $inputs = $qtyInputs.find(".product-qty");
	var $countBtn = $qtyInputs.find(".qty-count");
	var qtyMin = parseInt($inputs.attr("min"));
	var qtyMax = parseInt($inputs.attr("max"));

	$inputs.change(function () {
		var $this = $(this);
		var $minusBtn = $this.siblings(".qty-count--minus");
		var $addBtn = $this.siblings(".qty-count--add");
		var qty = parseInt($this.val());

		if (isNaN(qty) || qty <= qtyMin) {
			$this.val(qtyMin);
			$minusBtn.attr("disabled", true);
		} else {
			$minusBtn.attr("disabled", false);
			
			if(qty >= qtyMax){
				$this.val(qtyMax);
				$addBtn.attr('disabled', true);
			} else {
				$this.val(qty);
				$addBtn.attr('disabled', false);
			}
		}
	});

	$countBtn.click(function () {
		var operator = this.dataset.action;
		var $this = $(this);
		var $input = $this.siblings(".product-qty");
		var qty = parseInt($input.val());

		if (operator == "add") {
			qty += 1;
			if (qty >= qtyMin + 1) {
				$this.siblings(".qty-count--minus").attr("disabled", false);
			}

			if (qty >= qtyMax) {
				$this.attr("disabled", true);
			}
		} else {
			qty = qty <= qtyMin ? qtyMin : (qty -= 1);
			
			if (qty == qtyMin) {
				$this.attr("disabled", true);
			}

			if (qty < qtyMax) {
				$this.siblings(".qty-count--add").attr("disabled", false);
			}
		}

		$input.val(qty);
	});
})();


// offer-countdown 
document.addEventListener("DOMContentLoaded", function() {
  (function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;

    const targetTime = new Date().getTime() + (15 * day) + (23 * hour) + (15 * minute) + (41 * second);

    const x = setInterval(function() {    
      const now = new Date().getTime(),
            distance = targetTime - now;

      const daysElem = document.getElementById("days");
      const hoursElem = document.getElementById("hours");
      const minutesElem = document.getElementById("minutes");
      const secondsElem = document.getElementById("seconds");

      if (daysElem && hoursElem && minutesElem && secondsElem) {
        daysElem.innerText = Math.floor(distance / day);
        hoursElem.innerText = Math.floor((distance % day) / hour);
        minutesElem.innerText = Math.floor((distance % hour) / minute);
        secondsElem.innerText = Math.floor((distance % minute) / second);
      }

      if (distance < 0) {
        document.getElementById("headline").innerText = "Time's up!";
        document.getElementById("countdown").style.display = "none";
        document.getElementById("content").style.display = "inline-block";
        clearInterval(x);
      }
    }, 1000);
  })();
});


// cart timer 
document.addEventListener("DOMContentLoaded", function() {
  var timeLeft = 40 * 60;

  var countdownFunction = setInterval(function() {
      
      var minutes = Math.floor(timeLeft / 60);
      var seconds = timeLeft % 60;
      
      seconds = seconds < 10 ? '0' + seconds : seconds;
      
      var timerElement = document.getElementById("timer");
      if (timerElement) {
          timerElement.innerHTML = minutes + ":" + seconds;
      }

      timeLeft--;
  
      if (timeLeft < 0) {
          clearInterval(countdownFunction);
          if (timerElement) {
              timerElement.innerHTML = "EXPIRED";
          }
      }
  }, 1000);
});




// mega-menu 
document.addEventListener("DOMContentLoaded", function() {
  const shopLink = document.querySelector(".mega-dropdown .nav-link");
  const megaMenu = document.querySelector(".mega-dropdown .mega-menu");

  shopLink.addEventListener("click", function(event) {
      event.preventDefault();  
      megaMenu.classList.toggle("show");
  });

  document.addEventListener("click", function(event) {
      if (!shopLink.contains(event.target) && !megaMenu.contains(event.target)) {
          megaMenu.classList.remove("show");
      }
  });
});


// my account tab
document.getElementById('viewAddressBtn').addEventListener('click', function(event) {
  event.preventDefault(); 

  var addressTab = new bootstrap.Tab(document.getElementById('v-pills-address-tab'));
  addressTab.show(); 
});



	




