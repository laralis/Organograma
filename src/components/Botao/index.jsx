import './Botao.css'
export function Botao({children}=props) {
  return (
    <button className='botao'>
      {children}
    </button>
  )
}