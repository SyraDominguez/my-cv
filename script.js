function toggleLanguage() {
  var elementsEs = document.querySelectorAll('.toggle-lang.es');
  var elementsEn = document.querySelectorAll('.toggle-lang.en');

  elementsEs.forEach(function (element) {
    element.classList.toggle('hidden');
  });

  elementsEn.forEach(function (element) {
    element.classList.toggle('hidden');
  });

  var button = document.querySelector('.actions button');
  if (button.textContent === "Switch to English") {
    button.textContent = "Cambiar a Español";
  } else {
    button.textContent = "Switch to English";
  }
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
