import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

// хлебные крошки (показывают где находишься на сайте)

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function CustomSeparator() {
    const breadcrumbs = [
    <Link underline="hover" key="1" color="#C4C4C4" href="#" onClick={handleClick}>Главная</Link>,
    <Typography key="2" color="#C4C4C4">Гидроциклы</Typography>,
    <Typography key="3" color="#C4C4C4">Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic</Typography>
    
];

return (
    <Stack spacing={2}>
    <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb" color="#C4C4C4">{breadcrumbs}
    </Breadcrumbs>
    </Stack>
);
}