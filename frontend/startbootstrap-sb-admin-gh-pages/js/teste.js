// Array para armazenar os carros cadastrados
const cars = [];

// Função para atualizar a tabela com os carros cadastrados
function updateCarTable() {
    const carTableBody = document.getElementById("carTableBody");
    carTableBody.innerHTML = "";

    cars.forEach((car) => {
        const newRow = carTableBody.insertRow(carTableBody.rows.length);

        const nameCell = newRow.insertCell(0);
        const modelCell = newRow.insertCell(1);
        const yearCell = newRow.insertCell(2);

        nameCell.innerHTML = car.name;
        modelCell.innerHTML = car.model;
        yearCell.innerHTML = car.year;
    });
}

// Função para adicionar um carro à tabela e ao array
function addCarToTable(car) {
    cars.push(car);
    updateCarTable();
}

// Evento de envio do formulário
document.getElementById("carForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const carName = document.getElementById("carName").value;
    const carModel = document.getElementById("carModel").value;
    const carYear = document.getElementById("carYear").value;
    const car = {
        name: carName,
        model: carModel,
        year: carYear,
    };
    addCarToTable(car);
    this.reset();
});
