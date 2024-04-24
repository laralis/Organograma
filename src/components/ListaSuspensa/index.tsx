import "./ListaSuspensa.css";
interface ListaSuspensaProps {
  label: string;
  aoAlterado: (valor: string) => void;
  valor: string;
  itens: string[];
  obrigatorio: boolean;
}
export function ListaSuspensa({
  label,
  itens,
  valor,
  aoAlterado,
  obrigatorio,
}: ListaSuspensaProps) {
  function selecionarTime(event: React.ChangeEvent<HTMLSelectElement>) {
    aoAlterado(event.target.value);
  }
  return (
    <div className="lista-suspensa">
      <label htmlFor="time">{label}</label>
      <select
        onChange={selecionarTime}
        value={valor}
        name="time"
        id="time"
        required={obrigatorio}
      >
        <option value=""></option>
        {itens.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
}
