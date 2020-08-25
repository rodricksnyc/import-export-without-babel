"use strict";

var _config = require("./config.js");

$(document).ready(function () {
  $('.carousel').on('slid.bs.carousel', function () {
    var carouselData = $(this).data('bs.carousel');
    var currentIndex = $(this).find(".active").index();
    $('.result p').removeClass('active-p').eq(currentIndex).addClass('active-p');
  });

  for (var j in _config.block.blocks) {
    $('.popularR').append("<div class=\"col-lg-2 col-md-6 col-sm-12 col-xs-12\"><div class=\"smallBubble d-flex flex-column align-items-center\">" + _config.block.blocks[j].icon + "<p class=\"blue\">" + _config.block.blocks[j].title + "</p></div></div>");
  }
});
