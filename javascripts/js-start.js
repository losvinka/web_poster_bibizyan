// document.getElementById("changePrava()","changePrava()","changePrava()" ).style.cursor = "pointer";
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

document.addEventListener("DOMContentLoaded", () => {
  changewordsbibi();
});

function changewordsbibi() {
  let redbibizyan = document.querySelector(".redbibizyan");
  let cnt = 1;

  let urls = ["images/redbibi2.svg", "images/group1.svg"];

  redbibizyan.addEventListener("click", () => {
    redbibizyan.src = urls[cnt];
    cnt++;
    console.log(cnt);

    if (cnt == 2) {
      cnt = 0;
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  changewordsbibi2();
});

function changewordsbibi2() {
  let bluebibizyan = document.querySelector(".bluebibizyan");
  let cnt = 1;

  let urls = ["images/group4.svg", "images/group2.svg"];

  bluebibizyan.addEventListener("click", () => {
    bluebibizyan.src = urls[cnt];
    cnt++;
    console.log(cnt);

    if (cnt == 2) {
      cnt = 0;
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  changeGlasses();
});

function changeGlasses() {
  let prava = document.querySelector(".glasses");
  let cnt = 1;

  let urls = [
    "images/glasses1.svg",
    "images/glasses2.svg",
    "images/glasses3.svg",
    "images/glasses4.svg",
    "images/glasses5.svg",
    "images/glasses6.svg",
  ];

  prava.addEventListener("click", () => {
    prava.src = urls[cnt];
    cnt++;
    console.log(cnt);

    if (cnt == 6) {
      cnt = 0;
    }
  });
}

// добавить курсор
