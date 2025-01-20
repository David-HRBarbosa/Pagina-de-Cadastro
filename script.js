// script.js

document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Seleciona os campos
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value;
  
    // Validações
    if (!validarEmail(email)) {
      exibirMensagem('E-mail inválido. Por favor, insira um e-mail válido.', 'red');
      return;
    }
  
    if (!validarSenha(senha)) {
      exibirMensagem(
        'Senha inválida. A senha deve ter pelo menos 8 caracteres, uma letra maiúscula, um número e um caractere especial.',
        'red'
      );
      return;
    }
  
    exibirMensagem('Cadastro realizado com sucesso!', 'green');
    this.reset(); // Limpa o formulário
  });
  
  // Função para validar e-mail
  function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  
  // Função para validar senha
  function validarSenha(senha) {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(senha);
  }
  
  // Função para exibir mensagem
  function exibirMensagem(mensagem, cor) {
    const mensagemDiv = document.getElementById('mensagem');
    mensagemDiv.textContent = mensagem;
    mensagemDiv.style.color = cor;
  }