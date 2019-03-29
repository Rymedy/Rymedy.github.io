$(document).ready(function() {
    resize_play();
});
$(window).resize(function() {
    resize_play();
});
function resize_play() {
    var win = $(window);
    if (win.width() < 992)
    {
        return;
    }
    else if (win.width() < 1692)
    {
        $(".box-game-left").width(150);
    }
    else if(win.width() > 1692)
    {
        $(".box-game-left").width(280);
    }
    var base_width = $(".box-game-play").attr("data-width");
    var base_height = $(".box-game-play").attr("data-height");
    var p = base_width / base_height;
    var f = {
        windowWidth: win.width(),
        windowHeight: win.height(),
        gameWidth: base_width,
        gameHeight: base_height,
        percent: p
    };
    var result = resize_by_width(f);
     if (win.width() < 1692)
    {
        $(".box-game-left").height(result.height +30 );
        $(".box-game-list").height(result.height -20 );
        $(".box-game-info").css('margin-left','170px');
        $(function(){
            $('.box-game-list').slimScroll({
                height: result.height ,
            });
        });
    }
    else if(win.width() > 1692)
    {
        $(".box-game-left").height(result.height +25);
        $(".box-game-list").height(result.height);
        $(".box-game-info").css('margin-left','300px');
        $(function(){
            $('.box-game-list').slimScroll({
                height: result.height 
            });
        });
    }
    $(".box-game-center").width(result.width -10);
    $(".box-game-center").height(result.height);
    $(".box-game-play").width(result.width- 10);
    $(".box-game-play").height(result.height );
    $(".box-game-info").width(result.width- 40);
	
	$(".box-game-cate").width(result.width -10);

    
}
function resize_by_width(w) {
    var a = w.windowWidth - $(".box-game-left").width() - $(".box-game-right").width() - 80;
    var b = a / w.percent;
    if (b > w.windowHeight - 56) {
        return resize_by_height(w)
    } else {
        return {
            width: a,
            height: b
        }
    }
}
function resize_by_height(w) {
    var b = w.windowHeight - 66;
    var a = b * w.percent;
    return {
        width: a,
        height: b
    }
}