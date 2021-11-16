import s from './JetSkisCatalog.module.scss';
import ProductCard from '../../../components/content/cards-catalog/product-card/ProductCard';
import img1 from '../../images/first.jpg';
import img2 from '../../images/second.jpg';
import img3 from '../../images/third.jpg';
import img4 from '../../images/four.jpg';
import img5 from '../../images/five.jpg';
import img6 from '../../images/six.jpg';
import img7 from '../../images/seven.jpg';
import img8 from '../../images/eight.jpg';
import img9 from '../../images/nine.jpg';
import img10 from '../../images/ten.jpg';
import img11 from '../../images/eleven.jpg';
import img12 from '../../images/twelve.jpg';

// главный блок с контентом на второй странице нашего проекта

function JetSkisCatalog() {

   const data = [
      {
         img: img1,
         title: "Гидроцикл BRP SeaDoo GTI 130hp SE BlackMango",
         span: "9 800 ₽",
         buyButton: true
      
      },
      {
         img: img2,
         title: "Гидроцикл BRP SeaDoo GTI 130hp SE BlackMango",
         span: "6 900 ₽",
         buyButton: true
         
      },
      {
         img: img3,
         title: "Гидроцикл BRP SeaDoo GTI 130hp SE BlackMango",
         span: "68 000 ₽",
         buyButton: false
      },
      {
         img: img4,
         title: "Гидроцикл BRP SeaDoo GTI 130hp SE BlackMango",
         span: "9 800 ₽",
         buyButton: true
      
      },
      {
         img: img5,
         title: "Гидроцикл BRP SeaDoo GTI 130hp SE BlackMango",
         span: "9 800 ₽",
         buyButton: true
      
      },
      {
         img: img6,
         title: "Гидроцикл BRP SeaDoo GTI 130hp SE BlackMango",
         span: "9 800 ₽",
         buyButton: true
      
      },
      {
         img: img7,
         title: "Гидроцикл BRP SeaDoo GTI 130hp SE BlackMango",
         span: "9 800 ₽",
         buyButton: true
      
      },
      {
         img: img8,
         title: "Гидроцикл BRP SeaDoo GTI 130hp SE BlackMango",
         span: "9 800 ₽",
         buyButton: true
      
      },
      {
         img: img9,
         title: "Гидроцикл BRP SeaDoo GTI 130hp SE BlackMango",
         span: "9 800 ₽",
         buyButton: true
      
      },
      {
         img: img10,
         title: "Гидроцикл BRP SeaDoo GTI 130hp SE BlackMango",
         span: "9 800 ₽",
         buyButton: true
      
      },
      {
         img: img11,
         title: "Гидроцикл BRP SeaDoo GTI 130hp SE BlackMango",
         span: "9 800 ₽",
         buyButton: true
      
      },
      {
         img: img12,
         title: "Гидроцикл BRP SeaDoo GTI 130hp SE BlackMango",
         span: "9 800 ₽",
         buyButton: true
      
      },
      {
         img: img1,
         title: "Гидроцикл BRP SeaDoo GTI 130hp SE BlackMango",
         span: "9 800 ₽",
         buyButton: true
      },
      {
         img: img1,
         title: "Гидроцикл BRP SeaDoo GTI 130hp SE BlackMango",
         span: "9 800 ₽",
         buyButton: true
      },
      {
         img: img1,
         title: "Гидроцикл BRP SeaDoo GTI 130hp SE BlackMango",
         span: "9 800 ₽",
         buyButton: true
      },
      
   ]

   return (

      <div className={s.jetSkisCatalog}>
         {data.map(item => {
            return <ProductCard img={item.img} title={item.title} span={item.span} buyButton={item.buyButton}/>
         })}
      </div>

   )

}

export default JetSkisCatalog;