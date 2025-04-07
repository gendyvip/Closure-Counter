var btn = document.getElementById("btn");
var show = document.getElementById("showCount");
function createCounter() {
  var x = 0;
  show.innerHTML = x;
  return function () {
    btn.addEventListener("click", function () {
      show.innerHTML = `${++x}`;
    });
  };
}
var counter = createCounter();
counter();
