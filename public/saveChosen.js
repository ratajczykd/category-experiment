$(document).ready(function(){

  $('#next').on('click', function(){

    var grupa1 = [];
    var grupa2 = [];
    $('.grupa1').each(function(i, obj){
      $(obj).children().each(function(i2, obj2){
        grupa1.push($(obj2).attr('id'));
      });
    });
    $('.grupa2').each(function(i, obj){
      $(obj).children().each(function(i2, obj2){
        grupa2.push($(obj2).attr('id'));
      });
    });

    $.ajax({
      type: 'POST',
      url: '/exp1/data',
      dataType: 'json',
      traditional: true,
      data: { 'grupa1':grupa1, 'grupa2':grupa2 },
      success: function(){

        location.reload();
      }
    });

    return false;
  });
});
