const atualizarDados = () => {
  // Criando uma variável para o tbody
  let dados = document.getElementById("itens");

  // Zerando o tbody se houver dados
  dados.innerHTML = "";

  // Gerando novos conteúdos aleatório
  for (let i = 0; i < 5; i++) {
    // Criando variável para valor aleatório
    let preco = Math.random() * 100;

    // Criando uma variável para um elemento tr(dados da tabela)
    let elemento = "";

    // Craindo listra de cor diferente para as linhas impares
    if (i % 2 != 0) {
      elemento = "<tr class='listra'>";
    } else {
      elemento = "<tr>";
    }

    // Colocando os itens na linha(tr)
    elemento += `<td>Produto ${i} </td>
        <td>R$ ${preco.toFixed(2)}</td>`;

    dados.innerHTML += elemento;
  }
};
