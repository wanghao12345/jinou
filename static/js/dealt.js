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






})