document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const sectionId = btn.getAttribute('data-section');
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
  });
});

const playPauseBtn = document.getElementById('playPauseBtn');
let playing = false;
playPauseBtn.onclick = () => {
  playing = !playing;
  playPauseBtn.textContent = playing ? '⏸️' : '▶️';
};
