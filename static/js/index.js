/**
 * Created by wanghao on 2019/9/4
 */
var dayNum = 30
$(function () {

  /**
   * 菜单切换
   */
  $('.menu-item-box').on('click', function () {
    $('.menu-item-box').removeClass('active-menu-item-box')
    $(this).addClass('active-menu-item-box')
  });

  /**
   * 查看系统更多
   */
  $('#search-more-sys-btn').on('click', function () {
    $('.nav-sys-content-box').html('<div class="nav-item">\n' +
      '                        <a href="/">\n' +
      '                            <img src="./static/img/icon-oa系统.png" alt="oa系统">\n' +
      '                            <span>更多系统</span>\n' +
      '                        </a>\n' +
      '                    </div>')
  });
  /**
   * 右上下拉选择
   */
 /* $('.top-dropdown-menu-box li').on('mouseover', function () {
    $('.top-dropdown-menu-box li').removeClass('active')
    if ($(this).data('index') === 1) {
      $('.top-dropdown-menu-box').addClass('dropdown-after-red')
    } else {
      $('.top-dropdown-menu-box').removeClass('dropdown-after-red')
    }
    $(this).addClass('active')
  });*/
  /**
   * 新闻banner
   */
  new $.Tab({
    target: $('#news_banner_img li'),
    // effect: 'slide3d',
    animateTime: 1000,
    stay: 3500,
    autoPlay: true,
    merge: true,
    prevBtn: $('#js_banner_pre'),
    nextBtn: $('#js_banner_next'),
    onchange: function (res) {
      // 设置轮播图标题
      var text = $($('#banner-list-text p')[res]).find('span.title').text()
      $('#banner-title-text').text(text)
      // 把轮播图对应的标题变红
      $('#banner-list-text p a').removeClass('active')
      $($('#banner-list-text p')[res]).find('a').addClass('active')
    }
  });
  /**
   * 通知公告部分
   */
  $('#comp-public-max-title h2').on('click', function () {
    $('#comp-public-max-title h2').removeClass('active')
    $(this).addClass('active')
  })
  $('#comp-public-min-title h2').on('click', function () {
    $('#comp-public-min-title h2').removeClass('active')
    $(this).addClass('active')
  })

  /**
   * 设置常用功能
   */
  // 打开
  $('span#common-setting').on('click', function () {
    $('#common-setting-dialog').css('display', 'block')
  });

  // 关闭
  $('#common-setting-dialog').on('click', '.close-btn', function () {
    $('#common-setting-dialog').css('display', 'none')
  });
  // 确定
  $('#common-setting-dialog').on('click', '.query-btn', function () {
    $('#common-func-list').html('');
    $('#my-common-setting li').each(function (index, item) {
      var text = $(item).find('span.text').text()
      $('#common-func-list').append('<span>'+ text +'</span>')
    })
    $('#common-setting-dialog').css('display', 'none')
  });
  // 添加到我的常用功能
  $('#common-setting-list').on('click', 'span.add-icon', function () {
    var li = $(this).parents('li')
    var text = li.find('span.text').text()
    $('#my-common-setting').append('<li>\n' +
      '                            <span class="text">'+ text +'</span>\n' +
      '                            <span class="icon remove-icon">\n' +
      '                                <img src="./static/img/remove-icon.png" alt="减少">\n' +
      '                            </span>\n' +
      '                        </li>')
    li.remove()
  });

  // 减少我的常用功能
  $('#my-common-setting').on('click', 'span.remove-icon', function () {
    var li = $(this).parents('li')
    var text = li.find('span.text').text()
    $('#common-setting-list').append('<li>\n' +
      '                            <span class="text">'+ text +'</span>\n' +
      '                            <span class="icon add-icon">+</span>\n' +
      '                        </li>')
    li.remove()
  });
  /**
   * 设置常用链接
   */
  // 打开
  $('span#common-link').on('click', function () {
    $('#common-link-dialog').css('display', 'block')
  })

  // 关闭
  $('#common-link-dialog').on('click', '.close-btn', function () {
    $('#common-link-dialog').css('display', 'none')
  })
  // 确定
  $('#common-link-dialog').on('click', '.query-btn', function () {
    $('#common-outer-link').html('');
    $('#my-common-link li').each(function (index, item) {
      var text = $(item).find('span.text').text()
      var link = $(item).data('link')
      $('#common-outer-link').append('<span><a href="'+ link +'" target="_blank">'+ text +'</a></span>')
    })
    $('#common-link-dialog').css('display', 'none')
  })

  // 添加到我的常用链接
  $('#common-link-list').on('click', 'span.add-icon', function () {
    var li = $(this).parents('li')
    var text = li.find('span.text').text()
    var link = li.data('link')
    $('#my-common-link').append('<li data-link="'+ link +'">\n' +
      '                            <span class="text">'+ text +'</span>\n' +
      '                            <span class="icon remove-icon">\n' +
      '                                <img src="./static/img/remove-icon.png" alt="减少">\n' +
      '                            </span>\n' +
      '                        </li>')
    li.remove()
  });

  // 减少我的常用链接
  $('#my-common-link').on('click', 'span.remove-icon', function () {
    var li = $(this).parents('li')
    var text = li.find('span.text').text()
    $('#common-link-list').append('<li>\n' +
      '                            <span class="text">'+ text +'</span>\n' +
      '                            <span class="icon add-icon">+</span>\n' +
      '                        </li>')
    li.remove()
  });

  // 添加自定义链接
  $('#add-link-box').on('click', 'button.add-btn', function () {
    var name = $('#add-link-box input.link-name').val()
    var value = $('#add-link-box input.link-value').val()
    $('#common-link-list').append('<li data-link="'+ value +'">\n' +
      '                            <span class="text">'+ name +'</span>\n' +
      '                            <span class="icon add-icon">+</span>\n' +
      '                        </li>')
  })


  /**
   * 选择年月
   */
  laydate.render({
    elem: '#selectYear', //指定元素
    type: 'month',
    format: 'yyyy年MM月',
    value: new Date().getFullYear() + '年' + ((new Date().getMonth() + 1) < 10 ? '0' + (new Date().getMonth() + 1) : (new Date().getMonth() + 1)) + '月',
    done: function(value, date){
      getMonthData(date.year, date.month)
    }
  });
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  getMonthData(year, month)
  // 左边移动
  $('#date-prev-btn').on('click', function () {
    var marginLeft = parseInt($('ul#date-banner-list').css('margin-left').split('p')[0]) - 70;
    var maxLeft = (dayNum * 70 - 350) * -1;
    if (marginLeft < maxLeft) {
      marginLeft = maxLeft
    }
    var nthChild = (marginLeft / 70) * (-1)
    $('ul#date-banner-list li').removeClass('active')
    $('ul#date-banner-list li.date-item-'+ (nthChild + 3) +'').addClass('active')
    $('ul#date-banner-list').css('margin-left', marginLeft + 'px')

    var selectYear = $('ul#date-banner-list li.date-item-'+ (nthChild + 3) +'').data('year')
    var selectMonth = $('ul#date-banner-list li.date-item-'+ (nthChild + 3) +'').data('month')
    var selectDay = $('ul#date-banner-list li.date-item-'+ (nthChild + 3) +'').data('day')

    changeDateListContent(selectYear, selectMonth, selectDay)

  });
  // 右边移动
  $('#date-next-btn').on('click', function () {
    var marginLeft = parseInt($('ul#date-banner-list').css('margin-left').split('p')[0]) + 70;
    if (marginLeft > 0) {
      marginLeft = 0
    }
    var nthChild = (marginLeft / 70) * (-1)
    $('ul#date-banner-list li').removeClass('active')
    $('ul#date-banner-list li.date-item-'+ (nthChild + 3) +'').addClass('active')
    $('ul#date-banner-list').css('margin-left', marginLeft + 'px')

    var selectYear = $('ul#date-banner-list li.date-item-'+ (nthChild + 3) +'').data('year')
    var selectMonth = $('ul#date-banner-list li.date-item-'+ (nthChild + 3) +'').data('month')
    var selectDay = $('ul#date-banner-list li.date-item-'+ (nthChild + 3) +'').data('day')

    changeDateListContent(selectYear, selectMonth, selectDay)
  });
  // 选中
  $('ul#date-banner-list').on('click', 'li', function () {
    $('ul#date-banner-list li').removeClass('active')
    $(this).addClass('active')

    var selectYear = $(this).data('year')
    var selectMonth = $(this).data('month')
    var selectDay = $(this).data('day')

    changeDateListContent(selectYear, selectMonth, selectDay)
  });

})


