import app from './app';

const port = 3000;

app.get("/", (request, response) => {
    return response.json({ message: "Hello, seja bem-vindo ao sistema de gerenciamento de filas!" });
});

app.listen(3000, () => {
    console.log(`Listening on port ${port}`);
});