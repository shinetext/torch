import $ from 'jquery';
const $button = document.getElementById('lambda-button');
const handler = function() {
  $.ajax({
    url: `${LAMBDA_ENDPOINT}/signup`,
    method: 'POST',
    data: JSON.stringify({ user: 'sancho' }),
  }).then(res => console.log(res));
};

// const handler = () => {
//   fetch(`${LAMBDA_ENDPOINT}/signup`, {
//     method: 'POST',
//     body: JSON.stringify({ user: 'sancho' }),
//   }).then(res => console.log(res));
// };

$button.addEventListener('click', () => {
  setTimeout(() => {
    $button.innerHTML = 'Waiting for response...';
  }, 500);

  handler();
});
