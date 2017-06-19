$(document).ready(function() {
  // Set active link on category-bar
  var nav = document.getElementsByClassName('category-bar')[0];
  anchor = nav.getElementsByTagName('a'),
  current = window.location.pathname.split('/')[2];
  for (var i = 0; i < anchor.length; i++) {
    if (anchor[i].href.split('/')[4] == current) {
      anchor[i].classList.add("active");
    }
  }

  // Provide infinite scroll if enable

  var $infiniteContainer = $(".cards.infinite-scroll").infinitescroll({
      navSelector: "ul.pagination",
      nextSelector: "ul.pagination a:last",
      itemSelector: ".cards.infinite-scroll .card",
      loadingImg: "/img/loading.gif",
      loading: {
          finishedMsg: "",
          msgText: "",
          img: "/img/loading.gif"
      }
  }, function(elements) {
      var $elements = $(elements);
      $elements.imagesLoaded(function() {
          $infiniteContainer.append($elements)
      });
  });
});
