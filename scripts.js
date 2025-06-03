document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });
  
    // Animate skill bars
    document.querySelectorAll('.skill-bar').forEach(bar => {
      const level = bar.dataset.level;
      bar.style.setProperty('--bar-fill', `${level}%`);
      bar.style.setProperty('width', `${level}%`);
      setTimeout(() => {
        bar.style.setProperty('width', `${level}%`);
        bar.style.setProperty('--bar-fill', `${level}%`);
        bar.style.setProperty('transition', 'width 1s ease-in-out');
      }, 300);
    });
  
    // Contact form submit
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Message sent! (form handling not connected)');
      form.reset();
    });
  
    // Download as PDF
    const downloadBtn = document.getElementById('download-btn');
    downloadBtn.addEventListener('click', () => {
      alert('PDF download coming soon. Use Print > Save as PDF in meantime.');
    });
  });
  