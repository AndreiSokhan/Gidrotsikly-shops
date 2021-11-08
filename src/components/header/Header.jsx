import s from './Header.module.scss';
import HeaderBottom from './headerBottom/HeaderBottom';

function Header(props) {

   const data1 ={
      link: "ATVs"
   }
   const data2 ={
      link: "Speedboats"
   }
   const data3 ={
      link: "Jet-skis"
   }
   const data4 ={
      link: "Boats"
   }
   const data5 ={
      link: "ATVs"
   }
   const data6 ={
      link: "Snowmobiles"
   }
   const data7 ={
      link: "Engines"
   }
   const data8 ={
      link: "Spare-parts"
   }


   return (
      <div className={s.header}>
         <div className={s.headerTop}>
         </div>
         <HeaderBottom data1={data1} data2={data2} data3={data3} data4={data4} data5={data5} data6={data6} data7={data7} data8={data8}/>
      </div>
   );
}

export default Header;

