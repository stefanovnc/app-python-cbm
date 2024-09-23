function add_material(){
    container = document.getElementById('form-material')

    html = "<br>  <div class='row'> <div class='col-md'> <input type='text' placeholder='Nome' class='form-control' name='nome' > </div> <div class='col-md'><input type='text' placeholder='Patente' class='form-control' name='patente' ></div> <div class='col-md'> <input type='text' placeholder='Email' class='form-control' name='email'> </div> </div>"

    container.innerHTML += html
}

function exibir_form(tipo){

    add_usuario = document.getElementById('adicionar-usuario')
    att_usuario = document.getElementById('att_usuario')

    if(tipo == "1"){
        att_usuario.style.display = "none"
        add_usuario.style.display = "block"

    }else if(tipo == "2"){
        add_usuario.style.display = "none";
        att_usuario.style.display = "block"
    }

}


function dados_usuario(){
    usuario = document.getElementById('usuario-select')
    csrf_token = document.querySelector('[name=csrfmiddlewaretoken]').value
    id_usuario = usuario.value

    data = new FormData()
    data.append('id_usuario', id_usuario)

    fetch("/usuarios/atualiza_usuario/",{
        method: "POST",
        headers: {
            'X-CSRFToken': csrf_token,
        },
        body: data

    }).then(function(result){
        return result.json()
    }).then(function(data){
        document.getElementById('form-att-usuario').style.display = 'block'
        
        id = document.getElementById('id')
        id.value = data['usuario_id']

        nome = document.getElementById('nome')
        nome.value = data['usuario']['nome']

        patente = document.getElementById('patente')
        patente.value = data['usuario']['patente']

        cpf = document.getElementById('cpf')
        cpf.value = data['usuario']['cpf']

        email = document.getElementById('email')
        email.value = data['usuario']['email']

        div_materiais = document.getElementById('materiais')

        for(i=0; i<data['materiais'].length; i++){
            div_materiais.innerHTML += "\<form action='/usuarios/update_material/" + data['materiais'][i]['id'] +"' method='POST'>\
                <div class='row'>\
                        <div class='col-md'>\
                            <input class='form-control' name='material' type='text' value='" + data['materiais'][i]['fields']['material'] + "'>\
                        </div>\
                        <div class='col-md'>\
                            <input class='form-control' name='placa' type='text' value='" + data['materiais'][i]['fields']['placa'] + "'>\
                        </div>\
                        <div class='col-md'>\
                            <input class='form-control' type='text' name='ano' value='" + data['materiais'][i]['fields']['ano'] + "' >\
                        </div>\
                        <div class='col-md'>\
                            <input class='btn btn-lg btn-success' type='submit'>\
                        </div>\
                    </form>\
                    <div class='col-md'>\
                        <a href='/usuarios/excluir_material/"+ data['materiais'][i]['id'] +"' class='btn btn-lg btn-danger'>EXCLUIR</a>\
                    </div>\
                </div><br>"
        }
        
    })


}


function update_usuario(){
    nome = document.getElementById('nome').value
    patente = document.getElementById('patente').value
    email = document.getElementById('email').value
    cpf = document.getElementById('cpf').value
    id = document.getElementById('id').value

    fetch('/usuarios/update_usuario/' + id, {
        method: 'POST',
        headers: {
            'X-CSRFToken': csrf_token,
        },
        body: JSON.stringify({
            nome: nome,
            patente: patente,
            email: email,
            cpf: cpf,
        })

    }).then(function(result){
        return result.json()
    }).then(function(data){

        if(data['status'] == '200'){
            nome = data['nome']
            patente = data['patente']
            email = data['email']
            cpf = data['cpf']
            console.log('Dados alterado com sucesso')
        }else{
            console.log('Ocorreu algum erro')
        }

    })

}