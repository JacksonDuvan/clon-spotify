import React from 'react'
import '../assets/styles/componets/PageLogin.css'
import { Link} from 'react-router-dom'

const PageLogin = () => {
    return(
        <div className="pageLongin">
            <div className="pageLongin-ctn">
                <h1>Música para todos.</h1>
                <h4>Millones de canciones. No necesitas targeta de crédito.</h4>
                <Link to="/login" className="pageLogin-link">OBTÉN SPOTIFY GRATIS</Link>
            </div>
        </div>
    )
}

export default PageLogin