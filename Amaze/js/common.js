$(document).ready(function() {
    $(".bluish_color").click(function(){
	   $(".color_a1").fadeIn(1000);
	   $(".color_a").fadeOut(1000);
	   $(".color_b").fadeOut(1000);
	   $(".color_c").fadeOut(1000);
	   $(".color_d").fadeOut(1000);
	   $(".color_e").fadeOut(1000);
	   $(".color_f").fadeOut(1000);
   });
    
   $(".golden_color").click(function(){
	   $(".color_a1").fadeOut(1000);
	   $(".color_a").fadeIn(1000);
	   $(".color_b").fadeOut(1000);
	   $(".color_c").fadeOut(1000);
	   $(".color_d").fadeOut(1000);
	   $(".color_e").fadeOut(1000);
	   $(".color_f").fadeOut(1000);
   });
    
   $(".red_color").click(function(){
	   $(".color_a1").fadeOut(1000);
	   $(".color_a").fadeOut(1000);
	   $(".color_b").fadeIn(1000);
	   $(".color_c").fadeOut(1000);
	   $(".color_d").fadeOut(1000);
       $(".color_e").fadeOut(1000);
	   $(".color_f").fadeOut(1000);
   });
    
   $(".silver_color").click(function(){
	   $(".color_a1").fadeOut(1000);
	   $(".color_a").fadeOut(1000);
	   $(".color_b").fadeOut(1000);
	   $(".color_c").fadeIn(1000);
	   $(".color_d").fadeOut(1000);
	   $(".color_e").fadeOut(1000);
	   $(".color_f").fadeOut(1000);
   });
    
   $(".urban_color").click(function(){
	   $(".color_a1").fadeIn(1000);
	   $(".color_a").fadeOut(1000);
	   $(".color_b").fadeOut(1000);
	   $(".color_c").fadeOut(1000);
	   $(".color_d").fadeIn(1000);
       $(".color_e").fadeOut(1000);
	   $(".color_f").fadeOut(1000);
   });
    
   $(".orchid_color").click(function(){
	   $(".color_a1").fadeIn(1000);
	   $(".color_a").fadeOut(1000);
	   $(".color_b").fadeOut(1000);
	   $(".color_c").fadeOut(1000);
	   $(".color_d").fadeOut(1000);
       $(".color_e").fadeIn(1000);
	   $(".color_f").fadeOut(1000);
   });
    
$(".taffeta_color").click(function(){
	   $(".color_a1").fadeOut(1000);
	   $(".color_a").fadeOut(1000);
	   $(".color_b").fadeOut(1000);
	   $(".color_c").fadeOut(1000);
	   $(".color_d").fadeOut(1000);
       $(".color_e").fadeOut(1000);
	   $(".color_f").fadeIn(1000);
   });
   
   $("#dragInterior").click(function(){
	   $('#inte-pop').fadeIn(100);
	   var wdth = $('.interior_popup').innerWidth();
	   var hgt = $('.interior_popup').innerHeight();
	   $('.interior_popup iframe').attr('src', 'Honda-Amaze-Interior-360.html?width='+wdth+'&height='+hgt);
	   //$('.interior_popup iframe').attr('width', 1100);
	   //$('.interior_popup iframe').attr('height', 500);
   });
    $("#close_interior_popup").click(function(){
	   //$(".interior_popup").css('z-index', -5).css('opacity', 0);
	   $(".com-popup").fadeOut(500);
   });
    $(".360_btn").click(function(){
		var wdth=$(window).width();
		var hgt = 500;
	  	if(wdth < 850 && wdth > 620){
			hgt = 370;
		} else if (wdth <= 620) {
			hgt = 190;
		}
		$("#exte-pop").fadeIn(100);
		$('.exterior_popup iframe').attr('src', 'Honda-Amaze-360.html?wdth='+wdth);
		$('.exterior_popup iframe').attr('height', hgt);
	    $(".exterior_popup").fadeIn(500);
   });
   $("#close_exterior_popup").click(function(){
	   $(".com-popup").fadeOut(500);
   });
   $(".stayUpdate").click(function(){
	   $(".formPopup1").slideToggle();
   });
   
//   SET WINDOW HEIGHT
    var windowHeight = $(window).height();
	var windowWidth = $(window).width();
	var wheight = parseInt((windowHeight * 65)/100);
	$(".interior_popup").css({'height':wheight,'margin-top':-wheight/2});
	
    $('section').css('height',windowHeight);
	$('#tagboard-area').css('height',windowHeight-100);
	
	


  $(".close_acc").click(function(){
       $(".access_popup_area").fadeOut(500);
	   $(".acc_popup_A").fadeOut(500);
	   $(".acc_popup_B").fadeOut(500);
	   $(".acc_popup_C").fadeOut(500);
   });
   $("#accImg1").click(function(){
       $(".access_popup_area").fadeIn(500);
	   $(".acc_popup_A").fadeIn(500);
	   $(".acc_popup_B").fadeOut(500);
	   $(".acc_popup_C").fadeOut(500);
   });
   $("#accImg2").click(function(){
	   $(".access_popup_area").fadeIn(500);
	   $(".acc_popup_A").fadeOut(500);
	   $(".acc_popup_B").fadeIn(500);
	   $(".acc_popup_C").fadeOut(500);
   });
   $("#accImg3").click(function(){
	    $(".access_popup_area").fadeIn(500);
	   $(".acc_popup_A").fadeOut(500);
	   $(".acc_popup_B").fadeOut(500);
	   $(".acc_popup_C").fadeIn(500);
   });
   
   
   
    $(".ex_close").click(function(){
	    $(".exterior_popup_area").fadeOut(500);
   });
    $(".e1").click(function(){
	    $(".exterior_popup_area").fadeIn(500);
	   $("#ex_img1").fadeIn(500);
  	   $("#ex_img2").fadeOut(500);
	   $("#ex_img3").fadeOut(500);
	   $("#ex_img4").fadeOut(500);
	   $("#ex_img5").fadeOut(500);
	   $("#ex_img6").fadeOut(500);
	   $("#ex_img7").fadeOut(500);
   });
    $(".e2").click(function(){
	    $(".exterior_popup_area").fadeIn(500);
	   $("#ex_img1").fadeOut(500);
  	   $("#ex_img2").fadeIn(500);
	   $("#ex_img3").fadeOut(500);
	   $("#ex_img4").fadeOut(500);
	   $("#ex_img5").fadeOut(500);
	   $("#ex_img6").fadeOut(500);
	   $("#ex_img7").fadeOut(500);
   });
    $(".e3").click(function(){
	    $(".exterior_popup_area").fadeIn(500);
	   $("#ex_img1").fadeOut(500);
  	   $("#ex_img2").fadeOut(500);
	   $("#ex_img3").fadeIn(500);
	   $("#ex_img4").fadeOut(500);
	   $("#ex_img5").fadeOut(500);
	   $("#ex_img6").fadeOut(500);
	   $("#ex_img7").fadeOut(500);
   });
    $(".e4").click(function(){
	    $(".exterior_popup_area").fadeIn(500);
	   $("#ex_img1").fadeOut(500);
  	   $("#ex_img2").fadeOut(500);
	   $("#ex_img3").fadeOut(500);
	   $("#ex_img4").fadeIn(500);
	   $("#ex_img5").fadeOut(500);
	   $("#ex_img6").fadeOut(500);
	   $("#ex_img7").fadeOut(500);
   });
    $(".e5").click(function(){
	    $(".exterior_popup_area").fadeIn(500);
	   $("#ex_img1").fadeOut(500);
  	   $("#ex_img2").fadeOut(500);
	   $("#ex_img3").fadeOut(500);
	   $("#ex_img4").fadeOut(500);
	   $("#ex_img5").fadeIn(500);
	   $("#ex_img6").fadeOut(500);
	   $("#ex_img7").fadeOut(500);
   });
    $(".e6").click(function(){
	    $(".exterior_popup_area").fadeIn(500);
	   $("#ex_img1").fadeOut(500);
  	   $("#ex_img2").fadeOut(500);
	   $("#ex_img3").fadeOut(500);
	   $("#ex_img4").fadeOut(500);
	   $("#ex_img5").fadeOut(500);
	   $("#ex_img6").fadeIn(500);
	   $("#ex_img7").fadeOut(500);
   });
    $(".e7").click(function(){
	    $(".exterior_popup_area").fadeIn(500);
	   $("#ex_img1").fadeOut(500);
  	   $("#ex_img2").fadeOut(500);
	   $("#ex_img3").fadeOut(500);
	   $("#ex_img4").fadeOut(500);
	   $("#ex_img5").fadeOut(500);
	   $("#ex_img6").fadeOut(500);
	   $("#ex_img7").fadeIn(500);
   });
   
   
});



/*PALLEX EFFECT*/
$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#navigation a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
		
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#navigation ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}