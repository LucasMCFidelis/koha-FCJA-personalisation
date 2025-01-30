# Backup e Restauração do Koha

Este documento explica como realizar o backup e a restauração do sistema Koha, incluindo o banco de dados e os arquivos do sistema.

---

## 1️⃣ Criar o Diretório de Backup
O backup será armazenado em `/var/backups/koha`. Antes de iniciar, crie o diretório e defina as permissões adequadas:

```bash
sudo mkdir -p /var/backups/koha
sudo chmod 700 /var/backups/koha  # Somente root pode acessar
```

---

## 2️⃣ Verificar o Nome do Banco de Dados
Antes de realizar o backup, verifique o nome correto do banco de dados utilizado pelo Koha. Para isso, execute:

```bash
mysql -u root -p -e "SHOW DATABASES;"
```

Se não souber o nome exato, verifique o arquivo de configuração do Koha:

```bash
cat /etc/koha/sites/library/koha-conf.xml | grep "<database>"
```

Isso ajudará a identificar o nome correto do banco de dados.

---

## 3️⃣ Fazer Backup do Banco de Dados
Para exportar o banco de dados do Koha:

```bash
mysqldump -u root -p koha_library > /var/backups/koha/koha_backup_$(date +%F).sql
```

- Substitua `koha_library` pelo nome real do banco de dados.
- O `$(date +%F)` adiciona a data no formato `YYYY-MM-DD`.

---

## 4️⃣ Fazer Backup dos Arquivos do Koha
Para compactar os arquivos do sistema:

```bash
tar -czvf /var/backups/koha/koha_files_$(date +%F).tar.gz /usr/share/koha
```

Isso gera um arquivo `.tar.gz` com todos os arquivos do Koha.

---

## 5️⃣ Automação com Cronjob (Opcional)
Se quiser rodar o backup automaticamente todos os dias às 2h da manhã:

```bash
sudo crontab -e
```

Adicione a seguinte linha no final do arquivo:

```bash
0 2 * * * mysqldump -u root -p'SUA_SENHA' koha_library > /var/backups/koha/koha_backup_$(date +%F).sql && tar -czvf /var/backups/koha/koha_files_$(date +%F).tar.gz /usr/share/koha
```

Isso garantirá que o backup seja feito diariamente de forma automática.

---

## 6️⃣ Como Restaurar o Backup

### Restaurar o Banco de Dados
Para restaurar um backup do banco de dados:

```bash
mysql -u root -p koha_library < /var/backups/koha/koha_backup_YYYY-MM-DD.sql
```

Substitua `YYYY-MM-DD` pela data do backup que deseja restaurar.

### Restaurar os Arquivos do Koha

```bash
tar -xzvf /var/backups/koha/koha_files_YYYY-MM-DD.tar.gz -C /
```

Isso restaurará todos os arquivos do sistema.

---

## 7️⃣ Verificação dos Backups
Para garantir que os backups foram criados corretamente, liste os arquivos:

```bash
ls -lh /var/backups/koha/
```

Se precisar encontrar um backup específico:

```bash
find /var/backups/koha/ -name "koha_backup_*.sql"
find /var/backups/koha/ -name "koha_files_*.tar.gz"
```

---

## 8️⃣ Conclusão
Seguindo esse guia, você garantirá a segurança dos seus dados no Koha. Para maior proteção, recomenda-se armazenar uma cópia externa dos backups, como em outro servidor ou na nuvem.
