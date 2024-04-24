import { Banner } from "./components/Banner";
import { Formulario } from "./components/Formulario";
import { useState } from "react";
import "./reset.css";
import { Time } from "./components/Time";
import { Rodape } from './components/Rodape';
import imagem from "./assets/banner.png"
import { IColaborador } from './compartilhado/interface/IColaborador';
export function App() {
  const times = [
    {
      nome: "Programação",
      corPrimaria: "#57c278",
      corSecundaria: "#d9f7e9",
    },
    {
      nome: "Front-End",
      corPrimaria: "#82cffa",
      corSecundaria: "#e8f8ff",
    },
    {
      nome: "Data Science",
      corPrimaria: "#a6d157",
      corSecundaria: "#f0f8e2",
    },
    {
      nome: "DevOps",
      corPrimaria: "#e06b69",
      corSecundaria: "#fde7e8",
    },
    {
      nome: "Design",
      corPrimaria: "#db6ebf",
      corSecundaria: "#fae9f5",
    },
    {
      nome: "Mobile",
      corPrimaria: "#ffba05",
      corSecundaria: "#fff5d9",
    },
    {
      nome: "Inovação e gestão",
      corPrimaria: "#ff8a29",
      corSecundaria: "#ffeedf",
    },
  ];
  const [colaboradores, setColaboradores] = useState<IColaborador[]>([]);
  function novoColaboradorAdicionador(colaborador:IColaborador) {
    setColaboradores([...colaboradores, colaborador]);
    console.log(colaboradores);
  }
  return (
    <div>
      <Banner enderecoImagem={imagem} textoAlternativo='Banner do aplicativo Organo'/>
      <Formulario
        aoColaboradorCadastrado={(colaborador) =>{
          debugger
          novoColaboradorAdicionador(colaborador)
        }
        }
        times={times.map((time) => {
          return time.nome;
        })}
      />
      {times.map((time) => {
        return (
          <Time
            key={time.nome}
            nome={time.nome}
            corPrimaria={time.corPrimaria}
            corSecundaria={time.corSecundaria}
            colaboradores={colaboradores.filter(
              (colaborador) => colaborador.time === time.nome
            )}
          />
        );
      })}
      <Rodape/>
    </div>
  );
}
