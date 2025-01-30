$(document).ready(function() {
    const loginContainer = document.getElementById("login");
    if (!loginContainer) {
      return;
    }
  
    const h1Element = loginContainer.querySelector("h1");
    if (!h1Element) {
      return;
    }
  
    const OPACBaseURL = "http://localhost"; // Ajuste conforme necessário
    const imgHTML = `<img src="${OPACBaseURL}/custom/logo_fcja.jpeg" width="205" height="205" style="display: block; margin: 20px auto;" />`;
  
    h1Element.insertAdjacentHTML("afterend", imgHTML);
  });
  