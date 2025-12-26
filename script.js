function mostrarCursos() {
  window.location.href = "index1.html";
}

const form = document.getElementById("contatoForm");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // impede reload da página

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  // validação básica
  if (!nome || !email || !mensagem) {
    alert("Preencha todos os campos.");
    return;
  }

  if (!email.includes("@")) {
    alert("Digite um e-mail válido.");
    return;
  }

  // aqui entraria o envio real (backend)
  alert("Mensagem enviada com sucesso! 👍");

  // limpa o formulário
  form.reset();
});

function toggleDescricao(botao) {
  const descricao = botao.previousElementSibling;

  descricao.classList.toggle("ativa");

  botao.innerHTML = descricao.classList.contains("ativa")
    ? "Mostrar menos ←"
    : "Saiba mais →";
}
