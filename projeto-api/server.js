import app from './app.js';

const PORT = 3000;

app.listen(PORT, () => {
    console.log(
        `Servidor rodando com sucesso em http://localhost:${PORT}`
    );
});