import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
// import { styled } from '@mui/material/styles';


//кнопка в форме сердца для выбора товара

function LikeButton (props) {

    return (
        <Checkbox style={props.style} icon={<FavoriteBorder />} checkedIcon={<Favorite/>}
        />
    )
}
    export default LikeButton;