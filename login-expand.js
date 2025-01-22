document.addEventListener("DOMContentLoaded", () => {
  const mainContent = document.getElementById("login-maincontent");
  const loginContent = document.getElementById("login-content");

  if (mainContent && loginContent) {
    const isMainContentHidden =
      mainContent.offsetParent === null ||
      getComputedStyle(mainContent).display === "none";

    if (isMainContentHidden) {
      loginContent.classList.remove("col-lg-3");
    }
  }
});
