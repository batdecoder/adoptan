$(function () {
  $(".nr-bottom>li>a").mouseenter(function () {
    $(this).css("color", "#fec13e");
  });
  $(".nr-bottom>li>a").mouseleave(function () {
    $(this).css("color", "#ffffff");
  });
  $("#who1").mouseenter(function () {
    $(".who").show();
  });
  $("#who1").mouseleave(function () {
    $(".who").hide();
  });

  $("#server1").mouseenter(function () {
    $(".server").show();
  });
  $("#server1").mouseleave(function () {
    $(".server").hide();
  });

  $(".nr-bottom ul li>a").mouseenter(function () {
    console.log(this);
    $(this).addClass("active").siblings().removeClass("active");
  });
  $(".nr-bottom ul li>a").mouseleave(function () {
    console.log(this);
    $(this).removeClass("active");
  });
});
