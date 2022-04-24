// バイクの画像にマウスをかざしたら変わる
const before = document.getElementById("before")
const bike = document.getElementById("bike");


bike.onmouseover = function () {
  bike.src = "img/after_bike.jpg";
  before.textContent = "バイク(after)";
};
bike.onmouseout = function () {
  bike.src = "img/before_bike.jpg";
  before.textContent = "バイク(before)";
};

// インスタのriンクを押した際に”本当に飛びますか？”のアラートメッセージ

function clickEvent() {
    alert('移動しますね…')
}