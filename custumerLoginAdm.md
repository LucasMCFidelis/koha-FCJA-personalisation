
# Passo a Passo: Personalizando a Página de Login da Interface Administrativa do Koha Usando `IntranetUserJS`

## Pré-requisitos

Antes de começar, certifique-se de ter as permissões administrativas necessárias e acesso ao servidor onde o Koha está instalado.

---

## Etapas

### 1. Configurar as variáveis no System Preferences

1. Acesse o **Koha Staff Interface**.
2. Navegue até **Administração > Preferências do Sistema**.
3. Adicione ou edite as seguintes preferências:
   - `OPACBaseURL` → Defina a URL do OPAC.

---

### 2. Navegar para a área de edição do `IntranetUserJS`

1. No Koha Staff Interface, navegue até **Administração > Personalizações > Javascript do Usuário da Intranet**.
2. Na seção **IntranetUserJS**, você poderá adicionar scripts personalizados que serão executados na página de login da interface administrativa.

---

### 3. Adicionar o código JavaScript personalizado

No campo de edição do **IntranetUserJS**, adicione o seguinte código:

```javascript
$(document).ready(function() {
  const loginContainer = document.getElementById("login");
  if (!loginContainer) {
    return;
  }

  const h1Element = loginContainer.querySelector("h1");
  if (!h1Element) {
    return;
  }

  const OPACBaseURL = "[$Koha.Preference('OPACBaseURL')%]"; // Obtém a URL configurada no System Preferences
  const imgHTML = `<img src="${OPACBaseURL}/custom/logo_fcja.jpeg" width="205" height="205" style="display: block; margin: 20px auto;" />`;

  h1Element.insertAdjacentHTML("afterend", imgHTML);
});
```

Este código realiza a inserção da imagem logo após o elemento `<h1>` na página de login, usando a URL do OPAC configurada nas preferências do Koha.

---

### 4. Salvar as alterações

Após adicionar o código, clique em **Salvar** para aplicar as mudanças.

---

### 5. Verificar as alterações

Recarregue a página de login da interface administrativa no navegador e confirme se a personalização foi aplicada com sucesso.

---

## Aviso ⚠️

O código acima pode eventualmente estar desatualizado. Recomenda-se consultar os arquivos correspondentes para evitar problemas.

---

## Considerações finais

Caso algo não funcione conforme esperado, verifique o código inserido no campo **IntranetUserJS**. Em caso de problemas persistentes, consulte os logs do sistema para identificar possíveis erros:

```bash
sudo tail -f /var/log/koha/opac-error.log
```

Se precisar de suporte adicional, consulte a documentação oficial do Koha ou a comunidade de usuários.

---

Agora, sua personalização da tela de login será realizada de forma mais direta, sem necessidade de editar diretamente os arquivos de template do Koha, utilizando a opção `IntranetUserJS` para inserção do código JavaScript.
