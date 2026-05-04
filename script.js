const music = new Audio("You.mp3");
music.loop = true;
music.volume = 0; // mulai dari 0 biar fade

const titleLines = document.querySelectorAll(".title span");
const quote = document.querySelector(".quote");
const bottomText = document.querySelector(".bottom-left");
const photo = document.querySelector(".photo-wrap");
const photoGroup = document.querySelector(".photo-group");

// START
window.addEventListener("load", () => {
  playMusic(); // coba autoplay
  animate();
});

// kalau autoplay diblokir → play saat user interaksi
["click", "touchstart", "keydown"].forEach(e => {
  window.addEventListener(e, () => {
    playMusic();
  }, { once: true });
});

// FUNCTION PLAY MUSIC
function playMusic() {
  music.play().then(() => {
    fadeInAudio();
  }).catch(() => {
    // autoplay gagal, nunggu user interaction
  });
}

// FADE IN AUDIO
function fadeInAudio() {
  let vol = 0;

  const interval = setInterval(() => {
    if (vol < 1) {
      vol += 0.05;
      music.volume = vol;
    } else {
      clearInterval(interval);
    }
  }, 200);
}

// ANIMATION
function animate() {
  titleLines.forEach((line, i) => {
    setTimeout(() => {
      line.classList.add("show");
    }, i * 500);
  });

  setTimeout(() => {
    photoGroup.classList.add("show");
  }, 800);

  setTimeout(() => {
    photo.classList.add("show");
  }, 1000);

  setTimeout(() => {
    quote.classList.add("show");
  }, 1400);

  setTimeout(() => {
    bottomText.classList.add("show");
  }, 1800);
}