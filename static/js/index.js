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
  })
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
  })







})
