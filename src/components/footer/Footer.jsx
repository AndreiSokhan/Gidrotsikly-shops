import s from './Footer.module.scss';

function Footer() {
   return (
      <div className={s.container}>
         <div className={s.footer}>
            <div className={s.Input}>
               <p className={s.text}>Подпишитесь на нашу рассылку <br /> и узнавайте о акциях быстрее</p>
            </div>

            {/* компонента со списком */}
      
            <div className={s.social}>
               <a className={s.socialLink} href="/">
                  <img className={s.socialImg}  alt="Instagram" />
               </a>
               <a className={s.socialLink} href="/">
                  <img className={s.socialImg}  alt="VK" />
               </a>
               <a className={s.socialLink} href="/">
                  <img className={s.socialImg} alt="Facebook" />
               </a>
               <a className={s.socialLink} href="/">
                  <img className={s.socialImg} alt="Youtube" />
               </a>
            </div>
         </div>
      </div>
   );
}

export default Footer;