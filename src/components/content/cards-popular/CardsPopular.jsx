import s from './CardsPopular.module.scss';
import BasicTabs from '../../common/product-tab/BasicTabs';
import CardsCatalog from '../cards-catalog/CardsCatalog'
import GreyButton from '../../common/grey-button/GreyButton';
import img1 from './../../../assets/image/ProductCard/cq5dam.web.768.png';
import img2 from './../../../assets/image/ProductCard/55a4f760715a1.png';
import img3 from './../../../assets/image/ProductCard/s-l225.png';
import img4 from './../../../assets/image/ProductCard/s-l1600.png';


//секция с популярными товарами 

function CardsPopular(props) {


    const data1 = {
        img: img1,
        title:"Водонепроницаемый рюкзак",
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

        <section className={s.CardsPopular}>
            <h2 className={s.title}>Популярные товары</h2>
            <BasicTabs/>
            {/* ProductSlider */}
            <CardsCatalog data1={data1} data2={data2} data3={data3} data4={data4}/>
            <GreyButton button="Показать еще"/>
        </section>
        
            
    )

}

export default CardsPopular;