// Seleção dos elementos
const cadastroForm = document.getElementById('cadastroForm');
const cadastroSection = document.getElementById('cadastro');
const pagamentoSection = document.getElementById('pagamento');
const pixSection = document.getElementById('pix');
const pixBtn = document.getElementById('pixBtn');
const depositoBtn = document.getElementById('depositoBtn');
const finalizarBtn = document.getElementById('finalizarBtn');

// Função para transição com efeito fade
function fadeTransition(hideSection, showSection) {
    hideSection.classList.remove('show');
    setTimeout(() => {
        hideSection.classList.add('hidden');
        showSection.classList.remove('hidden');
        setTimeout(() => {
            showSection.classList.add('show');
        }, 50);
    }, 500);
}

// Ao enviar o formulário de cadastro
cadastroForm.addEventListener('submit', function(e) {
    e.preventDefault();
    fadeTransition(cadastroSection, pagamentoSection);
});

// Ao selecionar a opção PIX
pixBtn.addEventListener('click', function() {
    fadeTransition(pagamentoSection, pixSection);
});

// Ao selecionar a opção Depósito (pode ser customizado depois)
depositoBtn.addEventListener('click', function() {
    alert("Opção Depósito selecionada. Funcionalidade em desenvolvimento.");
});

// Ao finalizar o pagamento via PIX
finalizarBtn.addEventListener('click', function() {
    alert("Pagamento concluído com sucesso!");
});
