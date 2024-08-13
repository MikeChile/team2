document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formulario');
    const botonEnviar = document.querySelector('button.btn-primary');
    const historialDiv = document.getElementById('Historial');
    const buscador = document.getElementById('buscador');

    // Crear la estructura inicial de la tabla
    const crearTabla = () => {
        const tabla = document.createElement('table');
        tabla.className = 'table table-striped'; // Estilo Bootstrap para la tabla
        tabla.innerHTML = `
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Asunto</th>
                    <th>Mensaje</th>
                </tr>
            </thead>
            <tbody id="cuerpoHistorial">
            </tbody>
        `;
        return tabla;
    };

    // Agregar la tabla al contenedor de historial
    const tablaHistorial = crearTabla();
    historialDiv.appendChild(tablaHistorial);

    formulario.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita el envío del formulario para procesarlo con JavaScript

        // Obtén y limpia los valores del formulario
        const nombre = document.getElementById('nombre').value.trim();
        const apellido = document.getElementById('apellido').value.trim();
        const email = document.getElementById('email').value.trim();
        const motivo = document.getElementById('motivo').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();

        // Validar campos
        if (!nombre || !apellido || !email || !motivo || !mensaje) {
            alert('Por favor, complete todos los campos obligatorios.');
            return; // Evita el envío si hay campos vacíos
        }

        // Construye el mensaje para el alert
        const alertMessage = `
        DE: ${nombre} ${apellido} (${email})
        - ASUNTO: ${motivo}
        - MENSAJE:
        ${mensaje}
        `.trim();

        // Muestra el alert con el mensaje
        alert(alertMessage);

        // Cambia la clase, el contenido y deshabilita el botón
        botonEnviar.classList.remove('btn-primary');
        botonEnviar.classList.add('btn-success');
        botonEnviar.textContent = 'Mensaje enviado';
        botonEnviar.disabled = true;

        // Agregar la nueva fila a la tabla de historial
        const nuevaFila = document.createElement('tr');
        nuevaFila.innerHTML = `
            <td>${nombre} ${apellido}</td>
            <td>${email}</td>
            <td>${motivo}</td>
            <td>${mensaje}</td>
        `;
        document.getElementById('cuerpoHistorial').appendChild(nuevaFila);

        // Limpiar el formulario
        formulario.reset();

        // Volver a la clase original y habilitar el botón después de 5 segundos
        setTimeout(() => {
            botonEnviar.classList.remove('btn-success');
            botonEnviar.classList.add('btn-primary');
            botonEnviar.textContent = 'Enviar mensaje';
            botonEnviar.disabled = false;
        }, 5000);
    });

    // Función para filtrar la tabla según el texto del buscador
    const filtrarTabla = (texto) => {
        const filas = document.querySelectorAll('#cuerpoHistorial tr');
        filas.forEach(fila => {
            const celdas = fila.getElementsByTagName('td');
            const textoFila = Array.from(celdas).map(celda => celda.textContent.toLowerCase()).join(' ');
            const mostrarFila = textoFila.includes(texto.toLowerCase());
            fila.style.display = mostrarFila ? '' : 'none';
        });
    };

    // Manejar el evento de entrada en el buscador
    buscador.addEventListener('input', (event) => {
        filtrarTabla(event.target.value);
    });
});
