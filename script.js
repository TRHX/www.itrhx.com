// js for www.itrhx.cn

function webPageJump() {
  var t = 30; // 跳转倒数时间
  document.getElementById("count-down").innerHTML = t;
  var interval = setInterval(function () {
    if (0 == t) {
      location.href = "https://www.itbob.cn/"; // 跳转URL
      window.clearInterval(interval);
    } else {
      t -= 1;
      document.getElementById("count-down").innerHTML = t;
    }
  }, 1000);
}
webPageJump();

function update_copyright_year() {
  var date = new Date();
  var y_n = date.getFullYear();
  var y_o = document.getElementById("now").innerHTML;
  if (y_n > y_o) {
    document.getElementById("now").innerHTML = y_n;
  }
}
update_copyright_year();


var bg_grad = document.getElementById("bg-gradient");
var bg_pic = document.getElementById("bg-picture");

function set_background_gradient(angle) {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var from = "rgb(" + r + ", " + g + ", " + b + ")";
  var to = "rgb(" + (0xff - r) + ", " + (0xff - g) + ", " + (0xff - b) + ")";
  var style_gradient = "linear-gradient(" + angle + "deg, " + from + " 0%, " + to + " 100%)"
  bg_grad.style.background = style_gradient;
}
// set_background_gradient(Math.floor(Math.random() * 360));

bg_grad.onclick = function change_background(event) {
  var e = event || window.event;
  var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
  var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
  var x = e.pageX || e.clientX + scrollX;
  var y = e.pageY || e.clientY + scrollY;
  var angle = Math.floor(Math.atan(y / x) / Math.PI * 180);
  set_background_gradient(angle);
}

bg_grad.ondblclick = function set_background_pic() {
  if (/Mobi|Android/i.test(navigator.userAgent))
    return;
  bg_pic.removeAttribute("style");
  setTimeout(function () { bg_pic.setAttribute("class", "hi-res"); }, 17);
}

bg_pic.ondblclick = function () {
  bg_pic.style.transition = "all 0.25s ease";
  bg_pic.style.opacity = 0;
  setTimeout(function () { bg_pic.style.display = "none"; }, 250);
}



