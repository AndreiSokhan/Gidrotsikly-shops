import s from './Label.module.scss';


//лейбл SALE

function Label (props) {

    return (
        <div className={s.Label}>
            {props.label}
        </div>
    );
}

export default Label ;