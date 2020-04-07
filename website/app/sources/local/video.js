
if (typeof module === 'object') {window.module = module; module = undefined;}

$(document).ready(function() {
  $(".video").click(function() {
    if ($(this).hasClass("animating")) {
      return;
    }


    if (!$(this).hasClass("expand")) {
      var headerHeight = $(this).outerHeight();
      $(this).height(headerHeight);
      $(this).addClass("expand");
      var contentHeight = $(this).find(".iframify").outerHeight();
      let newHeight = contentHeight + headerHeight + 10;
      $(this).addClass("animating");
      $(this).animate({height: newHeight + 'px'}, 1000, () => {
        $(this).removeClass("animating");
      });
    } else {
      $(this).addClass("animating");
      $(this).animate({height: '90px'}, 1000, 'swing', () => {
        $(this).removeClass("animating");
        $(this).removeClass("expand");
        try {
          $(this).find(".iframify iframe").stopVideo();
        } catch {

        }
      });
    }
  });
});


if (window.module) module = window.module;