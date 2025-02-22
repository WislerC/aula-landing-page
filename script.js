
document.addEventListener("DOMContentLoaded", function () {
    const button = document.createElement("button");
    button.textContent = "Clique aqui";
    button.id = "offerButton";
    document.body.appendChild(button);
    
    button.addEventListener("click", function () {
        alert("Venha conferir nossa oferta!");
        
        // Verifica se o formulário já existe para não duplicá-lo
        if (document.getElementById("registerForm")) {
            return;
        }
        
        // Cria o formulário de cadastro
        const form = document.createElement("form");
        form.id = "registerForm";
        
        // Estiliza o formulário para centralizá-lo na tela
        form.style.position = "fixed";
        form.style.top = "50%";
        form.style.left = "50%";
        form.style.transform = "translate(-50%, -50%)";
        form.style.background = "rgba(255, 255, 255, 0.9)";
        form.style.padding = "20px";
        form.style.borderRadius = "10px";
        form.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
        
        // Cria os campos do formulário
        const nameLabel = document.createElement("label");
        nameLabel.textContent = "Nome: ";
        nameLabel.htmlFor = "nameInput";
        const nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.id = "nameInput";
        nameInput.required = true;
        
        const emailLabel = document.createElement("label");
        emailLabel.textContent = "Email: ";
        emailLabel.htmlFor = "emailInput";
        const emailInput = document.createElement("input");
        emailInput.type = "email";
        emailInput.id = "emailInput";
        emailInput.required = true;
        
        const submitButton = document.createElement("button");
        submitButton.textContent = "Cadastrar";
        submitButton.type = "submit";
        
        // Adiciona os elementos ao formulário com quebras de linha para melhor visualização
        form.appendChild(nameLabel);
        form.appendChild(nameInput);
        form.appendChild(document.createElement("br"));
        form.appendChild(emailLabel);
        form.appendChild(emailInput);
        form.appendChild(document.createElement("br"));
        form.appendChild(submitButton);
        
        document.body.appendChild(form);
        
        // Evento de envio do formulário
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Cadastro realizado com sucesso!");
            form.reset();
        });
    });
});
