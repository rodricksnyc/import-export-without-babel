$(document).ready(function() {


  $('.carousel').on('slid.bs.carousel', function () {
    var carouselData = $(this).data('bs.carousel');


  	var currentIndex = $(this).find(".active").index();


    $('.result p')
      .removeClass('active-p')
      .eq(currentIndex)
      .addClass('active-p');
  });


//   var block = {"blocks": [{
//   	"title": 'Forms',
//   	"icon": '<i class="fal fa-file-alt"></i>'
//   },
//
//   {
//     "title": 'Schedules',
//   	"icon": '<i class="fal fa-calendar-alt"></i>'
//   },
//
//   {
//     "title": 'Policies',
//   	"icon": '<i class="fal fa-clipboard-list-check"></i>'
//   },
//
//   {
//     "title": 'On Campus',
//   	"icon": '<i class="fal fa-building"></i>'
//   },
//
//   {
//     "title": 'OAsys',
//   	"icon": '<i class="fal fa-desktop-alt"></i>'
//   },
//
//   {
//     "title": 'Proposal Central',
//   	"icon": '<i class="fal fa-folders"></i>'
//   },
//   {
//     "title": 'Institutional  Review Board',
//   	"icon": '<i class="fal fa-search"></i>'
//   },
//   {
//     "title": 'Training',
//   	"icon": '<i class="fal fa-users-class"></i>'
//   },
//   {
//     "title": 'Benefits',
//   	"icon": '<i class="fal fa-rocket-launch"></i>'
//   },
//
//   {
//     "title": 'Workday',
//   	"icon": '<i class="fal fa-user-chart"></i>'
//   }
//
//
//
//   ]
//
//   };
//
// // var block = require("./data/config.js");
//
//
// for(var j in block.blocks) {
//
// $('.popularR').append(`<div class="col-lg-2 col-md-6 col-sm-12 col-xs-12"><div class="smallBubble d-flex flex-column align-items-center">${block.blocks[j].icon}<p class="blue">${block.blocks[j].title}</p></div></div>`)
//
// }
//
//
//
//























})
