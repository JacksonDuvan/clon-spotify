import React from 'react'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'

import '../assets/styles/componets/MainView.css'

class MainView extends React.Component{
    render(){
        return(
            <div className="main-view">
                <Categories title="Musica">
                    <Carousel>
                        <CarouselItem />
                        <CarouselItem />
                        <CarouselItem />
                    </Carousel>
                </Categories>

                <Categories title="Podcast">
                    <Carousel>
                        <CarouselItem />
                        <CarouselItem />
                        <CarouselItem />
                        <CarouselItem />
                        <CarouselItem />
                    </Carousel>
                </Categories>

                <Categories title="Album">
                    <Carousel>
                        <CarouselItem />
                        <CarouselItem />
                        <CarouselItem />
                        <CarouselItem />
                    </Carousel>
                </Categories>
            </div>
        )
    }
}

export default MainView