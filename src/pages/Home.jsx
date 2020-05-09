import React from 'react'
import Header from '../components/Header'
import PageLogin from '../components/PageLogin'
import Footer from '../components/Footer'

class Home extends React.Component {

    render(){

        return(
            <>
                <Header />
                <PageLogin/>
                <Footer/>
            </>
        )
    }
}

export default Home