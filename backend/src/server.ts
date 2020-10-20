import express, { json } from 'express';

const app = express();

app.use(json());

app.get("/", (request, response) => {
    return response.json({ message: "Hello, seja bem-vindo ao sistema de gerenciamento de filas!" });
});

app.listen(3333,()=>{
    console.log("Servidor está rodando em http://localhost:3333");
});