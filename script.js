window.addEventListener("load", () =>{
  const loader = document.querySelector(".loader")

  loader.classList.add("loader-hidden")
});

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    autoplay:true,
  },
});


/* Slider */
$(document).ready(function(){
  $('.customer-logos').slick({
      slidesToShow: 2,
      autoplay: true,
      autoplaySpeed: 2600,
      arrows: false,
      dots: false,
      pauseOnHover: true,
  });
});

function alert(){
  Swal.fire({
    title: 'الخدمة تحت البرمجة',
    icon: 'warning',
    confirmButtonColor: '#facea8',
    confirmButtonText: 'تمام، شكرًا لك',
    TextconfirmButtonColor: '#000',
  })
};

