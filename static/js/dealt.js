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
    create_circle(1, 0.8)
    create_circle(2, 0.7)
    create_circle(3, 0.5)
    create_circle(4, 0.4)
    create_circle(5, 0.3)
    create_circle(6, 0.8)
    create_circle(7, 0.8)
    create_circle(8, 0.8)

    /**
     * tab
     */
    $('.tab-box .tab-btn').on('click', function () {
        $('.tab-box .tab-btn').removeClass('active')
        $(this).addClass('active')
        var index = $(this).data('index')
        getTableData(index)
    })
    /**
     * 删除
     */
    $('#delete-btn').on('click', function (e) {
        e.stopPropagation();
        $('#delete-tip-box').css('display', 'block')
    })
    // 确定删除
    $('#delete-tip-box').on('click', 'button.just-yes', function () {
        $('#delete-tip-box').css('display', 'none')
    })
    // 取消删除
    $('#delete-tip-box').on('click', 'button.just-no', function () {
        $('#delete-tip-box').css('display', 'none')
    })
    /**
     * 标记
     */
    $('#sign-btn').on('click', function (e) {
        e.stopPropagation();
        if ($('#sign-tip-box').css('display') === 'block') {
            $('#sign-tip-box').css('display', 'none')
        } else {
            $('#sign-tip-box').css('display', 'block')
        }
    })
    // 确定
    $('#sign-tip-box').on('click', 'ul li', function (e) {
        e.stopPropagation();
        if($(this).hasClass('active')) {
            $(this).removeClass('active')
        } else {
            $(this).addClass('active')
        }
    })

    /**
     * 待办事项
     */
    $('#matter-btn').on('click', function (e) {
        e.stopPropagation();
        if ($('#matter-tip-box').css('display') === 'block') {
            $('#matter-tip-box').css('display', 'none')
        } else {
            $('#matter-tip-box').css('display', 'block')
        }
    })
    // 确定
    $('#matter-tip-box').on('click', 'ul li', function (e) {
        e.stopPropagation();
        if($(this).hasClass('active')) {
            $(this).removeClass('active')
        } else {
            $(this).addClass('active')
        }
    })

    /**
     * 来源系统
     */
    $('#source-btn').on('click', function (e) {
        e.stopPropagation();
        if ($('#source-tip-box').css('display') === 'block') {
            $('#source-tip-box').css('display', 'none')
        } else {
            $('#source-tip-box').css('display', 'block')
        }
    })
    // 确定
    $('#source-tip-box').on('click', 'ul li', function (e) {
        e.stopPropagation();
        if($(this).hasClass('active')) {
            $(this).removeClass('active')
        } else {
            $(this).addClass('active')
        }
    })

    /**
     *  清除所有弹窗
     */
    $('body').click(function () {
        $('.tooltip-box').css('display', 'none')
    });


    /**
     * 复选框选中
     */
    $('table#table-box').on('click', 'button.select', function () {
        var tr = $(this).parent('td').parent('tr')
        var type = tr.find('button.laiyuan').data('type')
        if (tr.hasClass('select-tr')) {
            tr.removeClass('select-tr')
            $(this).html('<img src="./static/img/dealt/框.png" alt="框">')
            tr.find('button.laiyuan').removeClass(type)
        } else {
            tr.addClass('select-tr')
            $(this).html('<img src="./static/img/dealt/选中框.png" alt="选中框">')
            tr.find('button.laiyuan').addClass(type)
        }
        console.log('23')
    })

    /**
     * 分页
     */
    // xlPaging.js 使用方法
    $("#page").paging({
        nowPage: 1, // 当前页码
        pageNum: 30, // 总页码
        buttonNum: 6, //要展示的页码数量
        canJump: 1,// 是否能跳转。0=不显示（默认），1=显示
        showOne: 0,//只有一页时，是否显示。0=不显示,1=显示（默认）
        callback: function (num) { //回调函数
            console.log(num);
        }
    });


})


/**
 * 初始化环形进度条
 * @param num
 * @param val_num
 */
