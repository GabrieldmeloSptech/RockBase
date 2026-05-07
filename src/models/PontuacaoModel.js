var database = require("../database/config")


function inserirPontuacao(id_usuario, banda, pontos) {
     console.log("ACESSEI O MODEL PONTUACAO \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function inserirPontuacao(): ", id_usuario, banda, pontos)  
     
        console.log("Executando a instrução SQL: \n" + sql);
    
        var sql = `INSERT INTO Pontuacao (id_usuario, banda, pontos) VALUES (${id_usuario}, '${banda}', ${pontos})`

return database.executar(sql)

        

}

 function listarPorUsuario (idUsuario) {
        var sql = `
            SELECT * FROM Pontuacao
            WHERE id_usuario = ?
            ORDER BY data_registro DESC
        `
        return database.query(sql)
    }



        module.exports = {inserirPontuacao, listarPorUsuario}