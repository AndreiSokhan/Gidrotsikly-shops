import s from './NotAvailiable.module.scss';

//див с "нет в наличии", будет отображаться в случае отсутствия товара

    function NotAvailiable () {

        return (

            <div className={s.NotAvailiable}>
                <p className={s.desc}>нет в наличии</p>
                <a className={s.offer} href="/">Сообщить о поступлении</a>
            </div>

        );



    }

    export default NotAvailiable;