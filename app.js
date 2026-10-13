// Variável de controle de logs
const EXIBIR_LOGS = true;

const http = require('http');

const server = http.createServer((req, res) => {
    if (EXIBIR_LOGS) console.log('🔄 Recebendo requisição...');
    
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Olá, Mundo!');
    
    if (EXIBIR_LOGS) console.log('✅ Resposta enviada com sucesso!');
});

const PORT = 3000;

server.listen(PORT, () => {
    if (EXIBIR_LOGS) console.log('🚀 Iniciando servidor backend...');
    console.log(`Servidor rodando em http://localhost:${PORT}/`);
});
