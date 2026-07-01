window.alert("bem vindo!")
window.confirm("Você têm cautela que deseja enter nesse site?")
function mudar_text(){ 
    window.document.getElementById("titulo-form").innerText = "Alterei o titulo";
}
function mudar_cor(){
    window.document.getElementById("titulo-form").style.color="red";
}
function resetacor(){
    window.document.getElementById("titulo-form").style.color="black";
}

function getInput(){ 
    return{ 
        nome_usuario: window.document.getElementById("name"), 
        email_usuario: window.document.getElementById("email"), 
        senha_usuario: window.document.getElementById("senha"), 
    } 
} 

function getValores({nome_usuario, email_usuario, senha_usuario}){ 
    return{
        nome: nome_usuario.value.trim(), 
        email: email_usuario.value.trim(), 
        senha: senha_usuario.value.trim(), 
    } 
} 

document.addEventListener('DOMContentLoaded', function(){ 
    const BotaoEnviar = document.getElementById("btnEnviar"); 
    if(!BotaoEnviar){ return; } 
    BotaoEnviar.addEventListener('click', function(Event){ 
        Event.preventDefault(); 
        const Inputs = getInput(); 
        const dados = getValores(Inputs); 
        console.log("Inputs:", Inputs); 
        console.log("Dados:", dados); 
        window.location.href = `Resultado.html?nome=${encodeURIComponent(dados.nome)}&email=${encodeURIComponent(dados.email)}&senha=${encodeURIComponent(dados.senha)}`; 
    }); 
}); 

function mostrarResultado(){ 
    const Params = new URLSearchParams(window.location.search); 
    const nome = Params.get('nome'); 
    const email = Params.get('email'); 
    const senha = Params.get('senha'); 
    const resultadoDiv = document.getElementById('exibir_resultado'); 
    if (resultadoDiv) {
        resultadoDiv.innerHTML = `<p>Nome: ${nome}</p><p>Email: ${email}</p><p>Senha: ${senha}</p>`; 
    }
}