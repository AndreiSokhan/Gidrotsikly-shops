import s from './Footer.module.scss';
import FooterList from './FooterList/FooterList';
import vk from '../../assets/image/footer/vk.svg';
import insta from '../../assets/image/footer/insta.svg';
import youtube from '../../assets/image/footer/youtube.svg';
import facebook from '../../assets/image/footer/facebook.svg';


function Footer() {

   const dataList1={
      title: "Информация",
      item1: "О компании",
      item2: "Контакты",
      item3: "Акции",
      item4: "Магазины",
      bottom: "Договор оферты"
   }
   const dataList2={
      title: "Интернет-магазин",
      item1: "Доставка и самовывоз",
      item2: "Оплата",
      item3: "Возврат-обмен",
      item4: "Новости",
      bottom: "Политика обработки персональных данных"
}


   return (
      <div className={s.container}>
         <div className={s.footer}>
            <div className={s.wrapper}>
               <p className={s.text}>Подпишитесь на нашу рассылку и узнавайте о акциях быстрее</p>
               <div className={s.inner}>
               <input className={s.input} type="email" placeholder="Введите ваш e-mail:" ></input>
               <button className={s.btn}>отправить</button>
               </div> 
            </div>

   
            <FooterList title={dataList1.title} item1={dataList1.item1} item2={dataList1.item2} item3={dataList1.item3} item4={dataList1.item4} bottom={dataList1.bottom}/>
            <FooterList title={dataList2.title} item1={dataList2.item1} item2={dataList2.item2} item3={dataList2.item3} item4={dataList2.item4} bottom={dataList2.bottom}/>
      
            <div className={s.social}>
               <a className={s.socialLink} href="/">
                  <img className={s.socialImg} src={insta} alt="Instagram" />
               </a>
               <a className={s.socialLink} href="/">
                  <img className={s.socialImg} src={vk} alt="VK" />
               </a>
               <a className={s.socialLink} href="/">
                  <img className={s.socialImg} src={facebook} alt="Facebook" />
               </a>
               <a className={s.socialLink} href="/">
                  <img className={s.socialImg} src={youtube} alt="Youtube" />
               </a>
            </div>
   
         </div>
      </div>
   );
}

export default Footer;