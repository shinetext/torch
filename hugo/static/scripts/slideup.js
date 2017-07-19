// Cards parallax effect
$(document).ready(function() {
  /**
  * Copyright 2012, Digital Fusion
  * Licensed under the MIT license.
  * http://teamdf.com/jquery-plugins/license/
  *
  * @author Sam Sehnert
  * @desc A small plugin that checks whether elements are within
  *     the user visible viewport of a web browser.
  *     only accounts for vertical position, not horizontal.
  */

  $.fn.visible = function(partial) {
    var $t = $(this),
      $w = $(window),
      viewTop = $w.scrollTop(),
      viewBottom = viewTop + $w.height(),
      _top = $t.offset().top,
      _bottom = _top + $t.height(),
      compareTop = partial === true ? _bottom : _top,
      compareBottom = partial === true ? _top : _bottom;

    return compareBottom <= viewBottom && compareTop >= viewTop;
  };

  var win = $(window);
  var cards = $('.card');
  var featuredCards = $('.featured-article-preview');
  // Check if car is already visible onload
  cards.each(function(idx, card) {
    var card = $(card);
    if (card.visible(true)) {
      card.addClass('already-visible');
    }
  });

  featuredCards.each(function(idx, featuredCard) {
    var featuredCard = $(featuredCard);
    if (featuredCard.visible(true)) {
      featuredCard.addClass('already-visible');
    }
  });

  // Add scroll animation
  var scrollPos = $(this).scrollTop();
  win.scroll(function(event) {
    var currentPos = $(this).scrollTop();
    if (currentPos > scrollPos) {
      cards.each(function(idx, card) {
        var card = $(card);
        if (card.visible(true)) {
          card.addClass('come-in');
        }
      });

      featuredCards.each(function(idx, featuredCard) {
        var featuredCard = $(featuredCard);
        if (featuredCard.visible(true)) {
          featuredCard.addClass('come-in');
        }
      });
    }
  });
});
