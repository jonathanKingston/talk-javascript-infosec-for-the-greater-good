run();

function run() {
  var insertionPoint = document.querySelector('.ip');

  var el = makeElement('div', 'Nice code');
  var el2 = makeElement('script', 'alert(\'Bad code\')');


  insertionPoint.appendChild(el);
  insertionPoint.appendChild(el2);
}

function makeElement(tag, inner) {
  var el = document.createElement(tag);

  el.innerHTML = inner;

  return el;
}
