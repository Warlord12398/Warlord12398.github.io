document.addEventListener('DOMContentLoaded', () => {
  console.log("Warlord12398 Discord Tool Site Loaded");

  // Floating glow effect on mousemove
  document.body.addEventListener('mousemove', (e) => {
    const light = document.querySelector('.mouse-light');
    if (light) {
      light.style.left = `${e.pageX}px`;
      light.style.top = `${e.pageY}px`;
    }
  });
});
