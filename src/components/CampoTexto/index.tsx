import "./CampoTexto.css";
interface CampoTextoProps {
  aoAlterado: (valor: string) => void;
  placeholder: string;
  label: string;
  valor: string;
  obrigatorio?: boolean;
}
export function CampoTexto({
  label,
  placeholder,
  valor,
  obrigatorio=false,
  aoAlterado,
} :CampoTextoProps) {
  function aoDigitar(event:React.ChangeEvent<HTMLInputElement>) {
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
