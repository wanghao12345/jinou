/**
 * Created by wanghao on 2019/9/4
 */
$(function () {

  /**
   * 菜单切换
   */
  $('.menu-item-box').on('click', function () {
    $('.menu-item-box').removeClass('active-menu-item-box')
    $(this).addClass('active-menu-item-box')
  });
  /**
   * 右上下拉选择
   */
  $('.top-dropdown-menu-box li').on('mouseover', function () {
    $('.top-dropdown-menu-box li').removeClass('active')
    if ($(this).data('index') === 1) {
      $('.top-dropdown-menu-box').addClass('dropdown-after-red')
    } else {
      $('.top-dropdown-menu-box').removeClass('dropdown-after-red')
    }
    $(this).addClass('active')
  });
  /**
   * 新闻banner
   */
  var bannerTab =  new $.Tab({
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
  console.log(bannerTab);


})
