let music: HTMLAudioElement;

window.addEventListener('DOMContentLoaded', () => {
  music = new Audio('music.mp3');
  music.loop = true;
  music.volume = 0.5;

  // Try autoplay
  music.play().catch(() => {
    console.warn('Autoplay blocked. Waiting for user interaction...');
  });

  const playBtn = document.getElementById('playMusic') as HTMLButtonElement;
  if (playBtn) {
    playBtn.addEventListener('click', () => {
      music.play();
      playBtn.textContent = 'Music Playing';
      playBtn.disabled = true;
    });
  }
});

// Parallax scroll background
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const parallax = document.querySelector('.parallax') as HTMLElement;
  if (parallax) {
    parallax.style.transform = `translateY(${scrolled * 0.3}px) scale(2)`;
  }
});

// Glow trail on mouse move
document.addEventListener('mousemove', (e) => {
  const trail = document.createElement('div');
  trail.className = 'glow-dot';
  trail.style.left = `${e.clientX}px`;
  trail.style.top = `${e.clientY}px`;
  document.body.appendChild(trail);

  setTimeout(() => {
    trail.remove();
  }, 600);
});
