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
