import imgBanner from "../../assets/banner.png";
import "./Banner.css";
export function Banner() {
  return (
    <header className='banner'>
      <img src={imgBanner} alt="" />
    </header>
  );
}
