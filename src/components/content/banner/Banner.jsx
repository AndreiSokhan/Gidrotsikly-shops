import s from './Banner.module.scss';
import img1 from '../../../assets/image/banner/CFMOTO-X6-EPS_blue2.png';
import img2 from '../../../assets/image/banner/2018-Maverick-X3-X-rc-TURBO-R-Carbon-Black-and-Octane-Blue_3-4-front40722.png';

function Banner (props) {

    return (
        <div className={s.Banner}>

            <div className={s.BannerImages}>
                <img className={s.imgFirst} src={img1} alt="banner-img"></img>
                <img className={s.imgSecond} src={img2} alt="banner-img"></img>
            </div>

            <p className={s.text}>{props.bannerText}</p>
            <button className={s.bannerBtn}>посмотреть все</button>
        </div>
    );
}

export default Banner ;