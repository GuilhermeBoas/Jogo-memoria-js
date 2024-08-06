let playerSequencia = []
let roboSequencia = []




const numeroAleatorio = (min, max) => {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

const mudarCor = (botao) => {
    botao.classList.add('pressionado');
    setTimeout(() => botao.classList.remove('pressionado'), 350);
}

let cont = 0
let vitorias = 0
const registro = (num) => {
    let btn = document.querySelector(`.btn-${num}`)
    mudarCor(btn)
    playerSequencia.push(parseInt(btn.textContent))

    if (playerSequencia[cont] == roboSequencia[cont]) {
        
        if (playerSequencia.length == roboSequencia.length){
            //alert('parabens,vc acertou');
            playerSequencia = []
            cont = 0
            vitorias++
            roboSequencia.push(numeroAleatorio(1,9))
            return 
            //vamos lá guilherme do futuro: 1- o cont: ele aumenta a cada click do player em qualquer dos botões, para confimar que ambas as listas do jogo estejam comparando o mesmo index, ao chegar no final do lenght da lista reseta tanto a lista do player como a cont  // 
        }  
        cont++
    } 
    else {
        alert('sinto muito ,vc errou')
        addJogadorALista()//fazer if se o jogador ja esta na lista
        addPlacar()
        console.log(`Recorde ${vitorias}`)
        playerSequencia = []
        roboSequencia = []
        cont = 0
        vitorias = 0
         
    }
    
}

const inicio = () => {
    if (roboSequencia.length == 0) {
        roboSequencia.push(numeroAleatorio(1,9))
    }
    //let btn = document.querySelector(`.btn-${numeroInical}`)
    //
    //console.log(roboSequencia)
    leitorRobo()
}

const leitorRobo = () => {
    roboSequencia.forEach((item , index) => {
        setTimeout(()=>{
            let btn = document.querySelector(`.btn-${item}`);
            mudarCor(btn);
        }, index*500);        
    });
}
// local store
