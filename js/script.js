//Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik diluar sidebaruntuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

let autoScroll = false;
let scrollInterval;
let isPlaying = true; // Start in playing state
let audio = new Audio("sad dream.mp3"); // Ganti dengan path file audio Anda

document.addEventListener("DOMContentLoaded", (event) => {
  audio.play();
  document.getElementById("playButton").innerHTML = "&#10074;&#10074;"; // Pause symbol
});

audio.addEventListener("ended", () => {
  audio.play(); // Replay the audio when it ends
});

function toggleAutoScroll() {
  if (autoScroll) {
    clearInterval(scrollInterval);
    autoScroll = false;
    document.getElementById("scrollIcon").innerHTML = "&#9650;"; // Up arrow
  } else {
    scrollInterval = setInterval(() => {
      window.scrollBy(0, 1);
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        clearInterval(scrollInterval);
        autoScroll = false;
        document.getElementById("scrollIcon").innerHTML = "&#9650;"; // Up arrow
      }
    }, 10); // Adjust scroll speed here
    autoScroll = true;
    document.getElementById("scrollIcon").innerHTML = "&#9660;"; // Down arrow
  }
}

function togglePlay() {
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
    document.getElementById("playButton").innerHTML = "&#9658;"; // Play symbol
  } else {
    audio.play();
    isPlaying = true;
    document.getElementById("playButton").innerHTML = "&#10074;&#10074;"; // Pause symbol
  }
}
