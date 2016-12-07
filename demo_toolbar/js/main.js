requirejs.config({
    paths:{
        jquery:'jquery-1.11.1'
    }
});
requirejs(['jquery','backtop'],function($,backtop){
    new backtop.BackTop($('#backTop'),{
    //默认    mode:'move'
    });
});
