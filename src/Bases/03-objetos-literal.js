
const persona ={
    nombre: "Tony",
    apellido:"Stark",
    edad: 45,
    direccion:{
        ciudad:"New York",
        cp: 77500,
        lat:14.2578,
        lng:34.923345,
    }
}


//entre llaves para crear un nuevo objeto
//que tiene la propeidad de persona con el valor del objeto establecido antes
//console.table (persona)

const persona2={...persona};//operador spread 
persona2.nombre="Peter";

console.log({persona}); 
console.log (persona2)
