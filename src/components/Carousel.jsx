import React from 'react'
import '../assets/styles/componets/Carousel.css'

class Carousel extends React.Component{
    render(){
        const { children } = this.props

        return(
            <section className="carousel">
                <div className="carousel-div">
                    { children }
                </div>
            </section>
        )
    }
}

export default Carousel