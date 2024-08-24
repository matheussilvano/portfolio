document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  let currentSectionIndex = 0;

  const scrollToSection = (index) => {
    sections[index].scrollIntoView({ behavior: 'smooth' });
  };

  const handleScroll = (event) => {
    event.preventDefault();
    if (event.deltaY > 0 && currentSectionIndex < sections.length - 1) {
      currentSectionIndex++;
    } else if (event.deltaY < 0 && currentSectionIndex > 0) {
      currentSectionIndex--;
    }
    scrollToSection(currentSectionIndex);
  };

  // Usar wheel para desktop e touchmove para dispositivos móveis
  if ('ontouchstart' in window) {
    let touchStartY;
    document.addEventListener('touchstart', (e) => {
      touchStartY = e.touches[0].clientY;
    });
    document.addEventListener('touchmove', (e) => {
      const touchEndY = e.touches[0].clientY;
      const deltaY = touchStartY - touchEndY;
      if (Math.abs(deltaY) > 50) { // Ajuste esse valor conforme necessário
        handleScroll({ deltaY: deltaY, preventDefault: () => {} });
      }
    });
  } else {
    document.addEventListener('wheel', handleScroll, { passive: false });
  }

  // Navegação do menu
  document.querySelectorAll('nav ul li a').forEach((anchor, index) => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      currentSectionIndex = index;
      scrollToSection(currentSectionIndex);
    });
  });
});