import s from './CardsCatalog.module.scss';
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import ProductCard from './product-card/ProductCard';
import SwiperCore, { Navigation } from 'swiper';

SwiperCore.use([Navigation]);


export default function SliderBlock(props) {

    return (

        <section className={s.CardsCatalog}>
            <Swiper slidesPerView={4} spaceBetween={10} slidesPerGroup={4} loop={false} navigation={true}>
                {props.data.map(item => {
                    return <SwiperSlide><ProductCard img={item.img} title={item.title} span={item.span} buyButton={item.buyButton} label={item.label}/></SwiperSlide>;
                })}
                {props.data.map(item => {
                    return <SwiperSlide><ProductCard img={item.img} title={item.title} span={item.span} buyButton={item.buyButton} label={item.label}/></SwiperSlide>;
                })}
            </Swiper>
        </section>
    )
}