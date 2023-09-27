import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../pages/Home/home'
import Contact from '../pages/Contact/contact'
import Characters from '../pages/Characters/characters'

export default function Router () {
    return (
         <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/characters" element={<Characters/>}/>
                
            </Routes>
         
         </BrowserRouter>
    )
}