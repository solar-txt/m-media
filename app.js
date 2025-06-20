document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const sectionId = btn.getAttribute('data-section');
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
  });
});

// Auth tabs toggle
const loginTab = document.getElementById('loginTab');
const signupTab = document.getElementById('signupTab');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

loginTab.onclick = () => {
  loginTab.classList.add('active');
  signupTab.classList.remove('active');
  loginForm.classList.add('active');
  signupForm.classList.remove('active');
};

signupTab.onclick = () => {
  signupTab.classList.add('active');
  loginTab.classList.remove('active');
  signupForm.classList.add('active');
  loginForm.classList.remove('active');
};

// Fake login/signup handlers (replace with real auth)
document.getElementById('loginBtn').onclick = () => {
  alert('Logged in! (Replace with real logic)');
  document.getElementById('auth-overlay').classList.remove('active');
};
document.getElementById('signupBtn').onclick = () => {
  alert('Account created! (Replace with real logic)');
  document.getElementById('auth-overlay').classList.remove('active');
};

// Simple player controls stub
const playPauseBtn = document.getElementById('playPauseBtn');
let playing = false;
playPauseBtn.onclick = () => {
  playing = !playing;
  playPauseBtn.textContent = playing ? '⏸️' : '▶️';
};
