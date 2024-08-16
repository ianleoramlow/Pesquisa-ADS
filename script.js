function calcularMedia() {
    // Solicita as três notas ao usuário
    let nota1 = Number(prompt("Digite a primeira nota:"));
    let nota2 = Number(prompt("Digite a segunda nota:"));
    let nota3 = Number(prompt("Digite a terceira nota:"));

    // Calcula a média das três notas
    let media = (nota1 + nota2 + nota3) / 3;

    // Exibe um alerta com a média
    alert("A média das notas é: " + media.toFixed(2));
}