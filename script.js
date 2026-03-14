document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // --- LÓGICA PARA ENVIAR PARA O WHATSAPP ---

        // 1. Pegar os dados do formulário
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value; // Opcional
        const message = document.getElementById('message').value;

        // 2. Validar se os campos obrigatórios foram preenchidos
        if (!name || !message) {
            formStatus.textContent = 'Por favor, preencha seu nome e a mensagem.';
            formStatus.style.color = 'red';
            return; // Para a execução se a validação falhar
        }

        // 3. Definir o seu número de WhatsApp (o mesmo do botão flutuante)
        const meuWhatsapp = '556892431800';

        // 4. Montar a mensagem que será enviada (com formatação do WhatsApp)
        let textoMensagem = `Olá! Vi seu site e tenho interesse.\n\n*Nome:* ${name}\n`;
        if (phone) {
            textoMensagem += `*Telefone:* ${phone}\n`;
        }
        textoMensagem += `*Mensagem:* ${message}`;

        // 5. Codificar a mensagem para a URL
        const textoCodificado = encodeURIComponent(textoMensagem);

        // 6. Criar o link final e abrir em uma nova aba
        const urlWhatsapp = `https://wa.me/${meuWhatsapp}?text=${textoCodificado}`;
        window.open(urlWhatsapp, '_blank');

        // 7. Limpar o formulário e mostrar mensagem de sucesso
        formStatus.textContent = 'Quase lá! Conclua o envio da mensagem no seu WhatsApp.';
        formStatus.style.color = 'green';
        contactForm.reset();
    });

    // --- EFEITOS VISUAIS (Animação ao rolar) ---
    
    // Seleciona todas as seções
    const sections = document.querySelectorAll('section');

    // Cria um observador
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Adiciona a classe que faz aparecer
            }
        });
    }, { threshold: 0.1 }); // Dispara quando 10% do elemento está visível

    // Aplica o observador em cada seção
    sections.forEach(section => {
        observer.observe(section);
    });
});