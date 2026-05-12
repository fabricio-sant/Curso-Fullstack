const formulario = document.getElementById("meuFormulario");

formulario.addEventListener("submit", function(event){
    event.preventDefault();
    
    
    const nome = document.getElementById("nome");
    const telefone = document.getElementById("telefone");
    const sexo = document.getElementById("sexo");
    const checkbox = document.getElementById("s");


    //validação
    if (nome.value.trim() === "") {
        alert("preencha o nome");
        return false;
    }

     if (email.value.trim() === "") {
        alert("preencha o email");
        return false;
    }

     if (telefone.value.trim() === "") {
        alert("preencha o telefone");
        return false;
    }

     if (sexo.value.trim() === "") {
        alert("escolha um sexo");
        return false;
    }

    //Limpar campo
    nome.valuer = "";
    telefone.valuer = "";
    email.value = "";
    checkbox.checked = false;

    alert("Formulario enviado")
});
