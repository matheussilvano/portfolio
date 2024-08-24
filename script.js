document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'  // Garante a rolagem suave da página toda
      });
    });
  });
  
  document.addEventListener('wheel', (event) => {
    const container = document.querySelector('main');
    if (event.deltaY > 0) {
      container.scrollBy({ top: window.innerHeight, left: 0, behavior: 'smooth' });
    } else {
      container.scrollBy({ top: -window.innerHeight, left: 0, behavior: 'smooth' });
    }
  });
  