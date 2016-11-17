  function solve() {
      return function(selector, count) {
          if (typeof(selector) !== 'string') {
              throw 'invalid selector';
          }

          if (isNaN(count) || count < 1) {
              throw 'invalid count';
          }

          var $root = $(selector);

          $root.append("<ul></ul>");
          var $ul = $("ul");
          $ul.addClass("items-list");
          for (var i = 0; i < count; i += 1) {
              $ul.append("<li>" + i + " index" + "</li>");
              $("li").addClass("list-item");
          }
      };
  }
  module.exports = solve;