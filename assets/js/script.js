function calcular(){

    //Criando variaveis para receber os valores do ID
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;

    //Calculo IMC
    var resultado = (peso / (altura * altura));

    //Variavel para receber apenas 2 casas depois da virgula
    var resultado_final = resultado.toFixed('2')

    //Condição para definir o estado do paciente
    if (resultado_final < 18.50){
        document.getElementById("resultado").innerHTML = "MAGREZA " + resultado_final;
    } else if (resultado_final >= 18.50 && resultado_final <= 24.90) {
        document.getElementById("resultado").innerHTML = "NORMAL " + resultado_final;
    } else if (resultado_final > 25.00 && resultado_final <= 29.90) {
        document.getElementById("resultado").innerHTML = "SOBREPESO " + resultado_final;
    } else if (resultado_final >= 30.00 && resultado_final <= 39.90) {
        document.getElementById("resultado").innerHTML = "OBESIDADE " + resultado_final;
    } else{
        document.getElementById("resultado").innerHTML = "OBESIDADE GRAVE " + resultado_final;
    } 

}