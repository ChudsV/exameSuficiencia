# Exame de Suficiencia - Web Servidor
Exame de suficiência da matéria web-servidor - João Vitor Chudek 1925423

## Ferramentas utilizadas
- Node.js
- SQLite3

## Passo a passo para instalação
Primeiramente, clone esse repositorio em uma pasta. Ao concluir execute os comandos dentro da pasta criada:

~~~SHELL
npm init -y
npm install sqlite3 basic-auth
~~~

Após esse passo, o projeto já está pronto para ser executado, utilizando o comando:

~~~SHELL
node src/server.js
~~~

Assim, que que receber as mensagens 'Tabela Usuario criada ou já existe.' e
'Tabela Feedback criada ou já existe.', pode abrir o navegador na [http://localhost:3000/](http://localhost:3000/).

## Funcionalidades Obtidas
Todas as funcionalidades solicitadas foram atendidas conforme o email:
- Uso do padrão MVC para construção do projeto;
- Criação de usuario via formulario;
- Rotas definidas no arquivo 'rotas.js'
- Criação de uma classe 'conexao.js' que é herdada nas classes Model
- Criação das classes DAO para acesso ao banco de dados;
- Todos os metodos requeridos para a classe feedbackController;
- Usuario 'admin' com senha '123456'.
- Todas as rotas protegidas;
- Todas as views com suas respectivas ações.

## Observações do João
- Expus a rota de criação de usuario, pois fiquei na duvida de como ele iria se cadastrar, se era a partir do usuario admin, ou se o usuario iria ter a liberdade de se registrar. Optei para que o usuario consiga se registrar, mas isso pode ser alterado comentando o if da linha 8 a linha 10 do arquivo 'src/middleware/auth.js'.
~~~JAVASCRIPT
if (req.url === '/usuarios/cadastrar') { 
    return next();
}
~~~
- Também fiquei na dúvida na view 'feedbacks_view.html', se era para mostrar os feedbacks de todos os usuarios, ou do usuario logado, na qual optei por listar apenas os feedback's do usuario logado. Pensando que isso pode ser uma violação se listado todos os feedbacks.


