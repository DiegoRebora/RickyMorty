import './navigation.css'



export default function Nav({itemMenu}) {
    return(
    <header className="bg-blue">
      <nav className="navbar navbar-expand-lg w-100 bg-blue">
        <div className="container-fluid justify-content-between align-items-center">
            <a className="text-decoration-none" href="#">
            <h1 className="navbar-brand cursor-p">Rick & Morty</h1>
            </a>
          <div className="navbar-collapse justify-content-end collapse" id="navbarSupportedContent">
            <ul className="navbar nav-pills p-4">
                <li className="nav-item m-2">
                  <a className="nav-link btn-active p-2" href="#">{itemMenu}</a>
                </li>
                <li className="nav-item m-2">
                  <a className="nav-link botonav p-2" href="#">Contact</a>
                </li>
            </ul>
          </div>
        </div>

      </nav>
    </header>
    )}
