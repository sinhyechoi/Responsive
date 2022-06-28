$('.allBtn').click(function(){
    $('nav').animate({left:0})
});

$('nav button').click(function(){
    $('nav').animate({left:'-100%'})
});


$(window).resize(function(){
    if($('nav').removeAttr('style'));
});
//nav에 스크립트가 적용 된게 있으면 화면이 resize될때 없애준다
