document.addEventListener("DOMContentLoaded", function() {
    // Selecionando elementos do DOM
    const form = document.getElementById("form");
    const usernameInput = document.getElementById("name");
    const passwordInput = document.getElementById("number");

    // Event listener para o envio do formulário
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Verifica se os campos de usuário e senha estão preenchidos
        if (usernameInput.value.trim() === "" || passwordInput.value.trim() === "") {
            alert("Por favor, preencha todos os campos.");
            return;
        }

       
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        // Verifica se o nome de usuário é "Kevin" e a senha é "123"
        if (username === "Kevin" && password === "123") {
            alert("Login bem-sucedido!");
            // Redireciona o usuário para outra página após o login bem-sucedido
            window.location.href = "home.html";
        } else {
            // Exibe uma mensagem de erro se as credenciais estiverem incorretas
            alert("Credenciais de login incorretas. Por favor, tente novamente.");
            // Limpa os campos de entrada
            usernameInput.value = "";
            passwordInput.value = "";
            // Coloca o foco de volta no campo de usuário para facilitar a digitação
            usernameInput.focus();
        }
    });
});

