(function() {
  var nav = document.getElementsByClassName('category-bar')[0];
    anchor = nav.getElementsByTagName('a'),
    current = window.location.pathname.split('/')[2];
    for (var i = 0; i < anchor.length; i++) {
      if (anchor[i].href.split('/')[4] == current) {
        anchor[i].classList.add("active");
      }
    }
  })();
