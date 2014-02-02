$(document).ready(function(){
  $("#explore").on("click",function (){
    $('#programStart').ScrollTo();
});

  $('#container').isotope({
  // options
  itemSelector : '.item',
  layoutMode : 'fitRows'
});
});