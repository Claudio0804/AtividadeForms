function calcular_soma() {
    let valorA = document.getElementById("txtValorA").value;
    let valorB = document.getElementById("txtValorB").value;
    if (valorA === "") {
        alert(`Informe o valor A`)
    }
    else if (valorB === "") {
        alert(`Informe o valor B`)
    }
    else {
        var valorFinal = Number(valorA) / (Number(valorB) * Number(valorB));
        document.getElementById("txtSoma").value = valorFinal;
    }
    const classificacao = document.getElementById("classificacao")
    classificacao.style.display = "block"
    let classificacaoFinal = `${valorFinal < 17 ? "Muito abaixo do peso" : valorFinal < 18.5 ? "Abaixo do peso" : valorFinal < 25 ? "Peso normal" : valorFinal < 30 ? "Sobrepeso" : valorFinal < 35 ? "Obesidade grau I" : valorFinal < 40 ? "Obesidade grau II" : valorFinal > 40 ? "Obesidade grau III" : "Insira uma resposta valida!"}`
}

function limpar_tudo() {
    document.getElementById("txtValorA").value = "";
    document.getElementById("txtValorB").value = "";
    document.getElementById("txtSoma").value = "";
}

