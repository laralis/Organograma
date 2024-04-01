import "./ListaSuspensa.css";
export function ListaSuspensa({ label, itens, valor, aoAlterado } = props) {
  function selecionarTime(event) {
    aoAlterado(event.target.value);
  }
  return (
    <div className="lista-suspensa">
      <label htmlFor="time">{label}</label>
      <select onChange={selecionarTime} value={valor} name="time" id="time">
        <option value=""></option>
        {itens.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
}
