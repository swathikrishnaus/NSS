$(document).scroll(function () {
    var scroll = $(this).scrollTop();
    if (scroll > 50)
        $(".navbar").addClass("nav-shadow")
    else
        $(".navbar").removeClass("nav-shadow")
})


// ----------navlink active---------------
function changeNav(cls){
    $("." + cls).addClass("active");
  }
  // ----------navlink active---------------
