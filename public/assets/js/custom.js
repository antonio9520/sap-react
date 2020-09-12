(function($) {
	$(document).ready(
	function(){
		$(".app-sidebar__user").removeClass("active");
	});
    "use strict";

	// ______________Full Screen
	$(document).on("click",".fullscreen-button", function toggleFullScreen() {
		if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
			if (document.documentElement.requestFullScreen) {
			  document.documentElement.requestFullScreen();
			} else if (document.documentElement.mozRequestFullScreen) {
			  document.documentElement.mozRequestFullScreen();
			} else if (document.documentElement.webkitRequestFullScreen) {
			  document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
			} else if (document.documentElement.msRequestFullscreen) {
			  document.documentElement.msRequestFullscreen();
			}
		} else {
			if (document.cancelFullScreen) {
			  document.cancelFullScreen();
			} else if (document.mozCancelFullScreen) {
			  document.mozCancelFullScreen();
			} else if (document.webkitCancelFullScreen) {
			  document.webkitCancelFullScreen();
			} else if (document.msExitFullscreen) {
			  document.msExitFullscreen();
			}
		}
	})

	// ______________Updated Chart
    var updatingChart = $(".updating-chart").peity("line", { width: "100%",height:100 ,fill: "#089e60",  stroke: "#531270"})
    setInterval(function() {
        var random = Math.round(Math.random() * 30)
        var values = updatingChart.text().split(",")
        values.shift()
        values.push(random)

        updatingChart
            .text(values.join(","))
            .change()
    }, 1000)

	 // ______________Headerfixed
	$(window).on("scroll", function(e){
		if ($(window).scrollTop() >= 66) {
			$('header').addClass('fixed-header');
		}
		else {
			$('.header').removeClass('fixed-header');
		}
    });
	

	// ______________ Chart Circle
	if ($('.chart-circle').length) {
		$('.chart-circle').each(function() {
			let $this = $(this);

			$this.circleProgress({
			  fill: {
				color: $this.attr('data-color')
			  },
			  size: $this.height(),
			  startAngle: -Math.PI / 4 * 2,
			  emptyFill: '#e9eaf3',
			  lineCap: 'round'
			});
		});
	}
	
	// ______________ Chart Circle
	if ($('.chart-circle-dark').length) {
		$('.chart-circle-dark').each(function() {
			let $this = $(this);

			$this.circleProgress({
			  fill: {
				color: $this.attr('data-color')
			  },
			  size: $this.height(),
			  startAngle: -Math.PI / 4 * 2,
			  emptyFill: '#262a34',
			  lineCap: 'round'
			});
		});
	}

	// ______________Cover Image
	$(".cover-image").each(function() {
		var attr = $(this).attr('data-image-src');
		if (typeof attr !== typeof undefined && attr !== false) {
			$(this).css('background', 'url(' + attr + ') center center');
		}
	});

	// ______________Active Class
	$(".app-sidebar a").each(function() {
		var pageUrl = window.location.href.split(/[?#]/)[0];
		if (this.href == pageUrl) {
			$(this).addClass("active");
			$(this).parent().addClass("active"); // add active to li of the current link
			$(this).parent().parent().prev().addClass("active"); // add active class to an anchor
			$(this).parent().parent().prev().click(); // click the item to make it drop
		}
	});

	// ______________ PAGE LOADING
	$(window).on("load", function(e) {
		$("#global-loader").fadeOut("slow");
	})

	// ______________ CountUp
	$('.counter').countUp();

	// ______________ BACK TO TOP BUTTON
	$(window).on("scroll", function(e) {
    	if ($(this).scrollTop() > 300) {
            $('#back-to-top').fadeIn('slow');
        } else {
            $('#back-to-top').fadeOut('slow');
        }
    });

    $("#back-to-top").on("click", function(e){
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

	// ______________ Start rating
	var ratingOptions = {
		selectors: {
			starsSelector: '.rating-stars',
			starSelector: '.rating-star',
			starActiveClass: 'is--active',
			starHoverClass: 'is--hover',
			starNoHoverClass: 'is--no-hover',
			targetFormElementSelector: '.rating-value'
		}
	};

	$(".vscroll").mCustomScrollbar();
	$(".app-sidebar").mCustomScrollbar();
	


	//Increment & Decrement
	var quantitiy=0;
	$('.quantity-right-plus').on('click', function(e){
		e.preventDefault();
		var quantity = parseInt($('.quantity').val());
		$('.quantity').val(quantity + 1);

	});
	$('.quantity-left-minus').on('click', function(e){
		e.preventDefault();
		var quantity = parseInt($('.quantity').val());
		if(quantity>0){
			$('.quantity').val(quantity - 1);
		}
	});

	//horizontal scrollbar
	$("#content-5").mCustomScrollbar({
		axis:"x",
		theme:"dark-thin",
		autoExpandScrollbar:true,
		advanced:{autoExpandHorizontalScroll:true}
	});

	//horizontalmenu
	$("a[data-theme]").on("click", function(e) {
		$("head link#theme").attr("href", $(this).data("theme"));
		$(this).toggleClass('active').siblings().removeClass('active');
	});
	$("a[data-effect]").on("click", function(e) {
		$("head link#effect").attr("href", $(this).data("effect"));
		$(this).toggleClass('active').siblings().removeClass('active');
	});

	//calender2
	$('#calendar').tuiCalendar;

	/*----GlobalSearch----*/
	$(document).on("click", "[data-toggle='search']", function(e) {
		var body = $("body");

		if(body.hasClass('search-gone')) {
			body.addClass('search-gone');
			body.removeClass('search-show');
		}else{
			body.removeClass('search-gone');
			body.addClass('search-show');
		}
	});
	var toggleSidebar = function() {
		var w = $(window);
		if(w.outerWidth() <= 1024) {
			$("body").addClass("sidebar-gone");
			$(document).off("click", "body").on("click", "body", function(e) {
				if($(e.target).hasClass('sidebar-show') || $(e.target).hasClass('search-show')) {
					$("body").removeClass("sidebar-show");
					$("body").addClass("sidebar-gone");
					$("body").removeClass("search-show");
				}
			});
		}else{
			$("body").removeClass("sidebar-gone");
		}
	}
	toggleSidebar();
	$(window).resize(toggleSidebar);

	$(document).ready(function(){
		$(".slide-toggle").click(function(){
            $(".right-sidebarbox").animate({
                width: "toggle"
            });
        });
	});
	

})(jQuery);

$(function(e) {
		  /** Constant div card */
	  const DIV_CARD = 'div.card';
	  /** Initialize tooltips */
	  $('[data-toggle="tooltip"]').tooltip();

	  /** Initialize popovers */
	  $('[data-toggle="popover"]').popover({
		html: true
	  });
			 /** Function for remove card */
	  $('[data-toggle="card-remove"]').on('click', function(e) {
		let $card = $(this).closest(DIV_CARD);

		$card.remove();

		e.preventDefault();
		return false;
	  });

	  /** Function for collapse card */
	  $('[data-toggle="card-collapse"]').on('click', function(e) {
		let $card = $(this).closest(DIV_CARD);

		$card.toggleClass('card-collapsed');

		e.preventDefault();
		return false;
	  });
	  $('[data-toggle="card-fullscreen"]').on('click', function(e) {
		let $card = $(this).closest(DIV_CARD);

		$card.toggleClass('card-fullscreen').removeClass('card-collapsed');

		e.preventDefault();
		return false;
	  });
  });



function showDialog2() {
	$("#mymodal").removeClass("fade").modal("hide");
	$("#mymodal2").modal("show").addClass("fade");
}

$("#mymodal").modal("show");

$("#dialog-ok").on("click", function() {
	showDialog2();
});

/*Aqui va el hidden y visible de los modal  */
$(".myFormNivelSub").hide(); //Lo primero que sucedera sera esto
$(".myFormSubModuloPUR").hide();
$(".myFormSubModuloCBP").hide();
$(".myFormSubModuloIM").hide();
$(".myFormSubModuloIV").hide();
$(".MMpeque").hide();
$(".SDpeque").hide();
$('.HCMpeque').hide();
document.getElementById('bt')

document.getElementById("myButtonMM").onclick=ShowHideElementMM;
function ShowHideElementMM(){
	$(".MMpeque").show();
	$(".SDpeque").hide();
$('.HCMpeque').hide();
}

document.getElementById("myButtonSD").onclick=ShowHideElementSD;
function ShowHideElementSD(){
	$(".SDpeque").show();
	$('.HCMpeque').hide();
	$(".MMpeque").hide();
}

document.getElementById("myButtonHCM").onclick=ShowHideElementHCM;
function ShowHideElementHCM(){
	$(".HCMpeque").show();
	$(".SDpeque").hide();
$('.MMpeque').hide();
}



document.getElementById("myButtonCbp").onclick=ShowHideElementCbp;
function ShowHideElementCbp(){
		
		$(".myFormNivelSub").show();
		$(".TxsubModulo").hide();
		$(".myFormSubModulo").hide();
		$(".myFormSubModuloCBP").show();
}


document.getElementById("myButtonPur").onclick=ShowHideElementPur;
function ShowHideElementPur(){
		$(".myFormNivelSub").show();
		$(".TxsubModulo").hide();
		$(".myFormSubModulo").hide();
		$(".myFormSubModuloPUR").show();
}


document.getElementById("myButtonIm").onclick=ShowHideElementIM;
function ShowHideElementIM(){
		$(".myFormNivelSub").show();
		$(".TxsubModulo").hide();
		$(".myFormSubModulo").hide();
		$(".myFormSubModuloIM").show();
}

document.getElementById("myButtonIv").onclick=ShowHideElementIv;
function ShowHideElementIv(){
		$(".myFormNivelSub").show();
		$(".TxsubModulo").hide();
		$(".myFormSubModulo").hide();
		$(".myFormSubModuloIV").show();
}



document.getElementById("myButton1").onclick=ShowHideElement1;
function ShowHideElement1(){
	
	$(".myFormNivelSub").hide();
	$(".TxsubModulo").show();
	$(".myFormSubModulo").show();
	$(".myFormSubModuloCBP").hide();
	$(".myFormSubModuloPUR").hide();
	$(".myFormSubModuloIM").hide();
	$(".myFormSubModuloIV").hide();
	$(".Obsersubmod").hide();
}

$(".Obsersubmod").hide();
document.getElementById("myButtonNin").onclick=ShowHideElement2;
function ShowHideElement2(){
	
	$(".Obsersubmod").show();

}

$(".Obsersubmod").hide();
document.getElementById("myButtonBas").onclick=ShowHideElementbas;
function ShowHideElementbas(){
	
	$(".Obsersubmod").show();

}

$(".Obsersubmod").hide();
document.getElementById("myButtonMed").onclick=ShowHideElementmed;
function ShowHideElementmed(){
	
	$(".Obsersubmod").show();

}

$(".Obsersubmod").hide();
document.getElementById("myButtonAvan").onclick=ShowHideElementavan;
function ShowHideElementavan(){
	
	$(".Obsersubmod").show();

}

$(".myFormFluAdn").show();
$("#myButtonAdnFlu").on("click",ShowHideElementComFluAdn);
function ShowHideElementComFluAdn(){
	$(".myFormFluAdn").show();
}



//Funcionamiento Carusel Slider de botones Modal 1
var slideIndex = 1;
showSlides();

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
} 

  //Funcionamiento Carusel Slider de botones Modal sub modulos
var slideIndex1 = 1;
showSlides1();

function plusSlides1(m) {
  showSlides1(slideIndex1 += m);
}

function currentSlide1(m) {
  showSlides1(slideIndex1 = m);
}

function showSlides1(m) {
  var o;
  var slides1 = document.getElementsByClassName("mySlides1");
  var dots1 = document.getElementsByClassName("dot1");
  if (m > slides1.length) {slideIndex1 = 1}    
  if (m < 1) {slideIndex1 = slides1.length}
  for (o = 0; o < slides1.length; o++) {
      slides1[o].style.display = "none";  
  }
  for (o = 0; o < dots1.length; o++) {
      dots1[o].className = dots1[o].className.replace(" active", "");
  }
  slides1[slideIndex1-1].style.display = "block";  
  dots1[slideIndex1-1].className += " active";} 


  
  //Funcionamiento Carusel Slider de botones Modal nivel sub modulos
var slideIndex2 = 1;
showSlides2();

function plusSlides2(m) {
  showSlides2(slideIndex2 += m);
}

function currentSlide2(m) {
  showSlides2(slideIndex2 = m);
}

function showSlides2(m) {
  var o;
  var slides2 = document.getElementsByClassName("mySlides2");
  var dots2 = document.getElementsByClassName("dot2");
  if (m > slides2.length) {slideIndex2 = 1}    
  if (m < 1) {slideIndex2 = slides2.length}
  for (o = 0; o < slides2.length; o++) {
      slides2[o].style.display = "none";  
  }
  for (o = 0; o < dots2.length; o++) {
      dots2[o].className = dots2[o].className.replace(" active", "");
  }
  slides2[slideIndex2-1].style.display = "block";  
  dots2[slideIndex2-1].className += " active";} 

    //Funcionamiento Carusel Slider de botones Modal Cards Finales
var slideIndex3 = 1;
showSlides3();

function plusSlides3(m) {
  showSlides3(slideIndex3 += m);
}

function currentSlide3(m) {
  showSlides3(slideIndex3 = m);
}

function showSlides3(m) {
  var o;
  var slides3 = document.getElementsByClassName("mySlides3");
  var dots3 = document.getElementsByClassName("dot3");
  if (m > slides3.length) {slideIndex3 = 1}    
  if (m < 1) {slideIndex3 = slides3.length}
  for (o = 0; o < slides3.length; o++) {
      slides3[o].style.display = "none";  
  }
  for (o = 0; o < dots3.length; o++) {
      dots3[o].className = dots3[o].className.replace(" active", "");
  }
  slides3[slideIndex3-1].style.display = "block";  
  dots3[slideIndex3-1].className += " active";} 

   


	function BrowserDetection() {

		if(navigator.userAgent.indexOf("Chrome") != -1 )
		{	
			$('#imgcont1').css('height', '460px');
			alert('Chrome');
			
		}
		else if(navigator.userAgent.indexOf("Safari") != -1)
		{
			alert('Safari');
		}
		else if(navigator.userAgent.indexOf("Firefox") != -1 ) 
		{
			 alert('Firefox');
		}
		else if((navigator.userAgent.indexOf("MSIE") != -1 )  (!!document.documentMode == true )) //IF IE > 10
		{
		  alert('IE'); 
		}
		else 
		{
		   alert('unknown');
		}
		//Busca si es Opera o no
		//else if (navigator.userAgent.search("Opera") >= 0) {
		//	alert("Browser is Opera");
		//	$('#btn1 ').css('padding', '35px 45px');
		//}
	}
	BrowserDetection();
	
		
		
	/*inicio de js pnotify */
	const Toast = {
		init() {
		  this.hideTimeout = null;
	  
		  this.el = document.createElement("div");
		  this.el.className = "toast";
		  document.body.appendChild(this.el);
		},
	  
		show(message, state) {
		  clearTimeout(this.hideTimeout);
			
		
		  this.el.textContent = message;
		  this.el.className = "toast toast--visible";
		 		
		  if (state) {

			this.el.classList.add(`toast--${state}`);
		  }
		  
		  this.hideTimeout = setTimeout(() => {
			this.el.classList.remove("toast--visible");
		  }, 3000);
		}
	  };
	  

	  document.addEventListener("DOMContentLoaded", () => Toast.init());
	  
function charcountupdate(str) {
		var lng = str.length;
		document.getElementById("charcount").innerHTML = lng + '/500';
	}

