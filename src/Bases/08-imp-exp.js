//import {heroes} from  './data/heroes'
//mport { heroes } from "./data/heroes";

//import heroes, {owners} from "../data/heroes" //exportacion por defecto no necesita las llaves
import heroes from "../data/heroes"
//console.log (owners);

/*const getHeroeById = (id)=>{
    return heroes.find((heroe)=>{
            if(heroe.id === id){
                return true
            }else {
                return false
            }
            
        })
    ;
    }
*/

export const getHeroeById = (id)=> heroes.find((heroe)=>heroe.id === id) ;

 //getHeroeById;
    


//console.log (getHeroeById(1))

export const getHeroesByOwner =(owner)=> heroes.filter((heroe)=>heroe.owner === owner) ;

//console.log (getHeroesByOwner('DC'));