import React from 'react'
import { Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from "swiper/react"
import Cards from './Cards';
import "swiper/css";

const CardsMap = ({ movies }) => {

    return (
        <div className='swiper__container'>
            <div className='swiperContainer'>
                <Swiper modules={[Pagination, Autoplay]}
                    autoplay={{
                        delay: 5000,
                    }}
                    pagination={{
                        el: ".pagination",
                        clickable: true,
                    }}
                    slidesPerView={3}
                    breakpoints={{
                        300: {
                            slidesPerView: 1.5,
                            spaceBetween: 25,
                        },
                        578: {
                            slidesPerView: 2,
                            spaceBetween: 25,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 25,
                        },
                        992: {
                            slidesPerView: 3.5,
                            spaceBetween: 20,
                        },
                        1200: {
                            slidesPerView: 3.5,
                            spaceBetween: 30,
                        },
                       
                    }}>

                    {
                        movies.map((elem) => {
                            return (
                                <SwiperSlide key={elem.id}>
                                    <Cards name={elem.name} title={elem.title} poster={elem.poster_path} backdrop={elem.backdrop_path} id={elem.id}/>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
                <div className='pagination'></div>
            </div>
        </div>


    )
}

export default CardsMap