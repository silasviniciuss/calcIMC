function calcular(){

    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;

    var resultado = (peso / (altura * altura));
    var resultado_final = resultado.toFixed('2')

    document.getElementById("resultado").innerHTML = resultado_final;

}