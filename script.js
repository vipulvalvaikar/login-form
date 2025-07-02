// Form Validation
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!username || !password) {
    alert('Please enter both username and password.');
    return;
  }

  if (password.length < 6) {
    alert('Password must be at least 6 characters long.');
    return;
  }
  
  //🔊 Play sound
  document.getElementById('loginSound').play();

  alert('Login successful!\nUsername: ' + username);
  this.reset();
});

// Live Clock
function updateClock() {
  const now = new Date();
  const clock = document.getElementById('clock');
  clock.textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock(); // Initial call

// Dark/Light Theme Toggle
const toggleBtn = document.getElementById('themeToggle');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  toggleBtn.textContent = isDark ? '🌙' : '🌞';
});

// Apply saved theme on load
window.addEventListener('load', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    toggleBtn.textContent = '🌙';
  } else {
    toggleBtn.textContent = '🌞';
  }
});
