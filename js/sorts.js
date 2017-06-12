(function ($) {

  'use strict';

  var $filters = $('.filter [data-filter]'),
    $boxes = $('.boxes [data-color]');

  $filters.on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    
    $filters.removeClass('active');
    $this.addClass('active');

    var $filterColor = $this.attr('data-filter');

    if ($filterColor === 'all') {
      $boxes.removeClass('is-animated')
        .fadeOut().promise().done(function () {
          $boxes.addClass('is-animated').fadeIn();
        });
    } else {
      $boxes.removeClass('is-animated')
        .fadeOut().promise().done(function () {
          $boxes.filter('[data-color = "' + $filterColor + '"]')
            .addClass('is-animated').fadeIn();
        });
    }
  });

}(jQuery));