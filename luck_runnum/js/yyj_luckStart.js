/*
 * @Author: andrew yang
 * @Date:   2016-11-29 14:02:12
 * @Last Modified by:   andrew yang
 * @Last Modified time: 2016-11-29 15:04:37
 */
'use strict';
var goluck = function() {
    var $wrap = $('.js-nums'),
        nums;
    $wrap[0] && $wrap.find('.num').each(function(i, o) {
        nums = Math.round(Math.random()*9+1) * 49;
        $(this).css("backgroundPositionY", "0px")
        $(this).animate({
            'backgroundPositionX': '0px',
            'backgroundPositionY': '-' + nums + 'px'
        }, 500);
    });
}