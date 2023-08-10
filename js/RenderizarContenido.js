function fetchAndShowFile(fileName) {
    return fetch(fileName)
        .then(response => response.text()) // Obtener el contenido como texto
        .catch(error => console.error('Error:', error));
}
Promise.all([
    fetchAndShowFile('home.html'),
    fetchAndShowFile('ram.html'),
    fetchAndShowFile('almacenamiento.html'),
    fetchAndShowFile('fuente.html')
])
.then(contents => {
    // Mostrar los contenidos en el elemento con el id "contenido"
    document.getElementById('contenido').innerHTML = contents.join('');
});