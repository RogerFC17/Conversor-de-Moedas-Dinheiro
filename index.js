const botao = document.getElementById("botao-dolar");
botao.onclick = () => {
    let real = Number(document.getElementById("real").value);
    let dolar = real / 5;
    document.getElementById("resultado").innerText = `U$ ${dolar.toFixed(2)}`;
}

const botaoEuro = document.getElementById("botao-euro");
botaoEuro.onclick = () => {
    let real = Number(document.getElementById("real").value);
    let euro = real / 6;
    document.getElementById("resultado").innerText = `€ ${euro.toFixed(2)}`;
}
