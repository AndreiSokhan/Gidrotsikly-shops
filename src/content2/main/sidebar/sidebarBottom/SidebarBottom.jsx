import s from './SidebarBottom.module.scss';
import img from './../../../images/selectButton.svg';

// нижняя часть saidBar вкл кнопку, ссылку и кнопку

function SidebarBottom() {

   return (

      <div className={s.sidebarBottom}>
         <button className={s.selectButton}>выбрать</button>
         <button className={s.extraOptionsButton}>Дополнительные параметры <img className={s.selectImg} src={img} alt="select-img"/></button>
         <button className={s.resetButton}>Сбросить фильтр</button>
      </div>

   )
}

export default SidebarBottom;