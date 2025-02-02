import { getHeroeById } from "./Bases/08-imp-exp";

/*
const promesa = new Promise( (resolve, reject)=>{
    setTimeout(()=>{

        const heroe= getHeroeById(2);
     
       //resolve(heroe);
       reject('No se pudo encontrar al heroe')
    }, 2000)
} );
 

promesa.then((heroe)=>{
    console.log ('heroe', heroe)
})
.catch(error => console.warn(error));
*/

const getHeroeByIdAsync = (id)=>{
    return new Promise( (resolve, reject)=>{
        setTimeout(()=>{
    
            const p1 = getHeroeById(id);
            if (p1){
                resolve(p1);
            }else{
                reject('No se pudo encontrar al heroe')
            }
            //console.log (p1);
           
           
          
        }, 2000)
    } );
  
}

getHeroeByIdAsync(1)
.then( console.log )
.catch(console.warn)