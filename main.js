function tocaSom (seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        console.log ('Elemento não encontrado ou seletor inválido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    
    const instrumento = tecla.classList[1];
    
    const idAudio = `#som_${instrumento}`;
    
    tecla.onclick = function(){       
        tocaSom(idAudio);
    }

    /* ---Ativando o click das teclas utilizando o teclado--- */
    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter' ){
        tecla.classList.add('ativa');
        }
        
    }

    /* ---Desativando o click das teclas utilizando o teclado--- */
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}

