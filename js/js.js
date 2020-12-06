$(function () {
    let c = 0;
    $(".set").toggle();
    $(".logotype").click(function() {
        if (c%2==0) {
            $(this).css("background-color","blue");
            
        }
        else {
            $(this).css("background-color", "white");
        }
        c++;
        console.log(c);
    })

    $(".book").click(function(){
        $(".set").toggle(2000);
    });

    $(".phonenum").mouseenter(function(){
        $(".phonenum").css('border-bottom','2px dashed #fea100');
    });
    $(".phonenum").mouseleave(function(){
        $(".phonenum").css('border-bottom','0px dashed red');
    });
});

