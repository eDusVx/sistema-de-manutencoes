/*!
    * Start Bootstrap - SB Admin v7.0.7 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2023 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});


const trocarPneuCard = document.getElementById("trocarPneuCard");
const trocarMangueiraCard = document.getElementById("trocarMangueiraCard");
const trocarAguaCard = document.getElementById("trocarAguaCard");
const trocarOleoCard = document.getElementById("trocarOleoCard");

// Obtém os elementos de explicação por IDs
const explanation = document.getElementById("explanation");
const explanation2 = document.getElementById("explanation2");
const explanation3 = document.getElementById("explanation3");
const explanation4 = document.getElementById("explanation4");

// Função para ocultar todas as explicações
function hideAllExplanations() {
    explanation.style.display = "none";
    explanation2.style.display = "none";
    explanation3.style.display = "none";
    explanation4.style.display = "none";
}

// Adiciona um evento de clique ao card "Trocar Pneu"
trocarPneuCard.addEventListener("click", function () {
    hideAllExplanations(); // Oculta todas as explicações
    explanation.style.display = "block";
    
});

// Adiciona um evento de clique ao card "Problema na Mangueira"
trocarMangueiraCard.addEventListener("click", function () {
    hideAllExplanations(); // Oculta todas as explicações
    explanation2.style.display = "block";
    
});

// Adiciona um evento de clique ao card "Trocar Água"
trocarAguaCard.addEventListener("click", function () {
    hideAllExplanations(); // Oculta todas as explicações
    explanation3.style.display = "block";
    
});

// Adiciona um evento de clique ao card "Trocar Óleo"
trocarOleoCard.addEventListener("click", function () {
    hideAllExplanations(); // Oculta todas as explicações
    explanation4.style.display = "block";
    
});

function toggleDescription(cardId) {
    const card = document.getElementById(cardId);
    const description = card.querySelector('.card-body');
    if (description.style.display === 'none') {
        description.style.display = 'block';
    } else {
        description.style.display = 'none';
    }
}

