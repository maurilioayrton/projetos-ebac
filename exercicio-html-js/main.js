
const formEbac = document.getElementById('form');

formEbac.addEventListener('reset', function(event){
    location.reload(); 
})

formEbac.addEventListener('submit', function(event){
    event.preventDefault();     
})   
function validaValor(formEbac){
        let campoa = document.getElementById("campoa").value;
        let campob = document.getElementById("campob").value;
        let form = document.getElementById("form");
        if(campob > campoa){
            mostraMsg(true);
        }else{
            mostraMsg(false);
        }
    }
function mostraMsg(valida){
    const mostraMsg = document.getElementById('msg');
    
    if(valida){
        mostraMsg.textContent = `O Formulário está Válido, obrigado!`;
        mostraMsg.className = 'msg true';
    }else{
        mostraMsg.textContent = `O Formulário não está Válido.. verifique se campo (B) é maior que o campo (A)`;
        mostraMsg.className = 'msg false';
    }
    mostraMsg.style.display = 'block';
    setTimeout(function() {
        location.reload();
    }, 10000); // 10000 milissegundos = 10 segundos
}

