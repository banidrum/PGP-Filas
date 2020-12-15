import app from './app';

import connection from "./database/database";
import Usuario from "./database/Usuario"

const port = 3000;

app.get("/", (request, response) => {

    // Usuario.create({
    //     name:'Jod fedlet',
    //     email:'jodfedlet@gmail.com',
    //     matricula:'17111055'
    // }).then(()=>{
    //     console.log('cadastrado com sucesso')
    // }).catch(()=>{
    //     console.error('Houve um erro ao cadastrar')
    // })

    return response.json({ message: "Hello, seja bem-vindo ao sistema de gerenciamento de filas!" });
});

app.listen(3000, () => {
    console.log(`Listening on port ${port}`);
});