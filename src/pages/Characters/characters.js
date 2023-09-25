import {useState, useEffect, Fragment} from 'react';
import './characters.css'
import Nav from '../../components/Nav/navigation.js'
import Card from '../../components/Card/card.js'
import Filter from '../../components/Filters/filters.js'





export default function Character() {
    let [itemMenu]=useState("Characters");
    let [charact, setCharacters] = useState([])

    let fetchCharacters=async()=> {
    let dato= await fetch("https://rickandmortyapi.com/api/character")
    .then(resp=>resp.json())
    .catch(err =>console.log("Hubo un error: "+ err));

    return dato
}



useEffect(()=>{
    let saveCharacters=async()=>{
    let info =await fetchCharacters();
    let listCharact=info.results;

  setCharacters(listCharact)
}
  saveCharacters();
},[])


    return(
        <Fragment>
            <Nav itemMenu={itemMenu}/>

          <main className='container-fluid'>
            <Filter/>

           
            <section className="row section-cards">   
                {charact.map((character)=>{
                  return <Card key={character.id} nombre={character.name} imagen={character.image} genero={character.gender} status={character.status} especie={character.species} origen={character.origin.name}/>
                })}
            </section>
          </main>
        </Fragment>
        
    )
}