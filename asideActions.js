// Mostrar tarjeta al hacer clic
document.querySelectorAll('.collapsed-icons i').forEach(function (icon) {
  icon.addEventListener('click', function (event) {
    event.stopPropagation();
    showSection(icon.dataset.section);
  });
});

// Función para mostrar una tarjeta específica
function showSection(sectionId) {
  var sectionCard = document.getElementById(sectionId + '-card');
  var icon = document.querySelector(`[data-section="${sectionId}"]`);
  var iconRect = icon.getBoundingClientRect();

  // Ocultar todas las tarjetas antes de mostrar la nueva
  hideAllCards();

  // Ajustar posición
  sectionCard.style.top = (iconRect.top + window.scrollY) + 'px';
  sectionCard.style.left = (iconRect.right + 10) + 'px';

  // Mostrar la tarjeta
  sectionCard.classList.remove('hidden');
  sectionCard.classList.add('visible');
}

// Ocultar todas las tarjetas
function hideAllCards() {
  var allCards = document.querySelectorAll('.section-card');
  allCards.forEach(function (card) {
    card.classList.add('hidden');
    card.classList.remove('visible');
  });
}

// Ocultar tarjetas al hacer clic fuera de ellas
document.addEventListener('click', function (event) {
  if (!event.target.closest('.section-card') && !event.target.closest('.collapsed-icons i')) {
    hideAllCards();
  }
});

// Evitar que la tarjeta se oculte mientras el ratón está sobre ella
document.querySelectorAll('.section-card').forEach(function (card) {
  card.addEventListener('mouseenter', function () {
    clearTimeout(card.hideTimeout);
  });

  card.addEventListener('mouseleave', function () {
    card.hideTimeout = setTimeout(function () {
      if (!document.querySelector('.section-card:hover') && !document.querySelector('.collapsed-icons i:hover')) {
        hideAllCards();
      }
    }, 100);
  });
});

// Ocultar iconos cuando el aside está desplegado
function toggleAside() {
  var aside = document.getElementById('contact-info-aside');
  var logo = document.getElementById('toggle-aside-button');
  var headerButtons = document.querySelector('.header-buttons');
  var collapsedIcons = document.querySelector('.collapsed-icons');

  aside.classList.toggle('collapsed');

  if (aside.classList.contains('collapsed')) {
    logo.style.width = '80px';
    logo.style.height = '80px';
    headerButtons.classList.remove('hidden');
    headerButtons.classList.add('collapsed-buttons');
    collapsedIcons.classList.remove('hidden');
  } else {
    logo.style.width = '150px';
    logo.style.height = '150px';
    headerButtons.classList.add('hidden');
    headerButtons.classList.remove('collapsed-buttons');
    collapsedIcons.classList.add('hidden');
    hideAllCards(); // Ocultar todas las tarjetas al desplegar el aside
  }
}
