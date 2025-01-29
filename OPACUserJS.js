document.addEventListener("DOMContentLoaded", () => {
  const mainContent = document.getElementById("login-maincontent");
  const loginContent = document.getElementById("login-container");

  if (mainContent && loginContent) {
    const isMainContentHidden =
      mainContent.offsetParent === null ||
      getComputedStyle(mainContent).display === "none";

    if (isMainContentHidden) {
      loginContent.classList.remove("col-lg-3");
    }
  } else {
    console.warn(
      "Elemento não encontrado: verifique os IDs 'login-maincontent' e 'login-container'."
    );
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const creditsSection = document.getElementById("opaccredits");
  if (creditsSection) {
    creditsSection.innerHTML += `
      <div class="work_area">
        <h2><br />&Aacute;rea de trabalho - equipe</h2>
        <div class="actions">
          <a href="http://localhost:8080" target="_blank" rel="noopener">
            <button class="btn btn-primary">LOGIN KOHA</button>
          </a>
          <a href="#" target="_blank" rel="noopener">
            <button class="btn btn-primary">
              LOGIN REPOSIT&Oacute;RIO
            </button>
          </a>
        </div>
    `;
  }
});
