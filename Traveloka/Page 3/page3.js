let form = document.querySelector(".form");
let btnSum = document.querySelector(".btnSum");
let time = document.querySelector(".time");
let adult = document.querySelector(".adult");
let child = document.querySelector(".child");
let totalAll = document.querySelector(".total");
let confirm = document.querySelector(".confirm");
let error = document.querySelector(".error");
let start = document.querySelector(".start");
let btnCheck = document.querySelector(".btnCheck");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let timeCount = time.value;
  let adultCount = adult.value;
  let childCount = child.value;
  let startCount = start.value;

  //Tính tiền
  let total = 0;
  if (timeCount <= 0 || adultCount <= 0 || childCount < 0) {
    error.style.display = "block";
  } else if (timeCount > 0 && adultCount > 0 && childCount >= 0) {
    total = timeCount * 200 + adultCount * 50 + childCount * 25;
    error.style.display = "none";

    // Hiển thị tổng tiền
    totalAll.innerHTML = "$" + total;
    btnSum.style.display = "none";
    btnCheck.style.display = "block";
  }

  //Lưu vào localStorage
  let bookingInfo = {
    start: startCount,
    time: timeCount,
    adult: adultCount,
    child: childCount,
    total: total,
  };

  localStorage.setItem("bookingInfo", JSON.stringify(bookingInfo));
});
// Chuyển đến trang tiếp theo
btnCheck.addEventListener("click", function () {
  window.location.href = "http://127.0.0.1:5500/Page%204/page4.html";
});
