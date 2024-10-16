        // Para obtener la hora actual
        function actualizarHora() {
            const ahora = new Date();
            const hora = ahora.toLocaleTimeString();
            document.getElementById("hora-actual").textContent = hora;
        }

        // Llamar a la función de actualizar hora cada segundo
        setInterval(actualizarHora, 1000);