import Nav from '../../components/Nav/navigation.js'
import './contact.css'
import { Fragment } from 'react'
export default function Contact() {
    return(
        <Fragment>
            <Nav itemMenu={"Contact"}/>
            <main className='contact-div d-flex flex-column justify-content-center align-items-center m-auto mt-5 w-75 h-75'>
              {/*<section className='bg-primary w-75 m-5 p-5'>*/}
                <h2 className="row colorBlue py-5">Contact</h2>
                <h3 className="row colorBlue subtitle" id="subtitulo">Leave us your information so we can contact you</h3>
                <form className="row colorBlue g-3 p-4" action='' method='post'>
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" name='name'/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" name='email'/>
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea id='message' name='message' className='form-control p-4'>
                    </textarea>
                </div>
    
                    <div className="col-12">
                        <input type="submit" className="btn botones colorW" value="Send"/>
                    </div>
                </form> 
            {/*</section>*/}           
            </main>

        </Fragment>
    )
}