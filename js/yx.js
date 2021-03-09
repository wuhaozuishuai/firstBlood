$(document).ready(function(){
    $(".xia_top_ul>li").on("mouseover",function(){
        //标题
        $(this).addClass("xia_x");
        $(this).siblings("li").removeClass("xia_x");
        //内容
        var n = $(this).index();
        var title = $(this).parent().parent();
        var xia_body = title.next(".xia_body");
        var  word = xia_body.children(".xia_body_ul");
        var  nrN  = word.eq(n);
        nrN.show();
        nrN.siblings(".xia_body_ul").hide();
    });
});