/**
 * 获取日历数据
 */
function getMonthData(year, month) {
  dayNum = getMonthDays(year, month);
  $('ul#date-banner-list').html('');
  $('ul#date-banner-list').css('margin-left', '0px')
  $('ul#date-banner-list').css('width', dayNum * 70 + 'px');
  for (var i = 0; i < dayNum; i++) {
    var li = '<li data-year="'+ year +'" data-month="'+ month +'" data-day="'+ (i + 1) +'" class="'+ (i === 2 ? "active" : "") +' date-item-'+ (i + 1) +'">\n' +
            '<div class="week">'+getWeek(year, month, i + 1)+'</div>\n' +
            '<div class="day">'+ (i + 1) +'</div>\n' +
            '<div class="month">'+changeMonthName(month)+'</div>\n' +
            '</li>';
    $('ul#date-banner-list').append(li)
  }
}

/**
 * 根据两个月份同一天的差值获取,同样是传入需要获取的对应年份和月份
 * @param year
 * @param month
 * @returns {number}
 */
function getMonthDays(year,month){
  var stratDate = new Date(year,month-1,1),
    endData = new Date(year,month,1);
  var days = (endData -stratDate)/(1000*60*60*24);
  return days;
}

/**
 * 获取某一天是周几
 * @param y
 * @param m
 * @param d
 * @returns {string}
 */
