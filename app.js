$(document).ready(() => {
  let color = 'white'

  const allboxes = $('.box')
  .click(function(){
  $(this).addClass(color);
  })
  .dblclick(function(){
    $(this).removeClass();
  });
  $('#reset').click(function(){
    allboxes.removeClass();

  });
  $('a').click(function(){
    color = $(this).attr('id');
  });

});
