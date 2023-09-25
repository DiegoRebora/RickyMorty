import './home.css';

function Home() {
    return ( 
    <div className="home">
        <header className="home-header  container-fluid d-flex flex-column justify-content-center align-items-center">
            <div className="container-home  d-flex flex-column justify-content-center">
                <h1 className="home-title row justify-content-center">Rick & Morty Project</h1>
                    <h2 className="text-center p-3">Welcome to the Rick & Morty Project!!</h2>
                        <p className="text-center p-2">This project was created for practicing React and building a functional website.</p>
                        <p className="text-center p">On this website, you can find information about the characters from the animated series. You can also use filters to search for characters based on their different properties.
                        <br/>
                         If you have any questions or suggestions, feel free to send us a message.
                        </p>
                    <h2 className="text-center p-3">Lets Go!</h2>
                <nav className='row navbar align-items-center'>
                    <ul className='nav nav-pills justify-content-center'>
                        <li className='nav-item'>
                            <a className='nav-link active m-2 p-3 botones' href='/characters'>Characters</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link active m-2 p-3 botones' href='/contact'>Contact</a>
                        </li>


                    </ul>



                </nav>

             
           

            </div>
            


        </header>
    </div>  
    )
}

export default Home;