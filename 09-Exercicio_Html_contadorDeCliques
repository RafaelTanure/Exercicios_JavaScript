<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contador de Clique</title>
</head>

<body>
    <p>Contador de Clique</p>
    <button onclick="contarCliques()">Clique Aqui</button>
    <button onclick="limparCliques()">Limpe Aqui</button>
    <section id="contarLimpar">
        <p>O contador está com 0 cliques.</p>
    </section>
</body>

</html>

<script src="index.js"></script>
<script>
    let contador = 0 
let resposta = document.querySelector('section#contarLimpar')
// As variáveis declaradas aqui fora são consideradas GLOBAIS e funcionam dentro do programa inteiro

function contarCliques() {
    contador ++ // É a mesma coisa que contador = contador + 1
    resposta.innerHTML = `<p>O contador está em : ${contador} cliques.</p>`
}

function limparCliques() {
    contador = 0
    resposta.innerHTML = null
}
</script>
