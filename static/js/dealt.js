$(function () {
    /**
     * 头部banner
     */
    // 左移
    $('#prev-btn').on('click', function () {
        var marginLeft = parseInt($('ul#banner-list-box').css('margin-left').split('p')[0]) - 240;
        var dayNum = $('ul#banner-list-box li').length
        var maxLeft = (dayNum * 240 - 1200) * -1;
        if (marginLeft < maxLeft) {
            marginLeft = maxLeft
        }
        $('ul#banner-list-box').css('margin-left', marginLeft + 'px')
    })
    // 右移
    $('#next-btn').on('click', function () {
        var marginLeft = parseInt($('ul#banner-list-box').css('margin-left').split('p')[0]) + 240;
        if (marginLeft > 0) {
            marginLeft = 0
        }
        $('ul#banner-list-box').css('margin-left', marginLeft + 'px')
    })

    /**
     * 圆形滚动条
     */
    create_circle(1,0.8)
    create_circle(2,0.7)
    create_circle(3,0.5)
    create_circle(4,0.4)
    create_circle(5,0.3)
    create_circle(6,0.8)
    create_circle(7,0.8)
    create_circle(8,0.8)





})


//初始化环形进度条
function create_circle(num, val_num){
    $('#circle_step' + num).circleProgress({
        value: val_num,
        size: 60,
        startAngle:-1.57,
        reverse:false,
        lineCap:'round',
        thickness:7,
        fill: {
            gradient: ["#F04F37","#FBA47F"]
        }
    }).on('circle-animation-progress', function(event, progress,stepValue) {
        $(this).find('strong').html(String((stepValue*100).toFixed(2)) + '<i>%</i>');
    });
}
