# Exame de Suficiência - Web Servidor

Exame de suficiência da matéria web-servidor - João Vitor Chudek 1925423

## Ferramentas Utilizadas

- Node.js
- SQLite3

## Passo a Passo para Instalação

Primeiramente, clone este repositório em uma pasta. Ao concluir, execute os comandos dentro da pasta criada:

```shell
npm init -y
npm install sqlite3 basic-auth
```

Após este passo, o projeto já está pronto para ser executado, utilizando o comando:
```shell
node src/server.js
```
Assim que receber as mensagens 'Tabela Usuario criada ou já existe.' e 'Tabela Feedback criada ou já existe.', pode abrir o navegador na http://localhost:3000/.

## Funcionalidades Obtidas
Todas as funcionalidades solicitadas foram atendidas conforme o email:

- Uso do padrão MVC para construção do projeto;
- Criação de usuário via formulário;
- Rotas definidas no arquivo 'rotas.js';
- Criação de uma classe 'conexao.js' que é herdada nas classes Model;
- Criação das classes DAO para acesso ao banco de dados;
- Todos os métodos requeridos para a classe feedbackController;
- Usuário 'admin' com senha '123456';
- Todas as rotas protegidas;
- Todas as views com suas respectivas ações.

## Observações do João
- Expus a rota de criação de usuário, pois fiquei na dúvida de como ele iria se cadastrar, se era a partir do usuário admin, ou se o usuário iria ter a liberdade de se registrar. Optei para que o usuário consiga se registrar, mas isso pode ser alterado comentando o if da linha 8 à linha 10 do arquivo 'src/middleware/auth.js'.
    ```javascript
    if (req.url === '/usuarios/cadastrar') {
    return next();
    }
    ```
- Também fiquei na dúvida na view 'feedbacks_view.html', se era para mostrar os feedbacks de todos os usuários, ou do usuário logado, na qual optei por listar apenas os feedbacks do usuário logado, pensando que isso pode ser uma violação se listados todos os feedbacks.