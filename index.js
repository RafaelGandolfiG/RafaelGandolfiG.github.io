// Carrega os dados salvos (ou cria arrays vazios se ainda não existir)
let emails = JSON.parse(localStorage.getItem("emails")) || [];
let senhas = JSON.parse(localStorage.getItem("senhas")) || [];

// ====== LOGIN ======
function login() {
  let nome = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;

  const indice = emails.indexOf(nome);

  if (indice !== -1 && senhas[indice] === senha) {
    window.location.href = "home.html";
  } else {
    alert("Email ou senha incorretos!");
  }
}

const botaoLogin = document.getElementById("login");
if (botaoLogin) botaoLogin.onclick = login;

// ====== IR PARA CRIAR CONTA ======
function criarConta() {
  window.location.href = "criar.html";
}

const botaoCriar = document.getElementById("criarConta");
if (botaoCriar) botaoCriar.onclick = criarConta;

// ====== CRIAR CONTA ======
function add() {
  let nome = document.getElementById("email1").value;
  let senha = document.getElementById("senha1").value;

  if (emails.includes(nome)) {
    alert("Este email já foi cadastrado!");
  } else {
    emails.push(nome);
    senhas.push(senha);

    localStorage.setItem("emails", JSON.stringify(emails));
    localStorage.setItem("senhas", JSON.stringify(senhas));

    alert("Conta criada com sucesso!");
    window.location.href = "index.html";
  }
}

const botaoLancar = document.getElementById("lançar");
if (botaoLancar) botaoLancar.onclick = add;