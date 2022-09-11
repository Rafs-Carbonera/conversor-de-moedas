function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmReal = parseFloat(valor);

    var valorEmDolar = valorEmReal / 5.15;
    var valorFixado = valorEmDolar.toFixed(2);
    
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em dólar é : $ " + valorFixado;
    elementoValorConvertido.innerHTML = valorConvertido;
}