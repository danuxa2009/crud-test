export const Button = ({ text = 'Button', onClick, className}) => {
  return( 
    <button 
    onClick={onClick} 
    className={className}>
      {text}
    </button>
  )
}
