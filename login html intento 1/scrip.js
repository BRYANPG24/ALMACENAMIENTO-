document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto

        // Obtener los valores de los campos del formulario
        const cedula = document.getElementById('cedula').value;
        const apellidos = document.getElementById('apellidos').value;
        const nombres = document.getElementById('nombres').value;
        const direccion = document.getElementById('direccion').value;
        const telefono = document.getElementById('telefono').value;
        const correo = document.getElementById('correo').value;

        // Crear un objeto JSON con los datos del formulario
        const formData = {
            cedula: cedula,
            apellidos: apellidos,
            nombres: nombres,
            direccion: direccion,
            telefono: telefono,
            correo: correo
        };

        // Convertir el objeto JSON a una cadena JSON
        const jsonData = JSON.stringify(formData);

        // Mostrar los datos en consola (opcional)
        console.log(jsonData);

        // Aquí puedes enviar los datos JSON a tu servidor o guardarlos localmente, por ejemplo:
        guardarDatosLocal(jsonData);
    });

    function guardarDatosLocal(jsonData) {
        // Guardar los datos JSON en el almacenamiento local (localStorage o sessionStorage)
        localStorage.setItem('formData', jsonData);
        alert('Los datos del formulario se han guardado localmente.');
    }
});
