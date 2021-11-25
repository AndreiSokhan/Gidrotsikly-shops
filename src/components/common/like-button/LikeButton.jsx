import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
// import { styled } from '@mui/material/styles';


//кнопка в форме сердца для выбора товара

// const BpIcon = styled('span')(({ theme }) => ({
//     borderRadius: 3,
//     width: 16,
//     height: 16,
//     '.Mui-focusVisible &': {
//         outline: '2px auto rgba(19,124,189,.6)',
//         outlineOffset: 2,
//     },
//     'input:hover ~ &': {
//         backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
//     },
//     'input:disabled ~ &': {
//         boxShadow: 'none',
//         background:
//             theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
//     },
// }));

function LikeButton(props) {

    return (
        <Checkbox style={props.style} icon={<FavoriteBorder />} checkedIcon={<Favorite />}
        />
    )
}
export default LikeButton;