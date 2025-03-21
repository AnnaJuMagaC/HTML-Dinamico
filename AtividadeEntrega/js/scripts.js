/*--------------------------------------Atividade 01------------------------------------------------*/
const ligar = () => {
  let lampada = document.getElementById("lampada");

  // lampada.src = "img/acesa.jpg";

  if (lampada.src.includes("apagada.jpg")) lampada.src = "img/acesa.jpg";
  else lampada.src = "img/apagada.jpg";
};

/*--------------------------------------Atividade 02------------------------------------------------*/
const gerarImagem = () => {
  let quantidadeImg = document.getElementById("inQtdImg").value;
  let canvas = document.getElementById("canvas");
  canvas.innerHTML = "";

  if (quantidadeImg <= 0)
    alert("O campo quantidade não pode estar nulo ou negativo!");
  else {
    for (let index = 1; index <= quantidadeImg; index++) {
      canvas.innerHTML += "<img src= 'img/Batman.png' alt=''>";
    }
  }
};

/*--------------------------------------Atividade 03------------------------------------------------*/

const validaForm = () => {
  let formulario = document.getElementById("frmRegistro");
  let divMensagem = document.getElementById("mensagem-erro");
  let mensagem = "";
  let erro = false;

  let data = formulario.inData.value;
  if (data == "") {
    mensagem += "O campo de data não pode estar vazio!";
    erro = true;
  }

  let nome = formulario.inCli.value;
  if (nome.length < 5) {
    mensagem += "O campo não pode ter menos de 5 caractéres!";
    erro = true;
  }

  let telefone = formulario.inFone.value;
  if (telefone == "") {
    mensagem += "O campo do telefone não pode estar vazio!";
    erro = true;
  }

  let email = formulario.inMail.value;
  if (email == "") {
    mensagem += "O campo de e-mail não pode estar vazio!";
    erro = true;
  }

  let produto = formulario.inProd.value;
  if (produto == "") {
    mensagem += "O campo do produto não pode estar vazio!";
    erro = true;
  }

  let quantidade = formulario.inQtd.value;
  if (quantidade == "") {
    mensagem += "O campo da quantidade não pode estar vazio!";
    erro = true;
  }

  let valor = formulario.inVal.value;
  if (valor == "") {
    mensagem += "O campo do valor unitário não pode estar vazio!";
    erro = true;
  }

  if (erro == true) {
    divMensagem.style.display = "block";
    divMensagem.innerText = mensagem;
  }
};
//----------------------------------------Correção Atividade 03------------------------------------------
/*const validaForm = () => {
  let erro = document.getElementById("mensagem-erro");
  erro.innerHTML = "";
  
  let nome = inCli;
  let data = inData;
  let fone = inFone;
  let mail = inMail;
  let prod = inProd;
  let qtd = inQtd;
  let val = inVal;


  switch (true) {
    case nome.value.trim() == "" ||
      data.value == "" ||
      fone.value == "" ||
      mail.value == "" ||
      prod.value == "" ||
      qtd.value == "" ||
      val.value == "":
      erro.style.display = "block";
      erro.innerHTML = "Erro: O campo não pode estar vazio!";
      break;


    case val.value < 0 || qtd.value < 0:
      erro.style.display = "block";
      erro.innerHTML = "Erro: Este campo não pode ser negativo!";


      break;


    case nome.value.trim().length < 5 || prod.value.trim().length < 5:
      erro.innerHTML = "O campo texto não pode ter menos que 5 caracteres!";
      erro.style.display = "block";
      break;


    default:
      break;
  }
};*/

/*--------------------------------------Atividade 04------------------------------------------------*/
const calcular = () => {
  let valPedido = inValorPedido.value;
  let perDesconto = 0;
  let valorDesconto = 0;
  let valFinal = 0;

  if (valPedido >= 2000) {
    perDesconto = 1.5;
    alert(">2000");
  } else if (valPedido >= 1500) {
    perDesconto = 1.0;
    alert(">1500");
  } else if (valPedido >= 1000) {
    perDesconto = 0.8;
    alert(">1000");
  } else if (valPedido >= 500) {
    perDesconto = 0.5;
    alert(">500");
  } else {
    perDesconto = 0;
    alert("menor que 500");
  }

  valorDesconto = (valPedido * perDesconto) / 100;
  alert(valorDesconto);
  valFinal = valPedido - valorDesconto;

  inPercDesc.value = perDesconto;
  inValDesc.value = valorDesconto.toFixed(2);
  inValFinal.value = valFinal.toFixed(2);
};
