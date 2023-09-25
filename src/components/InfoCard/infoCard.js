export default function InfoCard ({status,especie,origen,genero,setShow}) {
    return (
        <div className= "d-flex p-5 flex-column align-items-center learnmore-section">
            
            <button className= "btn btn-active d-flex align-self-end m-2 btn-x-sm" onClick={()=>setShow(false)}>X</button>
            
            <ul className="list-group">
                <li className="list-group-item p-3 d-flex flex-column">
                <span className="fw-bold">Character Status:
                {status}</span>
                </li>
                <li className="list-group-item p-3 d-flex flex-column">
                <h4>Specie:</h4>
                <span className="fw-bold">{especie}</span></li>
                <li className="list-group-item p-3 d-flex flex-column">
                <h4>Origin:</h4>
                <span className="fw-bold">{origen}</span></li>
                <li className="list-group-item p-3 d-flex flex-column">
                <h4>Gender</h4>
                <span className="fw-bold">{genero}</span></li>
            </ul>


        </div>


    )
}