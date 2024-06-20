function toggleLanguage() {
  var elementsEs = document.querySelectorAll('.toggle-lang.es');
  var elementsEn = document.querySelectorAll('.toggle-lang.en');

  elementsEs.forEach(function (element) {
    element.classList.toggle('hidden');
  });

  elementsEn.forEach(function (element) {
    element.classList.toggle('hidden');
  });

  updateLanguageButton();
}

function toggleTheme() {
  document.body.classList.toggle('dark-theme');
  updateThemeButton();
}

function downloadPDF() {
  var element = document.getElementById("cv-content");
  html2pdf(element, {
    margin: 0.25,
    filename: "CV_Silvia_Ramirez_Dominguez.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  });
}

function updateLanguageButton() {
  var isEnglish = !document.querySelector('.toggle-lang.en').classList.contains('hidden');
  var langButton = document.getElementById('lang-button');

  if (isEnglish) {
    langButton.textContent = 'Switch to Spanish';
  } else {
    langButton.textContent = 'Cambiar a Inglés';
  }
}

function updateThemeButton() {
  var isDarkTheme = document.body.classList.contains('dark-theme');
  var themeButton = document.getElementById('theme-button');

  if (isDarkTheme) {
    themeButton.textContent = 'Tema Claro';
  } else {
    themeButton.textContent = 'Tema Oscuro';
  }

  if (document.querySelector('.toggle-lang.en').classList.contains('hidden')) {
    themeButton.textContent = isDarkTheme ? 'Tema Claro' : 'Tema Oscuro';
  } else {
    themeButton.textContent = isDarkTheme ? 'Light Mode' : 'Dark Mode';
  }
}

// Función para mostrar secciones con animación
function showSections() {
  document.querySelectorAll('.section').forEach(function (section) {
    if (section.getBoundingClientRect().top < window.innerHeight) {
      section.classList.add('visible');
    }
  });
}

// Mostrar secciones al cargar la página
document.addEventListener('DOMContentLoaded', function () {
  showSections();
  updateLanguageButton();
  updateThemeButton();
});

// Mostrar secciones al hacer scroll
document.addEventListener('scroll', showSections);
