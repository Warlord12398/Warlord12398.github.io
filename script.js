let music;

window.addEventListener('DOMContentLoaded', () => {
  music = new Audio('music.mp3');
  music.loop = true;
  music.volume = 0.5;

  music.play().catch(() => {
    console.warn('Autoplay blocked. User must click Play Music.');
  });

  const playBtn = document.getElementById('playMusic');
  if (playBtn) {
    playBtn.addEventListener('click', () => {
      music.play();
      playBtn.textContent = 'Music Playing';
      playBtn.disabled = true;
    });
  }
});

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const parallax = document.querySelector('.parallax');
  if (parallax) {
    parallax.style.transform = `translateY(${scrolled * 0.3}px) scale(2)`;
  }
});

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
