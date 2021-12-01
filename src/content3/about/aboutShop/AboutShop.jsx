import s from "./AboutShop.module.scss";
// import CheckboxLabel from '../../../components/common/CheckboxLabel/CheckboxLabel';
import search from '../../image/Search.svg';
import RadioButtonMain from '../../../components/common/RadioButtonMain/RadioButtonMain'



function AboutShop(props) {

   return (
      <div className={s.aboutShop}>
         <div className={s.shopWrap}>
            <span className={s.shop}>Магазин</span>
            <form className={s.shopForm} action="">
               <input className={s.shopInput} type="text" placeholder="|" />
               <button className={s.shopBtn} type="submit"><img src={search} alt="serch" /></button>
            </form>
         </div>
         
         <div className={s.shopCheckWrap}>
            <RadioButtonMain/>
         </div>
         
      </div>
   );
}


export default AboutShop;