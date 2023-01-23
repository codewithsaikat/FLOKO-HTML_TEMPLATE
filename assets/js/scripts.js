
// timer

// my next birthday
const newDate = new Date('sep 12 23 23:59:59').getTime()
const countdown = setInterval(() =>{
  
const date = new Date().getTime()
const diff = newDate - date

const month =  Math.floor((diff % (1000 * 60 * 60 * 24 * (365.25 / 12) * 365)) / (1000 * 60 * 60 * 24 * (365.25 / 12)))
const days = Math.floor(diff % (1000 * 60 * 60 * 24 * (365.25 / 12)) / (1000 * 60 * 60 * 24))
const hours =  Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
const seconds = Math.floor((diff % (1000 * 60)) / 1000)

      document.querySelector(".seconds").innerHTML = seconds < 10 ? '0' + seconds : seconds
      document.querySelector(".minutes").innerHTML = minutes < 10 ? '0' + minutes :minutes
      document.querySelector(".hours").innerHTML = hours < 10 ? '0' + hours : hours
      document.querySelector(".days").innerHTML = days < 10 ? '0' + days : days
      document.querySelector(".months").innerHTML = month < 10 ? '0' + month : month

if(diff === 0){
  clearInterval(countdown)
        document.querySelector(".countdown").innerHTML = 'Happy Birthday Ahmed'
}

}, 1000)




// swiper-slider

var swiper = new Swiper(".mySwiper", {
    slidesPerView: '3',
    spaceBetween: 0,
    autoHeight: true,
    centeredSlides: true,
    speed: 1000,
    preventClicks:true,
    roundLengths: true,
    autoplay: true, 
    loop:true,
    breakpoints: {

      300: {
        slidesPerView: 1,
        spaceBetween: 50,
      },

      375: {
        slidesPerView: 1,
        spaceBetween: 50,
      },

      479: {
        slidesPerView: 1,
        spaceBetween: 50,
      },

      579: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 300,
       
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 200,
      
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: -20,
      
      },
      1199: {
        slidesPerView: 2,
        spaceBetween: -200,
        
      },
      1399: {
        slidesPerView: 3,
        spaceBetween: 20,
        
      }
    },
    
   
   
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
    on: {
      init: function () {
        $('.swiper-slide').addClass('changed');
      },
      slideChangeTransitionStart : function() {
        $('.swiper-slide').addClass('changing');
        $('.swiper-slide').removeClass('changed');
      },
      slideChangeTransitionEnd : function() {
        $('.swiper-slide').removeClass('changing');
        $('.swiper-slide').addClass('changed');
      }
    },
  });



  //flickitye slider

var slideEl = $(".slide--parent");

slideEl.flickity({
	imagesLoaded: true,
	wrapAround: true,
	autoPlay: true,
  draggable: true,
	pauseAutoPlayOnHover: false
});




// nav-tabs

$("#tile-1 .nav-tabs a").click(function() {
    var position = $(this).parent().position();
    var width = $(this).parent().width();
      $("#tile-1 .slider").css({"left":+ position.left,"width":width});
  });
  var actWidth = $("#tile-1 .nav-tabs").find(".active").parent("li").width();
  var actPosition = $("#tile-1 .nav-tabs .active").position();
  $("#tile-1 .slider").css({"left":+ actPosition.left,"width": actWidth});
  



  // hover img

  $('.product-img--main')
        // tile mouse actions
        .on('mouseover', function(){
          $(this).children('.product-img--main__image').css({'transform': 'scale('+ $(this).attr('data-scale') +')'});
        })
        .on('mouseout', function(){
          $(this).children('.product-img--main__image').css({'transform': 'scale(1)'});
        })
        .on('mousemove', function(e){
          $(this).children('.product-img--main__image').css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +'%'});
        })
        // tiles set up
        .each(function(){
          $(this)
            // add a image container
            .append('<div class="product-img--main__image"></div>')
            // set up a background image for each tile based on data-image attribute
            .children('.product-img--main__image').css({'background-image': 'url('+ $(this).attr('data-image') +')'});
        });