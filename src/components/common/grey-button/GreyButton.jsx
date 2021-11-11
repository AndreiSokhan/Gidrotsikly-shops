import s from './GreyButton.module.scss';


function GreyButton(props) {

    return (

    
        <button className={s.GreyButton}>
            {props.button}
        </button>
        
            
    )

}

export default GreyButton;