$(".mole1").click(function(){
    $(".mole1").hide();
});
    
$(".whack2").click(function(){
    $(".mole-two").hide();
});
    
$(".whack3").click(function(){
  $(".third-mole").hide();
  $(".mole-two").hide();
  $(".mole1").hide();
});
    
$(".reset").click(function(){
    $("img").show();
});
$(".eyard").click(function(){
    $(".game").hide();
});