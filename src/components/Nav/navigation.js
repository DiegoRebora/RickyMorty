import './navigation.css'
import { Link } from 'react-router-dom';




export default function Nav({itemMenu}) {
    return(
    <header className="bg-blue">
      <nav className="navbar navbar-expand-lg w-100 bg-blue">
        <div className="container-fluid justify-content-between align-items-center">
            <Link to="/" className="text-decoration-none" 
            >
            <h1 className="navbar-brand cursor-p">Rick & Morty</h1>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <i className="bi bi-list" id="burger"></i>
            </button>
          <div className="navbar-collapse justify-content-end collapse" id="navbarSupportedContent">
            <ul className="navbar nav-pills p-4">
                <li className="nav-item m-2">
                  <Link to="/characters" className={itemMenu ==="Characters"?'nav-link btn-active p-2':'nav-link botonav p-2'}>Characters</Link>
                </li>
                <li className="nav-item m-2"> 
                  <Link to= "/contact" className={itemMenu ==="Contact"?'nav-link btn-active p-2':'nav-link botonav p-2'} >Contact</Link>
                </li>
            </ul>
          </div>
        </div>

      </nav>
    </header>
    )}
