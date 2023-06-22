<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dados com JS</title>
</head>

</head>

<body>
    <h1>Trabalhando com dados V1.0</h1>
    <p>Botão incial abaixo: </p>
    <button onclick="inicio()">Clique para começar</button> 
    <script>
        function inicio() { // Criei a função inicio  
            let nome = window.prompt("Qual é o seu nome ? "); // Utilizando o window.prompt para receber uma mensagem no alert/ Caso o usúario não digite nada retornar null. 
            window.alert(`Olá, ${nome}! É um prazer te conhecer! `) // Imprimindo um alert com os dados passados por o usúario 
        }
    </script>
</body>
</html>
