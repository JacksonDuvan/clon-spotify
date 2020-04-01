import React from 'react'
import '../assets/styles/componets/CarouselItem.css'
import play from '../assets/images/play.png'

class CarouselItem extends React.Component{
    render(){
        return(
            <div className="carousel-item">
                <div className="carousel-item__art">
                    <img src="https://i.scdn.co/image/ab67706f000000028aa1c46ff32cfb0415089db3" width="150px" height="150px" alt=""/>

                    <img className="play-logo" src={play} width="50px" height="50px" alt="play"/>
                    <h4>Jbalvin</h4>
                    <p>El nuevo album de Jbalvin Colores</p>
                </div>
            </div>
        )
    }
}

export default CarouselItem