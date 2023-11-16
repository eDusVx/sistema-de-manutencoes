// Função para salvar os carros no localStorage
function salvarNoLocalStorage() {
    localStorage.setItem('carros', JSON.stringify(carros));
}

// Função para carregar os carros do localStorage
function carregarDoLocalStorage() {
    const carrosLocal = localStorage.getItem('carros');
    if (carrosLocal) {
        carros = JSON.parse(carrosLocal);
        exibirCarros(); // Atualiza a tabela ao carregar os carros
    }
}

// Chama a função para carregar os carros quando a página é carregada
document.addEventListener('DOMContentLoaded', carregarDoLocalStorage);

// Modifique a função de adicionar carro (cadastrarCarro) para salvar no localStorage
function cadastrarCarro(event) {
    // ... (seguem as outras linhas da função cadastrarCarro)
    if (carName && carModel && carYear) {
        const novoCarro = {
            nome: carName,
            modelo: carModel,
            ano: carYear
        };

        carros.push(novoCarro);
        exibirCarros();
        salvarNoLocalStorage(); // Salva no localStorage após adicionar o carro
        document.getElementById('carForm').reset();
    } else {
        alert('Preencha todos os campos.');
    }
    // ...
}
