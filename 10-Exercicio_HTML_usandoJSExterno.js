<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Externo</title>
</head>

<body>
    <p>JavaScript Externo</p>
    <button onclick="primeiraFunc()">Ação1</button>
    <button onclick="segundaFunc()">Ação2</button>
    <button onclick="terceiraFunc()">Ação3</button>
    <button onclick="quartaFunc()">Ação4</button>
    <section id="acaoClique">
        <p>Aqui vai estar registrado suas ações com os botões a cima !</p>
    </section>
</body>
</html>

<script src="index.js"></script>

<script>
    let resposta = window.document.getElementById('acaoClique')

function primeiraFunc(){
    resposta.innerHTML +='<p>Você clicou no primeiro botão</p>'
}
function segundaFunc(){
    resposta.innerHTML +='<p>Você clicou no segundo botão</p>'
}
function terceiraFunc(){
    resposta.innerHTML +='<p>Você clicou no terceiro botão</p>'
}
function quartaFunc(){
    resposta.innerHTML +='<p>Você clicou no quarto botão</p>'
}
</script>
