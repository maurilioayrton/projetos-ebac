const validaForm = document.getElementById('form');
const aprovado = `<img src="imagens/aprovado.jpg" alt="Emoji">`;
const reprovado = `<img src="imagens/reprovado.jpg" alt="Emoji">`;
const atividades = [];
const notas = [];
const spanAprovado = `<span class="resultado aprovado">Aprovado</span>`;
const spanReprovado = `<span class="resultado reprovado">Reprovado</span>`;

let linhas = '';


validaForm.addEventListener('submit', function(e){
    e.preventDefault();
    adicionarLinha();
    atualizaTabela();
    atualizarMedia();  

});

function adicionarLinha(){
const inputNomeAtividade = document.getElementById('nomeAtividade');
const inputNota = document.getElementById('notaAluno');

if (atividades.includes(inputNomeAtividade.value)) {
    alert(`A atividade: ${inputNomeAtividade.value} ja foi inserida`);
} else {
    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNota.value));
    let linha = `<tr>`;
linha += `<td>${inputNomeAtividade.value}</td>`;
linha +=`<td>${inputNota.value}</td>`;
linha += `<td>${inputNota.value >= 7 ? aprovado : reprovado}</td>`;
linha += `</tr>`;

linhas += linha;
}



inputNomeAtividade.value = '';
inputNota.value = '';
};

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
};

function atualizarMedia() {
    const mediaFinal = calculaMediaFinal();
    document.getElementById('media-final-valor').innerHTML= mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= 7 ? spanAprovado : spanReprovado;
    corpoTabela.innerHTML = linhas;

};

function calculaMediaFinal(){
    let somaDasNotas = 0;
    for (let i = 0; i<notas.length; i++){
        somaDasNotas += notas[i];

    }
    return somaDasNotas / notas.length;
};