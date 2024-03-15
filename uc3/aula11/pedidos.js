let historico_pedidos = [
    {
        nome_cliente: "David",
        cpf: "852.258.789-55",
        data_nasc: "11/11/1988"
    }
]

let pedidos = [
    {
        id_pedido: 1,
        total: 100.00,
        status: "Pago",
        itens: 2
    },
    {
        id_pedido: 2,
        total: 120.00,
        status: "Pendente",
        itens: 1
    }
]

historico_pedidos.map(dados_cliente => {
    document.getElementById("nome").innerHTML = dados_cliente.nome_cliente
    document.getElementById("cpf").innerHTML = dados_cliente.cpf
    document.getElementById("data-nasc").innerHTML = dados_cliente.data_nasc
})

let divHistorico = document.getElementById("historico");
let aux = "";

pedidos.map(item => {
    aux += "<p> ID Pedido:" + item.id_pedido + "</p>"
    aux += "<p>status:" + item.status + "</p>"
    aux += "<p>Valor Total:" + item.total + "</p>"
    aux += "<p>Qtd (itens):" + item.itens + "</p>"
    aux += "<hr>"
})

divHistorico.innerHTML = aux;