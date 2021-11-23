import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
// import { styled } from '@mui/material/styles';


//кнопка в форме сердца для выбора товара

function LikeButton () {

    return (
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite/>}/>
    )
}
    export default LikeButton;