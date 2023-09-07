<?php
// Recupere os dados do formulário
$nome = addslashes($_POST["name"]);
$email = addslashes($_POST["email"]); // Corrigido: Deve ser "email" em vez de "name"
$mensagem = addslashes($_POST["mensage"]); // Corrigido: Deve ser "mensage" em vez de "name"

// Configurar informações de envio de e-mail
$para = "loslolnews@gmail.com"; // Substitua pelo seu endereço de e-mail
$assunto = "Nova mensagem de $nome";
$corpo = "Nome: ".$nome."\n"."E-mail: ".$email."\n"."Mensagem:\n ".$mensagem; // Corrigido: Removi as aspas extras
$cabeca = "From: cj956254@gmail.com"."\n"."Reply-to: ".$email."\n"."X-Mailer: PHP/".phpversion(); // Corrigido: Adicionei um ponto após phpversion()

if (mail($para, $assunto, $corpo, $cabeca)) {
    echo ("Email enviado com sucesso!");
} else {
    echo ("Erro ao enviar!");
}
?>
