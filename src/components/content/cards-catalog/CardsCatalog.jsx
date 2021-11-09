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
        label: null,
        buyButton: true
    }

    const data2 = {
        img: img2,
        title:"Спасательный жилет BRP Men's Airflow PFD",
        span: "6 900 ₽",
        label: "SALE",
        buyButton: true
    }

    const data3 = {
        img: img3,
        title:"BRP Audio-Premium System",
        span: "68 000 ₽",
        label: null,
        buyButton: true
    }

    const data4 = {
        img: img4,
        title:"Спасательное снаряжение",
        label: "SALE",
        buyButton: false
    }



    return (
        <section className={s.CardsCatalog}>
            <ProductCard img={data1.img} title={data1.title} span={data1.span} buyButton={data1.buyButton}/>
            <ProductCard img={data2.img} title={data2.title} span={data2.span} label={data2.label} buyButton={data2.buyButton} />
            <ProductCard img={data3.img} title={data3.title} span={data3.span} buyButton={data3.buyButton}/>
            <ProductCard img={data4.img} title={data4.title} label={data4.label}  buyButton={data4.buyButton}/>
        </section>
    );
}

export default CardsCatalog;