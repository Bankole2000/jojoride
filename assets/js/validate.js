$("#ride-next").click(function(e) {
  e.preventDefault();
  let number = e.target.getAttribute('data-to');
  let state = parseInt(number, 10);
  let nextState = state + 1;
  console.log(`${state} ${nextState}`);
  $(`#${state}`).addClass("show-out-left");
  $(`#${nextState}`).addClass("show-in");
  $(`#${nextState}`).removeClass("show-out-right");
  e.target.setAttribute('data-to', nextState);
  $('#ride-back').attr('data-to', state);
});

$("#ride-back").click(function(e) {
  e.preventDefault();
  let number = e.target.getAttribute('data-to');
  let prevState = parseInt(number, 10);
  let currState = prevState + 1;
  let nextBack = prevState - 1;
  console.log(`${currState} ${prevState}`);
  $(`#${currState}`).addClass("show-out-right");
  $(`#${prevState}`).addClass("show-in");
  $(`#${prevState}`).removeClass("show-out-left");
  e.target.setAttribute('data-to', nextBack);
  $('#ride-next').attr('data-to', prevState);
});
