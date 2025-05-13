document.addEventListener("DOMContentLoaded", function () {
    // Pega os nomes dos times da URL
    const params = new URLSearchParams(window.location.search);
    const time1 = params.get("time1");
    const time2 = params.get("time2");

    // Exibe os nomes dos times na página do placar
    document.getElementById("time1-name").textContent = time1;
    document.getElementById("time2-name").textContent = time2;

    // Variáveis de pontos e sets
    let pontosTime1 = 0;
    let pontosTime2 = 0;
    let setsTime1 = 0;
    let setsTime2 = 0;
    let atualSet = 1;  // Controle do set atual

    // Inicializa os sets na página
    let set1Time1 = document.getElementById("set1-time1");
    let set1Time2 = document.getElementById("set1-time2");
    let set2Time1 = document.getElementById("set2-time1");
    let set2Time2 = document.getElementById("set2-time2");
    let set3Time1 = document.getElementById("set3-time1");
    let set3Time2 = document.getElementById("set3-time2");
    let set4Time1 = document.getElementById("set4-time1");
    let set4Time2 = document.getElementById("set4-time2");
    let set5Time1 = document.getElementById("set5-time1");
    let set5Time2 = document.getElementById("set5-time2");

    // Exibe o placar inicial
    let placarTime1 = document.getElementById("placar-time1");
    let placarTime2 = document.getElementById("placar-time2");
    placarTime1.textContent = pontosTime1;
    placarTime2.textContent = pontosTime2;

    // Adiciona um evento de clique aos botões de adicionar pontos
    document.getElementById('add-pontos-time1').addEventListener('click', () => {
        pontosTime1++;
        placarTime1.textContent = pontosTime1;
        verificarVencedor();
    });

    document.getElementById('add-pontos-time2').addEventListener('click', () => {
        pontosTime2++;
        placarTime2.textContent = pontosTime2;
        verificarVencedor();
    });

    // Função para verificar se um time venceu o set
    function verificarVencedor() {
        if (pontosTime1 >= 25 && pontosTime1 - pontosTime2 >= 2) {
            // Time 1 vence o set
            salvarSet(pontosTime1, pontosTime2);
            setsTime1++;
            atualSet++;
            resetarPontos();
            atualizarSets();
        } else if (pontosTime2 >= 25 && pontosTime2 - pontosTime1 >= 2) {
            // Time 2 vence o set
            salvarSet(pontosTime1, pontosTime2);
            setsTime2++;
            atualSet++;
            resetarPontos();
            atualizarSets();
        }

        // Verifica se o jogo terminou (quando algum time vence 3 sets)
        if (setsTime1 === 3 || setsTime2 === 3) {
            finalizarJogo();
        }
    }

    // Função para salvar os pontos do set
    function salvarSet(pontosTime1, pontosTime2) {
        switch (atualSet) {
            case 1:
                set1Time1.textContent = pontosTime1;
                set1Time2.textContent = pontosTime2;
                break;
            case 2:
                set2Time1.textContent = pontosTime1;
                set2Time2.textContent = pontosTime2;
                break;
            case 3:
                set3Time1.textContent = pontosTime1;
                set3Time2.textContent = pontosTime2;
                break;
            case 4:
                set4Time1.textContent = pontosTime1;
                set4Time2.textContent = pontosTime2;
                break;
            case 5:
                set5Time1.textContent = pontosTime1;
                set5Time2.textContent = pontosTime2;
                break;
        }
    }

    // Função para atualizar os valores dos sets
    function atualizarSets() {
        // Removido a condição que incrementava atualSet, pois já é incrementado em verificarVencedor
    }

    // Função para resetar os pontos após a vitória de um set
    function resetarPontos() {
        pontosTime1 = 0;
        pontosTime2 = 0;
        placarTime1.textContent = pontosTime1;
        placarTime2.textContent = pontosTime2;
    }

    // Função para finalizar o jogo
    function finalizarJogo() {
        // Mostra quem foi o vencedor
        const vencedor = setsTime1 === 3 ? time1 : time2;
        document.getElementById("vencedor").textContent = vencedor + " venceu a partida!";

        // Exibe o vencedor na tela
        document.getElementById("placar-final").style.display = "block";

        // Exibe popup com o vencedor
        alert(vencedor + " venceu!!");

        // Esconde os botões e campos após o jogo terminar
        document.getElementById('add-pontos-time1').disabled = true;
        document.getElementById('add-pontos-time2').disabled = true;

        // Opcional: Desabilitar outras interações ou reiniciar o jogo
        // Exemplo: setTimeout(function(){ window.location.reload(); }, 3000); // Recarregar página após 3 segundos.
    }
});
