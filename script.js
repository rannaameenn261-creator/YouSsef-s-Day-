const audio = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", async () => {
  try {
    if (audio.paused) {
      await audio.play();
      musicBtn.textContent = "♫";
      musicBtn.classList.add("playing");
    } else {
      audio.pause();
      musicBtn.textContent = "♪";
      musicBtn.classList.remove("playing");
    }
  } catch (error) {
    console.error("Music error:", error);
    alert("الموسيقى مش قادرة تشتغل. اتأكدي إن ملف youssef-song.mp3 موجود داخل assets.");
  }
});

audio.addEventListener("ended", () => {
  musicBtn.textContent = "♪";
  musicBtn.classList.remove("playing");
});

audio.addEventListener("error", () => {
  console.error("Could not load assets/youssef-song.mp3");
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: .12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
