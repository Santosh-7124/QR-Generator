const btn = document.getElementById("urlbtn");
let qrimage = document.getElementById("imgbox");
let url = document.getElementById("urltext");
const Download = document.getElementById("Download");
const link = document.getElementById("link");

btn.addEventListener("click", () => {
  document.querySelector(".output").style.display = "block";
  qrimage.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
    url.value;
});

url.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    btn.click();
  }
});

Download.addEventListener("click", () => {
  link.href =
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
    url.value;
});
