# Passo a Passo: Ajustando o Layout e Centralizando o Formulário de Login no OPAC do Koha

## Pré-requisitos

Antes de começar, certifique-se de ter as permissões administrativas necessárias e acesso ao servidor onde o Koha está instalado.

---

## Etapas

### 1. Acessar permissões administrativas

```bash
sudo su
```

Insira a senha do sistema quando solicitado.

---

### 2. Navegar para o diretório dos arquivos a serem editados

```bash
cd ../../usr/share/koha/opac/htdocs/opac-tmpl/bootstrap/en/modules
```

Este é o diretório onde se encontra o arquivo principal da interface do OPAC.

---

### 3. Editar o arquivo `opac-main.tt`

Abra o arquivo em um editor de texto:

```bash
nano opac-main.tt
```

#### 3.1. Adicionar identificadores aos elementos

- **Adicionar** `id="login-maincontent"` ao elemento com a classe `main content`.
  ```html
  <div class="main content" id="login-maincontent"></div>
  ```
- **Adicionar** `id="login-container"` ao elemento pai do elemento com o ID `login`.
  ```html
  <div id="login-container"></div>
  ```
  Salve e feche o arquivo pressionando `CTRL+O`, seguido de `ENTER`, e depois `CTRL+X`.

---

### 4. Atualizar os conteúdos de OPACUserCSS e OPACUserJS na interface administrativa
⚠️ O conteúdo, tanto para OPACUserCSS quanto para OPACUserJS, pode eventualmente estar desatualizado. Recomendasse consultar os arquivos correspondentes para evitar problemas

#### 4.1. Acessar a interface administrativa do Koha

- Faça login no painel administrativo do Koha.

#### 4.2. Navegar até as configurações de aparência

- Vá para: **Ferramentas** > **Configurações do OPAC** > **Preferências do Sistema**.

#### 4.3. Atualizar OPACUserCSS

- Insira o seguinte código no campo de **CSS personalizado**:
  ```css
  .main .maincontent {
    display: none;
  }
  .main #login {
    margin: 0 auto;
    width: 100%;
    max-width: 700px; /* Define uma largura máxima para o formulário */
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
  .main #login #auth {
    width: 100%;
  }
  ```

#### 4.4. Atualizar OPACUserJS

- Insira o seguinte código no campo de **JavaScript personalizado**:

  ```javascript
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
  ```

Salve as alterações.

---

### 5. Verificar as alterações

Recarregue o OPAC no navegador e confirme se o formulário de login está centralizado e com o layout ajustado.

---

## Considerações finais

Caso algo não funcione conforme esperado, verifique novamente as edições realizadas no arquivo `opac-main.tt` e as configurações em OPACUserCSS e OPACUserJS. Reinicie os serviços do Koha se necessário.
