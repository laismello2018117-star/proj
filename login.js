document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); //Impede o envio tradicional do formulário

  //Obtém os valores dos campos email e senha e remove os espaços extras
  let email = document.getElementById("email").value.trim();
  let senha = document.getElementById("senha").value.trim();

  //Seleciona os elementos de erro e mensagens
  let erroEmail = documentElementById("erroEmail");
  let erroSenha = documentElementById("erroSenha");
  let mensagemErro = documentElementById("mensagemErro");
  let mensagemSucesso = documentElementById("mensagemSucesso");

  //Limpa as mensagens gravadas anteriormente
  erroEmail.textContent = "";  
  erroSenha.textContent = "";
  mensagemErro.textContent = "";
  mensagemSucesso.textContent = "";

  //Recupera os dados do usuário cadastrado no localStorage e converte de JSON para objeto
  let usuarioCadastrado = JSON.parse(localStorage.getItem("usuarioCadastrado"));

  //Se não houver usuário cadastrado, exibe a mensagem de erro
  if (!usuarioCadastrado) {
      mensagemErro.textContent = "Nenhum usuário cadastrado!";
      return;
  }

  //Verifica se o e-mail digitado corresponde ao e-mail cadastrado
  if (email !== usuarioCadastrado.email) {
      erroEmail.textContent = "E-mail não encontrado!";
      return;
  }

  //Verifica se a senha digitada é igual a senha cadastrada
  if (senha !== usuarioCadastrado.senha) {
      erroSenha.textContent = "Senha incorreta!";
      return;
  }

  //Caso esteja tudo certo, exibe uma mensagem de sucesso e redireciona para o dashboard
  mensagemSucesso.textContent = "Login realizado com sucesso!";
  setTimeout(() => {
      window.location.href = "dashboard.html"; //Redireciona após 3 segundos
  }, 3000);
});


document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); //Impede o envio tradicional do formulário

  //Obtém os valores dos campos email e senha e remove os espaços extras
  let email = document.getElementById("email").value.trim();
  let senha = document.getElementById("senha").value.trim();

  //Seleciona os elementos de erro e mensagens
  let erroEmail = documentElementById("erroEmail");
  let erroSenha = documentElementById("erroSenha");
  let mensagemErro = documentElementById("mensagemErro");
  let mensagemSucesso = documentElementById("mensagemSucesso");

  //Limpa as mensagens gravadas anteriormente
  erroEmail.textContent = "";  
  erroSenha.textContent = "";
  mensagemErro.textContent = "";
  mensagemSucesso.textContent = "";

  //Recupera os dados do usuário cadastrado no localStorage e converte de JSON para objeto
  let usuarioCadastrado = JSON.parse(localStorage.getItem("usuarioCadastrado"));

  //Se não houver usuário cadastrado, exibe a mensagem de erro
  if (!usuarioCadastrado) {
      mensagemErro.textContent = "Nenhum usuário cadastrado!";
      return;
  }

  //Verifica se o e-mail digitado corresponde ao e-mail cadastrado
  if (email !== usuarioCadastrado.email) {
      erroEmail.textContent = "E-mail não encontrado!";
      return;
  }

  //Verifica se a senha digitada é igual a senha cadastrada
  if (senha !== usuarioCadastrado.senha) {
      erroSenha.textContent = "Senha incorreta!";
      return;
  }

  //Caso esteja tudo certo, exibe uma mensagem de sucesso e redireciona para o dashboard
  mensagemSucesso.textContent = "Login realizado com sucesso!";
  setTimeout(() => {
      window.location.href = "dashboard.html"; //Redireciona após 3 segundos
  }, 3000);
});





























