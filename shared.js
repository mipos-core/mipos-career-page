// Mipos Career Page — Shared JS

// Dark mode toggle
(function () {
  const toggle = document.getElementById('theme-toggle');
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  }
  if (toggle) {
    toggle.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    });
  }
})();

// Mobile menu toggle
(function () {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (btn && menu) {
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
      const icon = btn.querySelector('.material-icons-round');
      icon.textContent = menu.classList.contains('hidden') ? 'menu' : 'close';
    });
  }
})();

// Highlight active nav link
(function () {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('#main-nav a[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('nav-active');
      link.classList.remove('text-gray-500', 'text-gray-700');
    }
  });
})();

// Scroll reveal (basic intersection observer)
(function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0');
        entry.target.classList.remove('opacity-0', 'translate-y-4');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('[data-reveal]').forEach(el => {
    el.classList.add('opacity-0', 'translate-y-4', 'transition-all', 'duration-700');
    observer.observe(el);
  });
})();
