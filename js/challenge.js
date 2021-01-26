let counter = 0;
let counterLoad = document.getElementById("counter")
let intervalID = window.setInterval(count, 1000);
function count()
{
  counter++;
  counterLoad.innerText = counter;
}
document.getElementById("plus").addEventListener("click",function() {
  counter++;
  counterLoad.innerText = counter;
}
);
