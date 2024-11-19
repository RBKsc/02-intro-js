const personajes = ["goku", "vegeta", "trunks"];

//console.log (personajes[0]);
//console.log (personajes[1]);
//console.log (personajes[2]);

const [ , , p3] = personajes;

console.log(p3)

const retornaArreglo = ()=>{
    return ["abc", 123]
}

const [letras, numeros]= retornaArreglo();
console.log (letras, numeros);

const state= (valor)=>{
    return [valor, ()=>{console.log ("Hola Mundo")}];
}
const [nombre, updateNombre] = state("goku")
//const arr=state ("goku");

console.log (nombre);
updateNombre();


