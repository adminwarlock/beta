requirejs.config({
    paths:{
        jquery:'jquery-1.11.1'
    }
});
requirejs(['jquery','backtop'],function($,backtop){
    new backtop.BackTop($('#backTop'),{
        mode:'move'
    });
    // var scroll=new scrollto.ScrollTo({
    //     //自定义效果
    //     // dest:0,
    //     // speed:800
    // });
    //
    // $('#backTop').on('click',$.proxy(scroll.move,scroll));
    // $(window).on('scroll',function(){
    //     checkPosition($(window).height());
    // });
    // checkPosition($(window).height());
    //分割线
    // function move(){
    //     $('html,body').animate({
    //         scrollTop:0
    //     },800);
    // };
    //分割线
    // function checkPosition(pos){
    //     if($(window).scrollTop()>pos){
    //         $('#backTop').fadeIn();
    //     }else{
    //         $('#backTop').fadeOut();
    //     };
    // }

});
