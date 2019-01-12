
$(window).scroll(function(){
    $(".navbar").css("opacity", 1 - $(window).scrollTop() / 250);
  });
