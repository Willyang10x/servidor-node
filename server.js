const http = require('http'); 

const server = http.createServer((req, res) => { 
    console.log(req.url); 

    // Configuração para o navegador exibir os acentos corretamente
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');

    // Estrutura de rotas com o status 200 (Sucesso)
    if (req.url === '/') {
        res.writeHead(200); 
        res.end('Bem-vindo à minha aplicação Node.js!'); 
    } 
    else if (req.url === '/sobre') {
        res.writeHead(200);
        res.end('Esta é a página sobre a aplicação.'); 
    } 
    else if (req.url === '/alunos') {
        res.writeHead(200);
        res.end('Lista de alunos da turma.'); 
    } 
    else if (req.url === '/contato') {
        res.writeHead(200);
        res.end('Entre em contato conosco.'); 
    }
    
    // Tratamento de rotas inexistentes com o status 404 (Not Found)
    else {
        res.writeHead(404); 
        res.end('Erro 404: Página não encontrada.');
    }
}); 

server.listen(3000, () => { 
    console.log('Servidor iniciado na porta 3000'); 
});