function getWeek(y,m,d){
  var myDate=new Date();
  myDate.setFullYear(y,m-1,d);
  var week = myDate.getDay()
  switch(week){
    case 0:
      return '星期日';
    case 1:
      return '星期一';
    case 2:
      return '星期二';
    case 3:
      return '星期三';
    case 4:
      return '星期四';
    case 5:
      return '星期五';
    case 6:
      return '星期六';
  }
}

/**
 * 转换月份名称
 * @param month
 * @returns {string}
 */
function changeMonthName(month) {
  switch (month) {
    case 1:
      return '一月';
      break;
    case 2:
      return '二月';
      break;
    case 3:
      return '三月';
      break;
    case 4:
      return '四月';
      break;
    case 5:
      return '五月';
      break;
    case 6:
      return '六月';
      break;
    case 7:
      return '七月';
      break;
    case 8:
      return '八月';
      break;
    case 9:
      return '九月';
      break;
    case 10:
      return '十月';
      break;
    case 11:
      return '十一月';
      break;
    case 12:
      return '十二月';
      break;
  }
}

/**
 * 改变日历记录内容
 */
function changeDateListContent(year, month, day) {
  $('#date-list-content-box').html(' <p class="first">\n' +
    '    <span class="left">研发部门会议</span>\n' +
    '    <span class="right">30分钟后开始，星期一 '+day+'.'+month+'.'+year+'</span>\n' +
    '</p>\n' +
    '<p class="second">\n' +
    '    <span class="left">人力资源部门周会</span>\n' +
    '    <span class="right">30分钟后开始，星期一 '+day+'.'+month+'.'+year+'</span>\n' +
    '</p>\n' +
    '<p>\n' +
    '    <span class="left">研发部门会议</span>\n' +
    '    <span class="right">30分钟后开始，星期一 '+day+'.'+month+'.'+year+'</span>\n' +
    '</p>\n' +
    '<p>\n' +
    '    <span class="left">人力资源部门周会</span>\n' +
    '    <span class="right">30分钟后开始，星期一 '+day+'.'+month+'.'+year+'</span>\n' +
    '</p>')
}
