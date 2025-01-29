# Passo a Passo: Personalizando a Página de Login da Interface Administrativa do Koha

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

### 2. Acessar permissões administrativas

```bash
sudo su
```

Insira a senha do sistema quando solicitado.

---

### 3. Navegar para o diretório dos arquivos a serem editados

```bash
cd ../../usr/share/koha/intranet/htdocs/intranet-tmpl/prog/en/modules
```

Este é o diretório onde se encontra o arquivo principal da interface administrativa.

---

### 4. Editar o arquivo `auth.tt`

Abra o arquivo em um editor de texto:

```bash
nano auth.tt
```

#### 4.1. Adicionar personalização após o elemento `<h1>`

Localize o elemento `<h1>` no código e adicione o seguinte trecho de HTML logo após:

```html
<center>
  <img
    src="[% Koha.Preference('OPACBaseURL') %]/custom/logo_fcja.jpeg"
    alt="Logo FCJA"
    height="205"
    width="205"
  />
</center>
```

Salve e feche o arquivo pressionando `CTRL+O`, seguido de `ENTER`, e depois `CTRL+X`.

---

### 5. Reiniciar os serviços do Koha (se necessário)

Se as alterações não forem refletidas imediatamente, reinicie os serviços do Koha:

```bash
sudo systemctl restart koha-common
```

---

### 6. Verificar as alterações

Recarregue a página de login da interface administrativa no navegador e confirme se a personalização foi aplicada com sucesso.

---

## Considerações finais

Caso algo não funcione conforme esperado, verifique novamente as edições realizadas no arquivo `auth.tt`. Em caso de problemas persistentes, consulte os logs do sistema para identificar possíveis erros:

```bash
sudo tail -f /var/log/koha/opac-error.log
```

Se precisar de suporte adicional, consulte a documentação oficial do Koha ou a comunidade de usuários.

