import classes from './HeaderBanner.module.css';
import bannerImg from '../../assets/HeadBanner/HeadBannerImage.png';

function HeaderBanner(){
  return (
    <header className={classes.header}>
      <img src={bannerImg} alt='headbannerImg'/>
    </header>
  )
}

export default HeaderBanner;