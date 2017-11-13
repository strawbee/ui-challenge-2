'use strict';

$('#demo').submit(function(e) {
  e.preventDefault();
});
$('input:invalid').after('<div class="afterinvalid">please enter a valid username</div>');
