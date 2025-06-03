const toggleBtn = document.getElementById('menu-toggle');
const navMenu = document.getElementById('navigation');

toggleBtn.addEventListener('click', () => {
  const isActive = navMenu.classList.toggle('active');
  toggleBtn.setAttribute('aria-expanded', isActive);
});
 const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
  });
