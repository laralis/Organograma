import rodape from "../../assets/rodape.png";
import logo from "../../assets/Logo.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import "./Rodape.css";
export function Rodape() {
  return (
    <footer>
      <div className="content">
        <div className="socialmedia">
          <a href="">
            <img src={facebook} alt="" />
          </a>
          <a href="">
            <img src={twitter} alt="" />
          </a>
          <a href="">
            <img src={instagram} alt="" />
          </a>
        </div>
        <img className="logo" src={logo} alt="" />
        <h3>Desenvolvido por Alura.</h3>
      </div>
    </footer>
  );
}
