function toggleLanguage() {
  var elements = document.querySelectorAll(".toggle-lang");
  elements.forEach(function (element) {
    element.classList.toggle("hidden");
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
    langButton.innerHTML = '<i class="fas fa-language"></i>';
  } else {
    langButton.innerHTML = '<i class="fas fa-language"></i>';
  }
}

function updateThemeButton() {
  var isDarkTheme = document.body.classList.contains('dark-theme');
  var themeButton = document.getElementById('theme-button');

  if (isDarkTheme) {
    themeButton.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    themeButton.innerHTML = '<i class="fas fa-moon"></i>';
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
