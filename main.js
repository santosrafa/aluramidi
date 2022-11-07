function tocaSom (idElementoAudio){
    document.querySelector(idElementoAudio).play();
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

