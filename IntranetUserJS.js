$(document).ready(function () {
  const loginContainer = document.getElementById("login");
  if (!loginContainer) {
    return;
  }

  const h1Element = loginContainer.querySelector("h1");
  if (!h1Element) {
    return;
  }

  if (!OPACBaseURL) {
    console.log("OPACBaseURL deve ser definida nas preferências do sistema");
    return;
  }

  const imgHTML = (
    <img
      src="${OPACBaseURL}/custom/logo_fcja.jpeg"
      width="205"
      height="205"
      style="display: block; margin: 20px auto;"
    />
  );

  h1Element.insertAdjacentHTML("afterend", imgHTML);
});
