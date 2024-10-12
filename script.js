document.addEventListener("DOMContentLoaded", () => {
    const rompecabezas = document.getElementById("rompecabezas");
    let piezaSeleccionada = null;

    // Desordenar piezas
    const piezas = Array.from(rompecabezas.children);
    piezas.sort(() => Math.random() - 0.5);
    piezas.forEach(pieza => rompecabezas.appendChild(pieza));

    piezas.forEach(pieza => {
        pieza.addEventListener("click", seleccionarPieza);
    });

    function seleccionarPieza(event) {
        if (!piezaSeleccionada) {
            piezaSeleccionada = event.target;
            piezaSeleccionada.classList.add("seleccionada");
        } else {
            intercambiarPiezas(event.target);
            piezaSeleccionada.classList.remove("seleccionada");
            piezaSeleccionada = null;
            verificarRompecabezas();
        }
    }

    function intercambiarPiezas(piezaActual) {
        const tempSrc = piezaActual.src;
        piezaActual.src = piezaSeleccionada.src;
        piezaSeleccionada.src = tempSrc;
        
        const tempId = piezaActual.id;
        piezaActual.id = piezaSeleccionada.id;
        piezaSeleccionada.id = tempId;
    }

    function verificarRompecabezas() {
        const piezasActuales = Array.from(rompecabezas.children);
        const estaOrdenado = piezasActuales.every((pieza, index) => {
            const fila = Math.floor(index / 3) + 1;
            const columna = (index % 3) + 1;
            return pieza.id === `pieza_${fila}_${columna}`;
        });

        if (estaOrdenado) {
            mostrarMensaje();
        }
    }

    function mostrarMensaje() {
        document.getElementById("mensaje").classList.remove("oculto");
        document.getElementById("verMensaje").classList.remove("oculto");
    }
});
