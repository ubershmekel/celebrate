// From https://www.kirilv.com/canvas-confetti/
function realisticConfetti() {
  var count = 200;
  var defaults = {
    origin: {
      x: 0.3 + Math.random() * 0.4,
      y: 0.7,
    },
    angle: Math.random() * 20 + 80,
    resize: true,
    ticks: 700, // time to fade
    gravity: 0.9,
  };

  function fire(particleRatio, opts) {
    confetti(Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio)
    }));
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
};

function celebrate() {
  playSound();
  realisticConfetti();
}
window.celebrate = celebrate;


const files = ['audience-claps.mp3', 'dudes-clap-yay.mp3', 'gasp-yay.mp3', 'kids-yay.mp3', 'one-yay.mp3'];
let soundsIndex = 0;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function playSound() {
  if (soundsIndex >= files.length) {
    shuffleArray(files);
    soundsIndex = 0;
  }
  const filePath = files[soundsIndex];
  soundsIndex++;
  var audio = new Audio('sounds/' + filePath);
  audio.playbackRate = 0.8 + 0.4 * Math.random(); // 0.8 - 1.2 speed
  audio.preservesPitch = false;
  audio.mozPreservesPitch = false;
  audio.webkitPreservesPitch = false;
  audio.play();
}

