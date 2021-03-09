$(document).ready(function(){
    $(".hot_event_top_ul>li").on("mouseover",function(){
        //标题
        $(this).addClass("hot_event_top_ul_li_x");
        $(this).siblings("li").removeClass("hot_event_top_ul_li_x");
        //内容
        var n = $(this).index();
        var title = $(this).parent().parent();
        var hot_event_body = title.next(".hot_event_body");
        var  word = hot_event_body.children(".hot_event_body_ul");
        var  nrN  = word.eq(n);
        nrN.show();
        nrN.siblings(".hot_event_body_ul").hide();
    });
});