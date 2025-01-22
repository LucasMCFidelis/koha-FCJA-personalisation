document.addEventListener("DOMContentLoaded", () => {
  const mainContent = document.getElementById("login-maincontent");
  const loginContent = document.getElementById("login-container");

  if (mainContent && loginContent) {
    const isMainContentHidden =
      mainContent.offsetParent === null ||
      getComputedStyle(mainContent).display === "none";

    if (isMainContentHidden) {
      loginContent.style.border = "2px solid red"; // Adiciona uma borda para verificar a seleção
    } else {
      loginContent.style.border = ""; // Remove a borda caso o elemento não esteja oculto
    }
  } else {
    console.warn(
      "Elemento não encontrado: verifique os IDs 'login-maincontent' e 'login-container'."
    );
  }
});
