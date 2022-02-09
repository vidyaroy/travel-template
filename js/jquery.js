$(document).ready(function(){
  $(".message-box").click(function(){
    $(this).hide();
  });
})

$(document).ready(function(){
  alert(1);
});

function responsive(maxWidth) {
  if (maxWidth.matches) {
    $(document).ready(function(){
      $(".cross").hide();
      $(".menu").hide();
      $(".hamburger").click(function(){
        $(".menu").slideToggle("slow");
        $(".hamburger").hide();
        $(".cross").show();
      })
      $(".cross").click(function(){
        $(".menu").slideToggle("slow");
        $(".hamburger").show();
        $(".cross").hide();
      })
    })
  }
}

var maxWidth = window.matchMedia("(Max-width: 820px)");
responsive(maxWidth);