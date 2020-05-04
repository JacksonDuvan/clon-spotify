import React from 'react'
import '../assets/styles/componets/CarouselItem.css'
import play from '../assets/images/play.png'
import { Link } from 'react-router-dom'


class CarouselPlayList extends React.Component{

    render(){
        const { name, image, id, label } = this.props
        return(
            <Link to={`/playlist/${id}`} className="link">
                <div className="carousel-item">
                    <div className="carousel-item__art">
                        <img src={image} width="150px" height="150px" alt=""/>

                        <img className="play-logo" src={play} width="50px" height="50px" alt="play"/>
                        <h4>{name}</h4>
                        <p>{label}</p>
                    </div>
                </div>
            </Link>
        )
    }
}


export default CarouselPlayList