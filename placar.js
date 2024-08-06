const placar = document.getElementById('score')
const inputJogador = document.querySelector('#jodador')

const jogadores = JSON.parse(localStorage.getItem('jogadores')) || []

function addJogadorALista(){
    let nome = inputJogador.value
    let recorde = vitorias
    jogadores.push({nome,recorde})
    localStorage.setItem('jogadores',JSON.stringify(jogadores))
    console.log(jogadores)
}

function addPlacar() {
    
    jogadores.sort((a,b)=>b.recorde - a.recorde)

    placar.innerHTML = ` 
        <tr>
            <td></td>
            <td>Name</td>
            <td>Score</td>
        </tr>
    `

    jogadores.forEach((jogador,index)=> {
        placar.innerHTML += `
        <tr>
            <td>${index+1}</td>
            <td>${jogador.nome==''?'Desconhecido':jogador.nome}</td>
            <td>${jogador.recorde}</td>
        </tr>
    `
    });
    
    
}
addPlacar()