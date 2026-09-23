import { Swiper} from 'swiper/react';
import { Autoplay, Pagination,EffectCoverflow } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import SwiperSlideComp from './SwiperSlide';
import 'swiper/css';
import 'swiper/css/pagination';
import { cities } from './cities/cities';
import 'swiper/css/effect-coverflow';

export default function SwiperComp()
{
    
    return (
        <Swiper
        modules={[Autoplay, Pagination, EffectCoverflow]}
        effect="coverflow"
        centeredSlides={true}
        slidesPerView={1}
        spaceBetween={80}
        speed={800}
        loop={true}
        onSlideChange={(swiper)=>{}}
        autoplay={{
          delay: 3500,
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
                {cities.map((ct,index)=> <SwiperSlide key={index}><SwiperSlideComp index={index} /></SwiperSlide>)}
               
        </Swiper>
       
    )
}