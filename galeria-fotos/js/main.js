$(document).ready(function(){ // essa função executa o Jquery que está no HTML da pagina
    $('header button').click(function(){
        $('form').slideDown(); //abre o formulário que deixamos ele como none la no CSS
    });
    $('#botao-cancelar').click(function (e) { 
        $('form').slideUp(); //abre o formulário quando o botão cancelar com ID botao-cancelar no body>form é clicado
        
    });
    $('form').on('submit', function(e) { // remove função que atulaiza pagina quando clica no botão submite
        e.preventDefault();
        const enderecoDaNovaImagem = $('#enderço-imagem-nova').val(); // adiciona o evendo de submit numa variavel quando clica no botão de submeter onde seletor é igual "enderço-imagem-nova"
        const novoItem = $('<li style="display:none"></li>'); // adiciona um novo item li numa variavel
        $(`<img src="${enderecoDaNovaImagem}"^/>`).appendTo(novoItem);//o appendTo adiciona o item recebido da variavel enderecoDaNovaImagem e adiciona na entre o li da variavel novoitem
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem tamanho real">
                    Ver imagem tamanho real
                </a>
            </div>`
        ).appendTo(novoItem);
        $(novoItem).appendTo('ul');//adiciona tudo que foi feito da linha 11 até a 20 e monta numa nova UL com LI e DIV de acordo com o link que foi inserido no formulário
        $(novoItem).fadeIn(1000); // ao colocaro do display none na linha 12 ele não aparece até que a gente chame a função fadeIN
        $('#enderço-imagem-nova').val('');//limpa o formulário quando onde recebe a url toda vez q clicar no botão de adicionar

    } )
});

