import s from './CardsCatalog.module.scss';
import ProductCard from './product-card/ProductCard';
import img1 from './../../../assets/image/ProductCard/cq5dam.web.768.png';
import img2 from './../../../assets/image/ProductCard/55a4f760715a1.png';
import img3 from './../../../assets/image/ProductCard/s-l225.png';
import img4 from './../../../assets/image/ProductCard/s-l1600.png';

//секция, где будут наши карточки с товарами

function CardsCatalog() {

    const data1 = {
        img: img1,
        title:"Водонепроницаемый Рюкзак",
        span: "9 800 ₽",
        label: null
    }

    const data2 = {
        img: img2,
        title:"Спасательный жилет BRP Men's Airflow PFD",
        span: "6 900 ₽",
        label: "SALE"
    }

    const data3 = {
        img: img3,
        title:"BRP Audio-Premium System",
        span: "68 000 ₽",
        label: null
    }

    const data4 = {
        img: img4,
        title:"Спасательное снаряжение",
        label: "SALE"
    }



    return (
        <section className={s.CardsCatalog}>
            <ProductCard img={data1.img} title={data1.title} span={data1.span}/>
            <ProductCard img={data2.img} title={data2.title} span={data2.span} label={data2.label} />
            <ProductCard img={data3.img} title={data3.title} span={data3.span}/>
            <ProductCard img={data4.img} title={data4.title} label={data4.label} />
        </section>
    );
}

export default CardsCatalog;