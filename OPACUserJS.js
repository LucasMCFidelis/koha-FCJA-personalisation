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
  if (!window.staffClientBaseURL) {
    console.warn("staffClientBaseURL deve ser definida nas preferências do sistema");
    return;
  }
  if (!window.repositoryBaseURL) {
    console.warn("repositoryBaseURL não esta definida nas preferências do sistema");
  }

  const creditsSection = document.getElementById("opaccredits");
  if (creditsSection) {
    creditsSection.innerHTML += `
      <div class="work_area">
        <h2><br />&Aacute;rea de trabalho - equipe</h2>
        <div class="actions">
          <a href="${window.staffClientBaseURL}" target="_blank" rel="noopener">
            <button class="btn btn-primary">LOGIN KOHA</button>
          </a>
          <a href="${window.repositoryBaseURL}" target="_blank" rel="noopener">
            <button class="btn btn-primary">
              LOGIN REPOSIT&Oacute;RIO
            </button>
          </a>
        </div>
      </div>
    `;
  }
});
