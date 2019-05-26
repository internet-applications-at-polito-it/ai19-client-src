const { fromEvent } = Rx;
const { map, scan } = RxOperators;

const input = document.createElement('input');

input.setAttribute('placeholder', 'Type something');

// `output` represents the right hand pane.
// You can prepend/append elements to it.
output.prepend(input);

input.focus();

fromEvent(input, 'keydown').pipe(
  map((val) => 1),
  scan((acc, cur) => acc+cur, 0)
)
