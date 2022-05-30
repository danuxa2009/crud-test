export function Button({ text = 'Button', onClick, className }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
    >
      {text}
    </button>
  );
}
