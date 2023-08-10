function fetchAndShowFile(fileName) {
    return fetch(fileName)
        .then(response => response.text())
        .catch(error => console.error('Error:', error));
}
Promise.all([
    fetchAndShowFile('home.html'),
    fetchAndShowFile('ram.html'),
    fetchAndShowFile('almacenamiento.html'),
    fetchAndShowFile('fuente.html')
])
.then(contents => {
    document.getElementById('contenido').innerHTML = contents.join('');
});