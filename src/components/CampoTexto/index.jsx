import "./CampoTexto.css";
export function CampoTexto({
  label,
  placeholder,
  obrigatorio,
  valor,
  aoAlterado,
} = props) {
  function aoDigitar(event) {
    aoAlterado(event.target.value);
  }
  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input
        onChange={aoDigitar}
        value={valor}
        required={obrigatorio}
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}
