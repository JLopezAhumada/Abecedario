const tarjetas = document.querySelectorAll(".card");
const botonesFiltro = document.querySelectorAll("[data-filtro]");
const contador = document.querySelector("#contador");

let letrasVistas = 0;

function voltearTarjeta(tarjeta) {
    tarjeta.classList.toggle("volteada");

    if (!tarjeta.classList.contains("vista")) {
        tarjeta.classList.add("vista");
        letrasVistas += 1;
        contador.textContent = letrasVistas;
    }
}

function filtrarTarjetas(filtro) {
    tarjetas.forEach((tarjeta) => {
        const mostrarTarjeta = filtro === "todas" || tarjeta.dataset.tipo === filtro;
        tarjeta.classList.toggle("oculta", !mostrarTarjeta);
    });
}

tarjetas.forEach((tarjeta) => {
    tarjeta.addEventListener("click", () => voltearTarjeta(tarjeta));
});

botonesFiltro.forEach((boton) => {
    boton.addEventListener("click", () => {
        filtrarTarjetas(boton.dataset.filtro);
    });
});
