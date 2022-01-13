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

function playSound() {
  const files = ['audience-claps.mp3', 'dudes-clap-yay.mp3', 'gasp-yay.mp3', 'kids-yay.mp3', 'one-yay.mp3'];
  const filePath = files[Math.floor(Math.random() * files.length)];
  var audio = new Audio('sounds/' + filePath);
  audio.play();
}


function changeFavicon(text) {
  const canvas = document.createElement('canvas');
  canvas.height = 64;
  canvas.width = 64;
  const ctx = canvas.getContext('2d');
  ctx.font = '64px serif';
  ctx.fillText(text, 0, 64);

  const link = document.createElement('link');
  const oldLinks = document.querySelectorAll('link[rel="shortcut icon"]');
  oldLinks.forEach(e => e.parentNode.removeChild(e));
  link.id = 'dynamic-favicon';
  link.rel = 'shortcut icon';
  link.href = canvas.toDataURL();
  document.head.appendChild(link);
}

changeFavicon('🎉');
