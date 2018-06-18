import $ from 'jquery';
const $form = $('#signup-form');
const $button = $('#signup-submit');

console.log($form);

$button.on('click', function(e) {
  e.preventDefault();
  console.log($form.serializeArray());
  console.log(e);
});
