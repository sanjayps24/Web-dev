const startBtn = document.getElementById('startBtn');
const learnBtn = document.getElementById('learnBtn');

const hero = document.querySelector('.hero');
hero?.classList.add('loaded');

startBtn?.addEventListener('click', () => {
  startBtn.textContent = 'Launching...';
  setTimeout(() => {
    startBtn.textContent = 'Get Started';
    alert('Ready! Start building your attractive UI.');
  }, 420);
});

learnBtn?.addEventListener('click', () => {
  learnBtn.textContent = 'Loading...';
  setTimeout(() => {
    learnBtn.textContent = 'Learn More';
    alert('Use your own content and style to make it truly yours.');
  }, 420);
});

