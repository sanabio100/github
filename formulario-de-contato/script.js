function submitForm() {
    // Validar campos do lado do cliente
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
  
    if (name === '' || email === '' || message === '') {
      alert('Por favor, preencha todos os campos.');
      return;
    }
  
    // Enviar dados para o servidor usando AJAX
    $.ajax({
      type: 'POST',
      url: 'process.php',
      data: {
        name: name,
        email: email,
        message: message
      },
      success: function(response) {
        document.getElementById('responseMessage').innerHTML = response;
      },
      error: function(error) {
        document.getElementById('responseMessage').innerHTML = 'Erro ao enviar mensagem.';
      }
    });
  }
  