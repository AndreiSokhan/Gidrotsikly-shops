import Check from "../Checkbox/Checkbox";
import s from './CheckboxLabel.module.scss';


function CheckboxLabel(props) {
    return (

        <div className={s.schoice}>
            <Check className={s.catalogCheck} />
            <span className={s.checkText}>{props.label}</span>
        </div>

    );
}

export default CheckboxLabel;