function create_circle(num, val_num) {
    $('#circle_step' + num).circleProgress({
        value: val_num,
        size: 60,
        startAngle: -1.57,
        reverse: false,
        lineCap: 'round',
        thickness: 7,
        fill: {
            gradient: ["#F04F37", "#FBA47F"]
        }
    }).on('circle-animation-progress', function (event, progress, stepValue) {
        $(this).find('strong').html(String((stepValue * 100).toFixed(2)) + '<i>%</i>');
    });
}

/**
 * 获取表格数据
 */
function getTableData(index) {
    if (index == 1) {
        $('table#table-box tbody').html('<tr>\n' +
            '                                    <td>\n' +
            '                                        <button class="select">\n' +
            '                                            <img src="./static/img/dealt/框.png" alt="框">\n' +
            '                                        </button>\n' +
            '                                    </td>\n' +
            '                                    <td>\n' +
            '                                        <img src="./static/img/dealt/置顶选中.png" alt="置顶选中">\n' +
            '                                        <img src="./static/img/dealt/星星.png" alt="星星">\n' +
            '                                        <span>金隅集团年度人才流动报告及新进员工正式发布公文待审批</span>\n' +
            '                                    </td>\n' +
            '                                    <td>陈晓东</td>\n' +
            '                                    <td>\n' +
            '                                        <button class="laiyuan yellow" data-type="yellow-active">OA办公系统</button>\n' +
            '                                    </td>\n' +
            '                                    <td class="time">2019-9-11</td>\n' +
            '                                </tr>\n' +
            '                                <tr>\n' +
            '                                    <td>\n' +
            '                                        <button class="select">\n' +
            '                                            <img src="./static/img/dealt/框.png" alt="框">\n' +
            '                                        </button>\n' +
            '                                    </td>\n' +
            '                                    <td>\n' +
            '                                        <img src="./static/img/dealt/星星.png" alt="星星">\n' +
            '                                        <span>金隅集团年度人才流动报告及新进员工正式发布公文待审批</span>\n' +
            '                                    </td>\n' +
            '                                    <td>陈晓东</td>\n' +
            '                                    <td>\n' +
            '                                        <button class="laiyuan yellow" data-type="yellow-active">OA办公系统</button>\n' +
            '                                    </td>\n' +
            '                                    <td class="time">2019-9-11</td>\n' +
            '                                </tr>\n' +
            '                                <tr class="select-tr">\n' +
            '                                    <td>\n' +
            '                                        <button class="select">\n' +
            '                                            <img src="./static/img/dealt/选中框.png" alt="选中框">\n' +
            '                                        </button>\n' +
            '                                    </td>\n' +
            '                                    <td>\n' +
            '                                        <img src="./static/img/dealt/星星.png" alt="星星">\n' +
            '                                        <span>金隅集团年度人才流动报告及新进员工正式发布公文待审批</span>\n' +
            '                                    </td>\n' +
            '                                    <td>陈晓东</td>\n' +
            '                                    <td>\n' +
            '                                        <button class="laiyuan yellow yellow-active" data-type="yellow-active">OA办公系统\n' +
            '                                        </button>\n' +
            '                                    </td>\n' +
            '                                    <td class="time">2019-9-11</td>\n' +
            '                                </tr>\n' +
            '                                <tr>\n' +
            '                                    <td>\n' +
            '                                        <button class="select">\n' +
            '                                            <img src="./static/img/dealt/框.png" alt="框">\n' +
            '                                        </button>\n' +
            '                                    </td>\n' +
            '                                    <td>\n' +
            '                                        <img src="./static/img/dealt/星星.png" alt="星星">\n' +
            '                                        <span>金隅集团年度人才流动报告及新进员工正式发布公文待审批</span>\n' +
            '                                    </td>\n' +
            '                                    <td>陈晓东</td>\n' +
            '                                    <td>\n' +
            '                                        <button class="laiyuan blue" data-type="blue-active">主数据系统</button>\n' +
            '                                    </td>\n' +
            '                                    <td class="time">2019-9-11</td>\n' +
            '                                </tr>\n' +
            '                                <tr>\n' +
            '                                    <td>\n' +
            '                                        <button class="select">\n' +
            '                                            <img src="./static/img/dealt/框.png" alt="框">\n' +
            '                                        </button>\n' +
            '                                    </td>\n' +
            '                                    <td>\n' +
            '                                        <span>金隅集团年度人才流动报告及新进员工正式发布公文待审批</span>\n' +
            '                                    </td>\n' +
            '                                    <td>陈晓东</td>\n' +
            '                                    <td>\n' +
            '                                        <button class="laiyuan green" data-type="green-active">HR系统</button>\n' +
            '                                    </td>\n' +
            '                                    <td class="time">2019-9-11</td>\n' +
            '                                </tr>')
    } else {
        $('table#table-box tbody').html('<tr>\n' +
            '                                    <td>\n' +
            '                                        <button class="select">\n' +
            '                                            <img src="./static/img/dealt/框.png" alt="框">\n' +
            '                                        </button>\n' +
            '                                    </td>\n' +
            '                                    <td>\n' +
            '                                        <span>金隅集团年度人才流动报告及新进员工正式发布公文待审批</span>\n' +
            '                                    </td>\n' +
            '                                    <td>陈晓东</td>\n' +
            '                                    <td>\n' +
            '                                        <button class="laiyuan green" data-type="green-active">HR系统</button>\n' +
            '                                    </td>\n' +
            '                                    <td class="time">2019-9-11</td>\n' +
            '                                </tr>\n' +
            '                                <tr>\n' +
            '                                    <td>\n' +
            '                                        <button class="select">\n' +
            '                                            <img src="./static/img/dealt/框.png" alt="框">\n' +
            '                                        </button>\n' +
            '                                    </td>\n' +
            '                                    <td>\n' +
            '                                        <span>金隅集团年度人才流动报告及新进员工正式发布公文待审批</span>\n' +
            '                                    </td>\n' +
            '                                    <td>陈晓东</td>\n' +
            '                                    <td>\n' +
            '                                        <button class="laiyuan green" data-type="green-active">HR系统</button>\n' +
            '                                    </td>\n' +
            '                                    <td class="time">2019-9-11</td>\n' +
            '                                </tr>\n' +
            '                                <tr>\n' +
            '                                    <td>\n' +
            '                                        <button class="select">\n' +
            '                                            <img src="./static/img/dealt/框.png" alt="框">\n' +
            '                                        </button>\n' +
            '                                    </td>\n' +
            '                                    <td>\n' +
            '                                        <span>金隅集团年度人才流动报告及新进员工正式发布公文待审批</span>\n' +
            '                                    </td>\n' +
            '                                    <td>陈晓东</td>\n' +
            '                                    <td>\n' +
            '                                        <button class="laiyuan green" data-type="green-active">HR系统</button>\n' +
            '                                    </td>\n' +
            '                                    <td class="time">2019-9-11</td>\n' +
            '                                </tr>\n' +
            '                                <tr>\n' +
            '                                    <td>\n' +
            '                                        <button class="select">\n' +
            '                                            <img src="./static/img/dealt/框.png" alt="框">\n' +
            '                                        </button>\n' +
            '                                    </td>\n' +
            '                                    <td>\n' +
            '                                        <span>金隅集团年度人才流动报告及新进员工正式发布公文待审批</span>\n' +
            '                                    </td>\n' +
            '                                    <td>陈晓东</td>\n' +
            '                                    <td>\n' +
            '                                        <button class="laiyuan green" data-type="green-active">HR系统</button>\n' +
            '                                    </td>\n' +
            '                                    <td class="time">2019-9-11</td>\n' +
            '                                </tr>\n' +
            '                                <tr>\n' +
            '                                    <td>\n' +
            '                                        <button class="select">\n' +
            '                                            <img src="./static/img/dealt/框.png" alt="框">\n' +
            '                                        </button>\n' +
            '                                    </td>\n' +
            '                                    <td>\n' +
            '                                        <span>金隅集团年度人才流动报告及新进员工正式发布公文待审批</span>\n' +
            '                                    </td>\n' +
            '                                    <td>陈晓东</td>\n' +
            '                                    <td>\n' +
            '                                        <button class="laiyuan green" data-type="green-active">HR系统</button>\n' +
            '                                    </td>\n' +
            '                                    <td class="time">2019-9-11</td>\n' +
            '                                </tr>')
    }
}
