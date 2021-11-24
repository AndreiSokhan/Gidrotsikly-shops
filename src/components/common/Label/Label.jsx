import s from './Label.module.scss';


//лейбл SALE

function Label (props) {

    return (
        <div className={s.Label} style={props.style}>
            {props.label}
        </div>
    );
}

export default Label ;