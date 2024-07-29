const validaForm = document.getElementById('form');
const nome = [];
const numeroTelefone = [];

let linhas = '';


validaForm.addEventListener('submit', function(e){
    e.preventDefault();
    adicionarLinha();
    atualizaTabela();
});

function adicionarLinha(){
const inputnome = document.getElementById('nome');
const telefone = document.getElementById('telefone');

if (nome.includes(inputnome.value)) {
    alert(`o Nome: ${inputnome.value} ja foi inserido`);
} else {
    nome.push(inputnome.value);
    numeroTelefone.push(parseFloat(telefone.value));
    let linha = `<tr>`;
linha += `<td>${inputnome.value}</td>`;
linha +=`<td>${telefone.value}</td>`;
linha += `</tr>`;

linhas += linha;
}
inputnome.value = '';
telefone.value = '';
};

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
};

