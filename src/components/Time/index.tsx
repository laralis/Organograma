import { IColaborador } from "../../compartilhado/interface/IColaborador";
import { Colaborador } from '../Colaborador';
import "./Time.css";
interface TimeProps{
  nome:string,
  corPrimaria:string,
  corSecundaria:string,
  colaboradores:IColaborador[]
}
export function Time({
  nome,
  corPrimaria,
  corSecundaria,
  colaboradores,
} :TimeProps) {
  const estilos = { backgroundColor: corSecundaria };
  const border = { borderBottomColor: corPrimaria };
  return (
    colaboradores.length > 0 && (
      <section className="time" style={estilos}>
        <h3 style={border}>{nome}</h3>
        <div className="colaboradores">
          {colaboradores.map((colaborador) => (
            <Colaborador
              key={colaborador.nome}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
              corDeFundo={corPrimaria}
            />
          ))}
        </div>
      </section>
    )
  );
}
