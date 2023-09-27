import './filters.css'

export default function Filter({filterValue, filterId,handlerChange}) {
    return(

              <div className="form-check form-switch px-5 py-2">
                <input className="form-check-input" type="checkbox" role="switch" id={filterId} onChange={handlerChange}/>
                <label className="form-check-label" htmlFor={filterId}>{filterValue}</label>
              </div>


    )
}