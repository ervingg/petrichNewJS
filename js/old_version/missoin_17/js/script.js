$(function () {
  // function overlay() {
  //   $('.overlay').css({
  //     'display': 'block',
  //     'transition': 'all .5s'
  //   });
  // }

  $('#tour').click(function (e) {
    e.preventDefault();
    $('.overlay').css('display', 'block');
  });
});

