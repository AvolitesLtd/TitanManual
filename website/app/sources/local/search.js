
if (typeof module === 'object') {window.module = module; module = undefined;}

var list = [];
var options = {
  shouldSort: true,
  threshold: 0.2,
  location: 0,
  distance: 2000,
  maxPatternLength: 32,
  minMatchCharLength: 3,
  keys: [{
    name: 'title',
    weight: 0.7
  }, {
    name: 'content',
    weight: 0.3
  }]
};
var fuse = new Fuse(list, options); // "list" is the item array

$.ajax({
  url: '/index.json',
  dataType: 'application/json',
  complete: function(data){
    fuse.list = JSON.parse(data.responseText);
  }
});

$(document).ready(function() {
  $(".navigationWrapper .slidingNav ul.nav-site")
    .append('<li id="search"><input type="text" id="search_input_react" placeholder="Search" title="Search" class="aa-input" autocomplete="off" spellcheck="false" role="combobox" aria-autocomplete="list" aria-expanded="false" dir="auto"/></li>');

  $("body").append(`<ul id='results'></ul>`);

  $("body").click(function(){
    $("#results").fadeOut().removeClass("active");
  });

  // Prevent events from getting pass .popup
  $("#results").click(function(e){
    e.stopPropagation();
  });

  $("#search_input_react").on('focus', function(e){
    var ul = $("#results");
    if ($("#search_input_react").val() != "") {
      ul.show();
    }
  });

  $("#search_input_react").click(function(e){
    e.stopPropagation();
  });

  $("#search_input_react").keyup(function(e){
    var input = $("#search_input_react").val();
    var results = fuse.search(input);
    var ul = $("#results");
    ul.empty();

    if (results.length > 20) {
      results.length = 20;
    }
    for (var result in results) {
      var item = results[result];
      var li = `<li><a href="/docs/` + item.url + `"><div class="title">` +  item.title + '</div><div class="subtitle">' + item.subtitle + `</div></a></li>`;
      ul.append(li);
    }
    if (results.length == 0) {
      ul.append(`<li><div class="title">No Results</div></li>`)
    }

    ul.show();
  });
});


if (window.module) module = window.module;