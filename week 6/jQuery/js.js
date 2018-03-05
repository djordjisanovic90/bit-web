
$(function(){
    $('ul').addClass("good");

    $('li:first').addClass("b");
    $('li').addClass('up');
    var n = ($('li').length - 1) / 2;
    $('li:eq(' + n + ')').addClass('middle');
    
})
