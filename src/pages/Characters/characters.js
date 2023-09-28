import {useState, useEffect, Fragment} from 'react';
import './characters.css'
import Nav from '../../components/Nav/navigation.js'
import Card from '../../components/Card/card.js'
import Filter from '../../components/Filters/filters.js'





export default function Character() {
    
    let [completeList, setCompleteList] = useState([]);
    let [characts, setCharacters] = useState([]);
    let [filters]=useState([{name:'Alive', filter:'Character Alive'}, {name:'Dead', filter:'Character Dead'}, {name:'Female', filter:'Female'}, {name:'Male', filter:'Male'}, {name:'unknown', filter:'Origin Unknown'}]);
    let [appliedFilters, setAppliedFilters] = useState([]);
    let [filtered, setFiltered] = useState([1]);// creé este estado, un array no vacío, porqué si no al aplicar el length sobre "charact", se ve que tardaba en traer la info de la API y al cargar por primera vez, lo traía vacío y me salía el "alert", incluso sobre las tarjetas. Lo utilizo sólo a esos fines, modificándolo con los resultados del filtrado. 


    let fetchCharacters=async()=> {
      let dato= await fetch("https://rickandmortyapi.com/api/character")
      .then(resp=>resp.json())
      .catch(err =>console.log("Hubo un error: "+ err));

        return dato
  }

    

    let applyFilters=(event)=>{
        
        let checkboxName=event.target.id; 
        
        if (event.target.checked === true){
          console.log("Aplicar filtro")
          setAppliedFilters([...appliedFilters,checkboxName]);
          

        }else{
          console.log("Quitar filtro") 
          let remFilters=appliedFilters.filter((el)=>el !== checkboxName)
           setCharacters(completeList)
          setAppliedFilters(remFilters)
        } 

    }


    




  useEffect(()=>{
    let saveCharacters=async()=>{
    let info =await fetchCharacters();
    let listCharact=info.results;

  setCharacters(listCharact)
  setCompleteList(listCharact)
  console.log(characts)
  console.log(completeList)
}
  saveCharacters();
  },[])

  useEffect(()=>{
    appliedFilters.forEach((nameFilter)=>{
      let resultado;
      if (nameFilter === "Alive" || nameFilter === "Dead"){
            resultado=characts.filter((charact)=>charact.status === nameFilter)

          }
          if (nameFilter === "Female" || nameFilter === "Male"){
            resultado=characts.filter((charact)=>charact.gender === nameFilter)
              
          }
          if (nameFilter === "unknown"){
            resultado=characts.filter((charact)=>charact.origin.name === nameFilter)
            
          }
          setCharacters(resultado)
          setFiltered(resultado)
    
    })
  }, [appliedFilters])

  return(
        <Fragment>
            <Nav itemMenu={"Characters"}/>

            <main className='container-fluid'>
              <section className="row section-filters py-5">
                <div className="filters-area d-flex m-2 align-items-center">
                  <h2 className="filtersh2">Filters</h2>
                  <a type="button" className="btn btn-filters" data-bs-toggle="collapse" href="#collapseFilters" role="button" aria-expanded="false" aria-controls="collapseFilters" id="icon">
                    <i className="bi bi-sliders"></i>
                  </a>
                </div>
                <div className="collapse filters justify-content-between flex-wrap" id="collapseFilters">
                  {filters.map((item) => { return <Filter key={item.name} filterValue={item.filter} filterId={item.name} handlerChange={applyFilters} />})}
                </div>
              </section>
            <section className="row section-cards">   
                {filtered.length > 0 ?
                  characts.map((character)=>{
                  return <Card key={character.id} nombre={character.name} imagen={character.image} genero={character.gender} status={character.status} especie={character.species} origen={character.origin.name}/>
                }):
                <div className="alert  d-flex align-items-center w-100" role="alert">
                  <i className="bi bi-exclamation-triangle-fill fs-5"></i>
                <p className='m-0'>Sorry! There are no characters width all those properties</p>
                </div>
              }
            </section>
          </main>
        </Fragment>
        
    )
}