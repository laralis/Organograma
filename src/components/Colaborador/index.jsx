import "./Colaborador.css";

export function Colaborador({ nome, cargo, imagem, corDeFundo }) {
  return (
    <div className="colaborador" >
      <div className="contentIMG" style={{backgroundColor: corDeFundo}}>
        <img src={imagem} alt="" />
      </div>
      <div className="conteudo">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  );
}
