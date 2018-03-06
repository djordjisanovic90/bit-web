$ (function(){

var div1 = $('<div></div>');
var div2 = $('<div></div>');
$('body').prepend(div1);
$('body').prepend(div2);
var img1 = $('<img>');
$(img1).attr('src','http://images.all-free-download.com/images/graphicthumb/beautiful_city_architectural_photography_5_165965.jpg');
$(div1).prepend(img1);
var img2 = $('<img>');
$(img2).attr('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2s0qWbjeY5f_KFHKcJ7cq4YV71-R7uzg8DZKoedqbLsDMyP7J');
$(div1).prepend(img2);
var img3 = $('<img>');
$(img3).attr('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-4-pTIhGd7N3UpRgeJODJHr74GlypINguvNjvxG1tJLO2cVj9');
$(div1).prepend(img3);

})