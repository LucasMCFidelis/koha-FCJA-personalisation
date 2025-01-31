# Passo a Passo: Adicionando a Seção "work_area" no OPAC do Koha

## Pré-requisitos
Antes de começar, certifique-se de que você possui:
- Acesso ao servidor onde o **Koha** está instalado.
- Permissões para editar templates e adicionar scripts personalizados.

---

## Etapas

### 1. Configurar a URL da Interface Administrativa no System Preferences
1. Acesse o **Koha Staff Interface**.
2. Navegue até **Administração > Preferências do Sistema**.
3. Encontre a preferência `staffClientBaseURL` e defina a URL correspondente.
4. Clique em **Salvar todas as preferências.**

---

### 2. Editar o arquivo `opac-main.tt`
1. Acesse o terminal do servidor onde o Koha está instalado.
2. Navegue até o diretório dos templates do OPAC:
   ```bash
   cd /usr/share/koha/opac/htdocs/opac-tmpl/bootstrap/en/modules
   ```
3. Abra o arquivo `opac-main.tt` em um editor de texto:
   ```bash
   nano opac-main.tt
   ```
4. Adicione o seguinte código ao final do documento:
   ```html
   <script>
     var staffClientBaseURL = "[% Koha.Preference('staffClientBaseURL') %]";
     console.log("staffClientBaseURL:", staffClientBaseURL);
     window.staffClientBaseURL = staffClientBaseURL;
   </script>
   ```
5. Salve e feche o arquivo pressionando `CTRL+O`, seguido de `ENTER`, e depois `CTRL+X`.
6. Reinicie o Koha para aplicar as alterações:
   ```bash
   sudo systemctl restart koha-common
   ```

---

### 3. Adicionar o código no OPACUserJS
1. No **Koha Staff Interface**, navegue até **Administração > Personalizações > Javascript do Usuário do OPAC**.
2. Na seção **OPACUserJS**, adicione o seguinte código:
   
   ```javascript
   document.addEventListener("DOMContentLoaded", () => {
     if (!window.staffClientBaseURL) {
       console.warn("staffClientBaseURL deve ser definida nas preferências do sistema");
       return;
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
             <a href="#" target="_blank" rel="noopener">
               <button class="btn btn-primary">
                 LOGIN REPOSIT&Oacute;RIO
               </button>
             </a>
           </div>
         </div>
       `;
     }
   });
   ```

3. Clique em **Salvar** para aplicar as mudanças.

---

### 4. Verificar as alterações
- Acesse a página inicial do OPAC e verifique se a seção "&Aacute;rea de trabalho - equipe" foi adicionada corretamente.
- Caso não apareça, verifique o console do navegador (`F12` > `Console`) para eventuais mensagens de erro.

---

## Considerações finais
Caso algo não funcione conforme esperado:
- Verifique se a preferência `staffClientBaseURL` foi corretamente definida nas configurações do Koha.
- Confirme se o arquivo `opac-main.tt` foi editado corretamente.
- Consulte os logs do sistema para identificar possíveis erros:
  ```bash
  sudo tail -f /var/log/koha/opac-error.log
  ```

Agora, sua personalização da seção "work_area" estará aplicada ao OPAC do Koha! 🚀

