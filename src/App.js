import React, { Fragment } from 'react'
import './App.css'
import header_logo from './assets/images/dragonballz_logo.png'
import Routes from './routes'
import { Link, BrowserRouter as Router } from 'react-router-dom'


function App() {

    return (
        <Fragment>
            <Router>
            <header>
                <Link to='/'><img src={header_logo} alt='logo de Dragon Ball Z'/></Link>
                <ul className='navbar'>
                    <li><Link to='/sobre'>Sobre</Link></li>
                    <li><Link to='/personagens'>Principais Personagens</Link></li>
                    <li><Link to='/autor'>Autor</Link></li>
                </ul>
            </header>
            <Routes/>
            <footer>
                <p>Desenvolvido por Vitor Cezar.<br/>(Créditos à Toei Animation)</p>
            </footer>
            </Router> 
        </Fragment>
    )
}

export default App