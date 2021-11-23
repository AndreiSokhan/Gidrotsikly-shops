import Product from '../product/Product';
import img1 from '../../assets/image/Content3/Product/gidro.jpg';
import s from './ProductDesc.module.scss'

//компонента для описания карточки (фото, цена, хар-ка)





function ProductDesc(props) {

    const data1 = {
        img: img1,
        span1: "1 200 475 ₽",
        span2: "1 100 475 ₽"
    }

    return (
        <div className={s.ProductDesc}>
            <Product img={data1.img} span1={data1.span1} span2={data1.span2}/>
        </div>

    );
}


export default ProductDesc;