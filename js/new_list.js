 $(document).ready(function(){
    $(".list_top_list>li").on("mouseover",function(){
        //标题
        $(this).addClass("on");
        $(this).siblings("li").removeClass("on");
        //内容
        var n = $(this).index();
        var title = $(this).parent().parent();
        var list_body = title.next(".list_body");
        var  word = list_body.children(".list_body_word");
        var  nrN  = word.eq(n);
        nrN.show();
        nrN.siblings(".list_body_word").hide();
    });
});