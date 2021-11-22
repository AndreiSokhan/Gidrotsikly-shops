import s from './SidebarBottom.module.scss';

// нижняя часть saidBar вкл кнопку, ссылку и кнопку

function SidebarBottom() {

   return (

      <div className={s.sidebarBottom}>
         <button className={s.selectButton}>выбрать</button>
         <button className={s.extraOptionsButton}>Дополнительные параметры</button>
         <button className={s.resetButton}>Сбросить фильтр</button>
      </div>

   )
}

export default SidebarBottom;