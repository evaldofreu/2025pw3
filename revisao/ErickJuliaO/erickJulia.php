<?php
 
 echo "Erick e Julia <br><br>"

 ?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ErickJuliaOli</title>
    <script>
        function mostrarMensagem() {
            const div = document.createElement("div");
            div.textContent = "Hello World";
            document.body.appendChild(div);
        }
    </script>
</head>
<body>
    <button onclick="mostrarMensagem()">Clique aqui</button>  
</body>
</html>
