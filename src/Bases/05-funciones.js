/*const saludar = function (nombre){
    return `Hola, ${nombre}`
}
*/
const saludar2 = (nombre) => {
    return `Hola, ${nombre}`
}

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;

console.log (saludar2 ("Yoda"))
console.log (saludar3("Pelusa"));
console.log (saludar4());

const getUser =()=>
 ( {
        uid:"abc123",
        username:"sophie"
    }
 )

 const user= getUser()
console.log (user);

const getUsuarioActivo= (nombre)=>({
        uid:"abc456",
        username:nombre
    }
);

const usuarioActivo = getUsuarioActivo('Rebeca');
console.log (usuarioActivo)