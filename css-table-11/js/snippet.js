/*!
 * css-table-11 - Colorlib. No jQuery, no framework.
 * Behaviours: check-all
 */
(function () {
  'use strict';

  /* "Select all" boxes, and rows that highlight when ticked. */
  var CHECK_ALL = [{"all":".js-check-all","boxes":"th input[type=\"checkbox\"]","row":null}], CHECK_ROWS = [];
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
