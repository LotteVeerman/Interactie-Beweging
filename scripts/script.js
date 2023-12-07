function hover1() {
  video1 = document.getElementById("videoknop1");
  video1.style.visibility = "visible";
  console.log("hover");
}

function normaal1() {
  video1 = document.getElementById("videoknop1");
  video1.style.visibility = "hidden";
  console.log("normaal");
}

function hover2() {
  video2 = document.getElementById("videoknop2");
  video2.style.visibility = "visible";
}

function normaal2() {
  video2 = document.getElementById("videoknop2");
  video2.style.visibility = "hidden";
}

function hover3() {
  video3 = document.getElementById("videoknop3");
  video3.style.visibility = "visible";
}

function normaal3() {
  video3 = document.getElementById("videoknop3");
  video3.style.visibility = "hidden";
}

function eten() {
  animatie = document.getElementById("animatie");
  geluid1 = document.getElementById("geluid1");
  geluid2 = document.getElementById("geluid2");
  geluid3 = document.getElementById("geluid3");

  animatie.src = "images/axolotl-1.mp4";
  geluid1.play();
  geluid2.pause();
  geluid2.currentTime = 0;
  geluid3.pause();
  geluid3.currentTime = 0;
}

function slapen() {
  animatie = document.getElementById("animatie");
  geluid1 = document.getElementById("geluid1");
  geluid2 = document.getElementById("geluid2");
  geluid3 = document.getElementById("geluid3");

  animatie.src = "images/axolotl-2.mp4";
  geluid1.pause();
  geluid1.currentTime = 0;
  geluid2.play();
  geluid3.pause();
  geluid3.currentTime = 0;
}

function verstoppen() {
  animatie = document.getElementById("animatie");
  geluid1 = document.getElementById("geluid1");
  geluid2 = document.getElementById("geluid2");
  geluid3 = document.getElementById("geluid3");

  animatie.src = "images/axolotl-3.mp4";
  geluid1.pause();
  geluid1.currentTime = 0;
  geluid2.pause();
  geluid2.currentTime = 0;
  geluid3.play();
}