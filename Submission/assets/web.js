function showTime() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let session = "AM";

  if (h > 12) {
    h = 1;
    session = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  let time = h + ":" + m + ":" + s + " " + session;
  document.querySelector("#clockDisplay").innerHTML = time;
}
setInterval(showTime, 1000);
showTime();

var pos = 0;
var turn = 0;
var data = ["Welcome To", "My Personal Website"];
var speed = 200;

setTimeout(typeWriter, speed);

function typeWriter() {
  if (pos < data[turn].length) {
    document.querySelector("#typeWriter").innerHTML += data[turn].charAt(pos);
    pos++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(erase, speed + 100);
  }
}

function erase() {
  if (pos >= 0) {
    var str = data[turn].toString().substring(0, pos);
    document.querySelector("#typeWriter").innerHTML = str;
    pos--;
    setTimeout(erase, speed - 100);
  } else {
    turn++;
    if (turn >= data.length) turn = 0;
    setTimeout(typeWriter, speed);
  }
}

var nav = document.querySelectorAll("nav a");
for (each of nav) {
  each.addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0]  .className = current[0].className.replace("active", "");
    this.className += "active";
  });
}
