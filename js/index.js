function refresh(){
    var t = 1000; // rafraîchissement en millisecondes
    setTimeout('showDate()',t)
}

function showDate() {
    var date = new Date()
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    if( h < 10 ){ h = '0' + h; }
    if( m < 10 ){ m = '0' + m; }
    if( s < 10 ){ s = '0' + s; }
    var time = h + ':' + m + ':' + s
    document.getElementById('horloge').innerHTML = time;
    refresh();
 }



$('document').ready(function(){
    $(' ul #list').hide();

 $('.men1').mouseenter(function(){

    $(' ul #list').show().css({'list-style':'none',
    'background':'white','color':'black'});

});
$('.men1').mouseleave(function(){

$('ul #list').hide();
});

$(' ul #list1').hide();

$('.men2').mouseenter(function(){

   $(' ul #list1').show().css({'list-style':'none',
   'background':'white','color':'black'});

});
$('.men2').mouseleave(function(){

$('ul #list1').hide();
});

})