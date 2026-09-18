import { Swiper} from 'swiper/react';
import { Autoplay, Pagination,EffectCoverflow } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import SwiperSlideComp from './SwiperSlide';
import 'swiper/css';
import 'swiper/css/pagination';
import { cities } from './cities/cities';

export default function SwiperComp({handleChange})
{
    console.log("TTTTTTTTTTTTTTTT");
    return (
        <Swiper
        modules={[Autoplay, Pagination, EffectCoverflow]}
        effect="coverflow"
        centeredSlides={true}
        slidesPerView={1}
        spaceBetween={80}
        speed={800}
        loop={true}
        onSlideChange={(swiper)=>{handleChange(swiper.realIndex)}}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}

        pagination={{
          clickable: true,
        }}

        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 120,
          modifier: 1,
          slideShadows: false,
        }}
             >
                {cities.map((ct,index)=> <SwiperSlide><SwiperSlideComp index={index} /></SwiperSlide>)}
               
        </Swiper>
       
    )
}