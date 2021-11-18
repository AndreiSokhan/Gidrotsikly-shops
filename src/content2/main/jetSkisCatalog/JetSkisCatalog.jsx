import s from './JetSkisCatalog.module.scss';
import ProductCard from '../../../components/content/cards-catalog/product-card/ProductCard';
import Pagination from "./../../../components/common/pagination/Pagination";
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
         span: "1 049 500 ₽",
         buyButton: true
      
      },
      {
         img: img2,
         title: "Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic",
         span: "1 100 475 ₽",
         buyButton: true, 
         label: "SALE"
         
      },
      {
         img: img3,
         title: "Гидроцикл BRP SeaDoo GTR 230hp X California green",
         span: "1 323 700 ₽",
         buyButton: true
      },
      {
         img: img4,
         title: "Гидроцикл BRP SeaDoo GTR 230hp STD Black / Gulfstream",
         span: "9 800 ₽",
         buyButton: false,
         label: "SALE"
      
      },
      {
         img: img5,
         title: "Гидроцикл BRP SeaDoo GTX 300hp LTD Liquid Metal",
         span: "1 543 000 ₽",
         buyButton: true
      
      },
      {
         img: img6,
         title: "Гидроцикл BRP SeaDoo Spark 60hp 2 up",
         span: "732 345 ₽",
         buyButton: true
      
      },
      {
         img: img7,
         title: "Гидроцикл BRP SeaDoo Spark GTS 90hp Rental",
         span: "857 666 ₽",
         buyButton: true
      
      },
      {
         img: img8,
         title: "Гидроцикл BRP SeaDoo WAKE 230hp PRO Teal blue",
         span: "1 229 711 ₽",
         buyButton: true,
         label: "SALE"
      
      },
      {
         img: img9,
         title: "Гидроцикл Spark 2-UP 900 Ho Ace Chili Pepper",
         span: "587 440 ₽",
         buyButton: true
      
      },
      {
         img: img10,
         title: "Гидроцикл Spark 2-UP 900 Ho Ace Pineapple",
         span: "587 440 ₽",
         buyButton: true
      
      },
      {
         img: img11,
         title: "Гидроцикл BRP Sea-doo Spark 2-UP 900 Ace Vanilla",
         span: "9 800 ₽",
         buyButton: false,
         label: "SALE"
      
      },
      {
         img: img12,
         title: "Гидроцикл Spark 3-UP 900 HO Ace IBR Blueberry",
         span: "9 800 ₽",
         buyButton: false
      
      }
      
   ]

   return (

      <div className={s.jetSkisCatalog}>
         {data.map(item => {
            return <ProductCard img={item.img} title={item.title} span={item.span} buyButton={item.buyButton} label={item.label}/>
         })}
         <Pagination/>
      </div>

   )

}

export default JetSkisCatalog;