function showPage(pageId) {
    // Oculta todas las páginas
    var pages = document.querySelectorAll('.page');
    pages.forEach(function(page) {
      page.style.display = 'none';
    });
  
    // Muestra la página seleccionada
    var selectedPage = document.getElementById(pageId);
    if (selectedPage) {
      selectedPage.style.display = 'block';
    }
  }
  