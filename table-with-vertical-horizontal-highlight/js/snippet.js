/*!
 * Table_Highlight_Vertical_Horizontal - Colorlib. No jQuery, no framework.
 * Behaviours: table-highlight
 */
(function () {
  'use strict';

  /* Highlight the hovered column and its header, as the original did. */
  document.querySelectorAll('.column100').forEach(function (cell) {
    function mark(on) {
      var table2 = cell.parentElement && cell.parentElement.parentElement;
      var table1 = table2 && table2.parentElement;
      if (!table1) return;
      var ver = table1.getAttribute('data-vertable'), col = cell.getAttribute('data-column');
      if (!col) return;
      table2.querySelectorAll('.' + col).forEach(function (c) { c.classList.toggle('hov-column-' + ver, on); });
      table1.querySelectorAll('.row100.head .' + col).forEach(function (c) { c.classList.toggle('hov-column-head-' + ver, on); });
    }
    cell.addEventListener('mouseover', function () { mark(true); });
    cell.addEventListener('mouseout', function () { mark(false); });
  });
})();
