// Seleciona TODOS os botoes de curtir e todos os de nao curtir da pagina
const botoesCurtir = document.querySelectorAll(".btn-curtir");
const botoesNaoCurtir = document.querySelectorAll(".btn-nao-curtir");

// Percorre cada botao de curtir, um por um, e da a ele seu proprio
// comportamento (cada article tem o seu botao independente)
botoesCurtir.forEach(function (botao) {

    // Guarda se ESSE botao especifico ja foi clicado ou nao
    let curtiu = false;

    botao.addEventListener("click", function () {
        // Pega o numero (span) que fica dentro deste botao
        let contador = botao.querySelector("span");

        if (curtiu === false) {
            // Primeiro clique: soma 1 e marca como curtido
            contador.textContent++;
            curtiu = true;
            botao.classList.add("ativo");
        } else {
            // Clicou de novo: desfaz a curtida (tira 1)
            contador.textContent--;
            curtiu = false;
            botao.classList.remove("ativo");
        }
    });
});

// Mesma logica para os botoes de "nao curtir"
botoesNaoCurtir.forEach(function (botao) {

    let naoCurtiu = false;

    botao.addEventListener("click", function () {
        let contador = botao.querySelector("span");

        if (naoCurtiu === false) {
            contador.textContent++;
            naoCurtiu = true;
            botao.classList.add("ativo");
        } else {
            contador.textContent--;
            naoCurtiu = false;
            botao.classList.remove("ativo");
        }
    });
});

// Modo escuro: alterna a classe "modo-escuro" no body e troca o icone do botao
const botaoModoEscuro = document.querySelector("#botao-modo-escuro");

botaoModoEscuro.addEventListener("click", function () {
    document.body.classList.toggle("modo-escuro");

    if (document.body.classList.contains("modo-escuro")) {
        botaoModoEscuro.textContent = "☀️";
    } else {
        botaoModoEscuro.textContent = "🌙";
    }
});

// Botao voltar ao topo: ao clicar, rola a pagina de volta para o inicio
const botaoVoltarTopo = document.querySelector("#botao-voltar-topo");

botaoVoltarTopo.addEventListener("click", function () {
    window.scrollTo(0, 0);
});
