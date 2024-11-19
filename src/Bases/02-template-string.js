
const nombre = "Rebeca";
const apellido = "Palacios";

const nombreCompleto = ` 
//si se da enter con la comilla inversa, se refleja un salto de linea
${nombre} 
${apellido}
${1+1}
`

console.log(nombreCompleto);

function getSaludo (nombre){
    return 'Hola '+ nombre;
}

console.log(`Este es un saludo: ${getSaludo(nombre)}`)