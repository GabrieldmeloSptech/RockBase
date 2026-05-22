var database = require("../database/config")


function tentativas(params) {
    
    var sql = `
    SELECT COUNT(banda) as "Tentativas", banda FROM Pontuacao
    GROUP BY banda;
    
    `    
    console.log("Executando a instrução SQL: \n" + sql);
    return database.executar(sql);


}


function pontuacao_bandas(params) {
    
    var sql = `
    
    select b.nome as Jogador, sum(p.pontos) as Pontos from Bd b
join Pontuacao p on p.id_usuario = b.id
group by p.id_usuario
order by Pontos desc
limit 5;

    
    `
    console.log("Executando a instrução SQL: \n" + sql);
    return database.executar(sql);

}


function somakpi(params) {

    var sql = `
    select sum(pontos) as Total from Pontuacao;	
    `
    console.log("Executando a instrução SQL: \n" + sql);
    return database.executar(sql);

}

function partidaskpi(params) {


    var sql = `select count(id_usuario) as Abacate from Pontuacao;`

    console.log("Executando a instrução SQL: \n" + sql);
        return database.executar(sql);
}

    function kpiusuario(idUsuario) {
        
        var sql = `select sum(pontos) as pontuacao from Pontuacao where id_usuario = ${idUsuario}`

        console.log("Executando a instrução SQL: \n" + sql);
            return database.executar(sql);
    }

    function partidasusuario(idUsuario) {
        
        var sql = `select count(id_usuario) as partidas from Pontuacao where id_usuario = ${idUsuario}`

        console.log("Executando a instrução SQL: \n" + sql);
            return database.executar(sql);
    }



module.exports = {
    tentativas,
    pontuacao_bandas,
    somakpi,
    partidaskpi,
    kpiusuario,
    partidasusuario
};