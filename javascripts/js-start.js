document.addEventListener("DOMContentLoaded", () => {
  changePrava();
});

function changePrava() {
  let prava = document.querySelector(".prava-2");
  let cnt = 1;

  let urls = [
    "images/batco.svg",
    "images/bratok.svg",
    "images/chichi.svg",
    "images/cupan.svg",
    "images/lianova.svg",
    "images/polot.svg",
    "images/bananov.svg",
  ];

  prava.addEventListener("click", () => {
    prava.src = urls[cnt];
    cnt++;
    console.log(cnt);

    if (cnt == 7) {
      cnt = 0;
    }
  });
}
