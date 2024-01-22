<?php
// Validar campos do lado do servidor
if (empty($_POST['name']) || empty($_POST['email']) || empty($_POST['message'])) {
  echo 'Por favor, preencha todos os campos.';
  exit;
}
// Sanitizar dados//
$name = htmlspecialchars($_POST['name']);
$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
$message = htmlspecialchars($_POST['message']);

// Armazenar em um arquivo de texto simples (você pode substituir isso por um banco de dados)
$file = 'messages.txt';
$currentContent = file_get_contents($file);
$newContent = "Nome: $name\nE-mail: $email\nMensagem: $message\n\n";
file_put_contents($file, $currentContent . $newContent);

echo 'Mensagem enviada com sucesso!';
?>
