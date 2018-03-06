$(function () {

    var arr = ["http://via.placeholder.com/300.png/09f/fff", "https://getuikit.com/v2/docs/images/placeholder_600x400_2.svg"]
    for (i = 0; i < arr.length; i++) {
        var img = $('<img>');
        img.attr('src',arr[i]);
        $('body').append(img);
    }


    //var div1 = $('<div>');
    $('img:first').before('<h1>Gallery</h1>');

    for(i=0; i<arr.length; i++){

    }
    //$(img).before('<div>');
})