import '../App.css'

export const Button = ({text,glow=true}) =>{
  return (
  <>
  <button 
  className={glow ? "btn-glow" : "btn"}>
  {text}
  </button>
  </>);
}