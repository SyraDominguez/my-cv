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

  // Guardar el tema actual
  var isDarkTheme = document.body.classList.contains('dark-theme');

  // Clonar el contenido del aside y reestructurarlo
  var contactInfoAside = document.getElementById("contact-info-aside").cloneNode(true);

  // Crear una tarjeta de contacto
  var contactCard = document.createElement('div');
  contactCard.classList.add('contact-card');

  // Seleccionar habilidades técnicas más interesantes
  var skills = contactInfoAside.querySelectorAll('.skills li');
  var topSkills = Array.from(skills).slice(0, 6); // Selecciona las primeras 5 habilidades

  // Crear HTML para habilidades seleccionadas
  var skillsHTML = '<h3>Habilidades Técnicas</h3><ul>';
  topSkills.forEach(function (skill) {
    skillsHTML += `<li>${skill.innerHTML}</li>`;
  });
  skillsHTML += '</ul>';

  // Añadir el contenido del aside a la tarjeta de contacto en columnas
  contactCard.innerHTML = `
    <div class="contact-card-row">
      <div class="contact-photo">
        ${contactInfoAside.querySelector('.photo').innerHTML}
      </div>
      <div class="contact-personal">
        <h2>Silvia Ramírez Domínguez</h2>
        <p><i class="fas fa-envelope"></i> syradominguez.dev@gmail.com</p>
        <p><i class="fas fa-phone"></i> 640532081</p>
        <p><i class="fab fa-linkedin"></i> linkedin.com/in/syradominguez</p>
        <br />
        <div class="contact-other">
          <h3>Otros Datos de Interés</h3>
          <p>Certificado de discapacidad superior al 33%</p>
          <p>Permiso de conducir B</p>
          <p>Vehículo propio</p>
        </div>
      </div>
      <div class="contact-details">
        ${skillsHTML}
        <h3>Idiomas</h3>
        <p>Inglés: B1</p>
      </div>
    </div>
  `;

  // Crear un contenedor para el contenido adicional
  var additionalContent = document.createElement('div');
  additionalContent.appendChild(contactCard);

  // Añadir el contenido adicional al final del contenido principal
  element.appendChild(additionalContent);

  // Cambiar temporalmente a tema claro para la generación del PDF
  document.body.classList.remove('dark-theme');

  // Generar el PDF
  html2pdf(element, {
    margin: 0.25,
    filename: "CV_Silvia_Ramirez_Dominguez.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  }).then(function () {
    // Restaurar el tema original
    if (isDarkTheme) {
      document.body.classList.add('dark-theme');
    }
    // Eliminar el contenido adicional después de la generación del PDF
    element.removeChild(additionalContent);
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
