import img from './../'

function SectionProduct() {
   return (
      <div className={SectionProduct}>
         <div>
            <h2>Квадроциклы</h2>
            <a href={img}>Подробнее</a>
         </div>
         <img src={img} alt="" />
      </div>
   );
}

export default SectionProduct;
