/*!
 * css-table-20 - Colorlib. No jQuery, no framework.
 * Behaviours: check-all
 */
(function () {
  'use strict';

  /* "Select all" boxes, and rows that highlight when ticked. */
  var CHECK_ALL = [{"all":".js-check-all","boxes":".control--checkbox input[type=\"checkbox\"]","row":null},{"all":".js-ios-switch-all","boxes":".ios-switch input[type=\"checkbox\"]","row":"cl-active"}], CHECK_ROWS = [{"boxes":".ios-switch input[type=\"checkbox\"]","cls":"cl-active"}];
  CHECK_ALL.forEach(function (g) {
    document.querySelectorAll(g.all).forEach(function (all) {
      all.addEventListener('change', function () {
        document.querySelectorAll(g.boxes).forEach(function (b) {
          b.checked = all.checked;
          var tr = g.row && b.closest('tr');
          if (tr) tr.classList.toggle(g.row, all.checked);
        });
      });
    });
  });
  CHECK_ROWS.forEach(function (r) {
    document.querySelectorAll(r.boxes).forEach(function (b) {
      b.addEventListener('change', function () { var tr = b.closest('tr'); if (tr) tr.classList.toggle(r.cls, b.checked); });
    });
  });
})();
