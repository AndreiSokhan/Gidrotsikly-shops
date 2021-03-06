import Product from '../product/Product';
import * as React from 'react';
import img1 from '../../assets/image/Content3/Product/gidro.jpg';
import s from './ProductDesc.module.scss';
import LikeButton from '../../components/common/like-button/LikeButton';
import icon from '../../assets/image/Content3/Product/statisticIcon.svg';
import StarIcon from '@mui/icons-material/Star';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { NavLink } from 'react-router-dom';

//компонента для описания карточки (фото, цена, хар-ка)

const MyRating = styled(Rating)({
    fontSize: 23,
    gap: 7,
    '& .MuiRating-iconFilled': {
        color: '#1C62CD',
    },

    '& .MuiRating-iconEmpty': {
        color: '#C4C4C4'
    }
});

const MyTabs = styled(Tabs)({

    '& .MuiTab-root': {
        fontFamily: 'SFProDisplayRegular',
        fontSize: 20,
        fontWeight: 400,
        textTransform: 'none',
        paddingLeft: '20px',
        opacity: 0.6,
    }
    ,
    '& .Mui-selected': {
        fontFamily: 'SFProDisplayBold',
        fontWeight: 700,
        fontSize: 20,
        textTransform: 'none',
        color: '#2F3035 !important',
        paddingLeft: '0',
        opacity: 1,
    },

});


function ProductDesc(props) {

    const data1 = {
        img: img1,
        span1: "1 200 475 ₽",
        span2: "1 100 475 ₽"
    }

    const data2 = {
        title: "Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic",
        code: "366666-2"
    }

    const data3 = {
        country: "Канада",
        numberOfSeats: "3",
        power: "155",
        engineType: "Бензиновый",
        yearOfIssue: "2018"
    }

    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <div className={s.ProductDesc}>
            <Product img={data1.img} span1={data1.span1} span2={data1.span2} />


            <div className={s.ProductInfo}>
                <h3 className={s.title}>{data2.title}</h3>
                <span className={s.productCode}>Код товара:</span>
                <span className={s.productCode}>{data2.code}</span>


                <div className={s.ratingGroup}>
                    <LikeButton style={{ padding: '0' }} />
                    <img src={icon} alt="icon" />
                    <MyRating
                        readOnly
                        value={4}
                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                    />
                </div>

                <div className={s.productTab}>
                    <MyTabs
                        value={value}
                        onChange={handleChange}
                    >
                        <Tab label="Характеристика" />
                        <Tab label="Наличие в магазине" />
                    </MyTabs>
                </div>

                <table className={s.table} cellspacing="0">
                    
                        <tr className={s.tableRow} >
                            <td className={s.tableName}>Производитель</td>
                            <td className={s.tableValue}>{data3.country}</td>
                        </tr>
                    

                        <tr className={s.tableRow}>
                            <td className={s.tableName}>Количество мест, шт: </td>
                            <td className={s.tableValue}>{data3.numberOfSeats}</td>
                        </tr>
                    

                        <tr className={s.tableRow}>
                            <td className={s.tableName}>Мощность, л.с.</td>
                            <td className={s.tableValue}>{data3.power}</td>
                        </tr>
                    

                        <tr className={s.tableRow}>
                            <td className={s.tableName}>Тип двигателя</td>
                            <td className={s.tableValue}>{data3.engineType}</td>
                        </tr>
                    
                        <tr className={s.tableRow}>
                            <td className={s.tableName}>Год выпуска</td>
                            <td className={s.tableValue}>{data3.yearOfIssue}</td>
                        </tr>
                    
                </table>

                <div className={s.links}>
                            <NavLink className={s.infoProductMoreLink} to="">Показать еще</NavLink>
                            <button className={s.infoProductBtn}>купить</button>
                </div>
            </div>
        </div>
    );
}

export default ProductDesc;