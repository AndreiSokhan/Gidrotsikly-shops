import s from "./AboutShop.module.scss";
import CheckboxLabel from '../../../components/common/CheckboxLabel/CheckboxLabel';
import search from '../../image/Search.svg'



function AboutShop(props) {

   return (
      <div className={s.aboutShop}>
         <div className={s.shopWrap}>
            <span className={s.shop}>Магазин</span>
            <form className={s.shopForm} action="">
               <input className={s.shopInput} type="search" placeholder="|" />
               <button className={s.shopBtn} type="submit"><img src={search} alt="serch" /></button>
            </form>
         </div>
         <div className={s.shopCheckWrap}>
            <div style={{ marginRight: "54px" }}>
               <CheckboxLabel label="Забрать сегодня" />
            </div>
               <CheckboxLabel label="Забрать в течение недели" />
            </div>
      </div>
   );
}


export default AboutShop;