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
    drawRing()





})

/**
 * 圆形滚动条
 * @param path
 * @param progress
 * @param r
 */
function drawRing() {
    var path = document.getElementById('ring');
    var r=30;
    var progress=50;

    //将path平移到我们需要的坐标位置
    ring.setAttribute('transform', 'translate('+r+','+r+')');

    // 计算当前的进度对应的角度值
    var degrees = progress * (360/100);

    // 计算当前角度对应的弧度值
    var rad = degrees* (Math.PI / 180);

    //极坐标转换成直角坐标
    var x = (Math.sin(rad) * r).toFixed(2);
    var y = -(Math.cos(rad) * r).toFixed(2);

    //大于180度时候画大角度弧，小于180度的画小角度弧，(deg > 180) ? 1 : 0
    var lenghty = window.Number(degrees > 180);

    //path 属性
    var descriptions = ['M', 0, 0, 'v', -r, 'A', r, r, 0, lenghty, 1, x, y, 'z'];

    // 给path 设置属性
    path.setAttribute('d', descriptions.join(' '));
}