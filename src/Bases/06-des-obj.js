const persona = {
    nombre:"Tony",
    edad:45,
    clave: "Ironman"
};

//const {nombre, edad, clave}= persona;
//console.log (nombre);
//console.log (edad);
//console.log (clave);

const context = ({nombre, clave, edad, rango = "capitan"})=>{
   
    //console.log(nombre, edad, rango)
    return{
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat:14.358,
            lng:65.255
        }
    }
    
}

const {nombreClave, anios, latlng:{lat, lng}} =context (persona);
//const {lat, lng}= latlng;
console.log ({nombreClave, anios});
console.log ({lat, lng})
