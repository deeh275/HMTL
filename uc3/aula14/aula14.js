let formulario = $("#form-cep");

formulario.on("submit", () => {
    event.preventDefault();

    // let cep = $("#cep").val()
    console.log(formulario[0].cep.value);
    // console.log(cep);


    //AJAX - Resquisição de consulta de CEP
    $.ajax({
        //Origem da informação
        "url": "http://cep.republicavirtual.com.br/web_cep.php",
        //Formato da requisição
        "type": "GET",
        //Formato da resposta
        "dataType": "JSON",
        //Quais os parametros que a origem espera
        "data": "cep="+ formulario[0].cep.value +"$formato=JSON",
        //Status de carregamento
        "beforeSend": () => {},
        //status de sucesso
        "success": (resposta) => {
            console.log(resposta.logradouro);
        }
    })
});
