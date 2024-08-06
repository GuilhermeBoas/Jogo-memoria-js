let playerSequencia = []
let roboSequencia = []


const leitorRobo = () => {
    roboSequencia.forEach((item , index) => {
        setTimeout(()=>{
            let btn = document.querySelector(`.btn-${item}`);
            mudarCor(btn);
        }, index*500);        
    });
}

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
    //registrando sequencia do jogador com sucesso
    if (playerSequencia[cont] == roboSequencia[cont]) {
        //confima se esta igual o resultado - OK
        if (playerSequencia.length == roboSequencia.length){
            console.log('vc ganhou');
            playerSequencia = []
            cont = 0
            vitorias++
            roboSequencia.push(numeroAleatorio(1,9))
            return //break
        }  
        cont++
    } 
    else {
        console.log('errou')
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

// local store

const inputJogador = document.querySelector('#jodador')

