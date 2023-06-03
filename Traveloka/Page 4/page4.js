let checkDate = document.querySelector("#check-in-date");
let checkNights = document.querySelector("#number-of-nights");
let checkAdult = document.querySelector("#number-of-adults");
let checkChild = document.querySelector("#number-of-children");
let checkMoney = document.querySelector("#total-money");

//Lấy thông tin từ localstorage ra
let bookInfor = JSON.parse(localStorage.getItem("bookingInfo"));

checkDate.textContent = bookInfor.start;
checkNights.textContent = bookInfor.time;
checkAdult.textContent = bookInfor.adult;
checkChild.textContent = bookInfor.child;
checkMoney.textContent = `$` + bookInfor.total;

//Sửa thông tin
let deleteBtn = document.querySelector(".deleteBtn");
deleteBtn.addEventListener("click", function () {
  window.location.href = "http://127.0.0.1:5500/Page%203/page3.html";
});
