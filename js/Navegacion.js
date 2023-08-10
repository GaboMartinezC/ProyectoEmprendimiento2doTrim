let modulos = ['fuenteMod', 'homeMod', 'ramMod', 'almacenamientoMod'];
const AbrirModulo = (idParam) => {
    document.getElementById(idParam).style.display = "block";
    for(let i = 0; i < 4; i++)
    {
        if (modulos[i]!=idParam)
            document.getElementById(modulos[i]).style.display = "none";        
    }
}
const CerrarElemento = (idParam) => {
    document.getElementById(idParam).style.display = "none";
}
const AbrirModal = (idParam) => {
    document.getElementById(idParam).style.display = "block";
}