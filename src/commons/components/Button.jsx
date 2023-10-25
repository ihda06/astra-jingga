export default function Button({ onClick, text, className }) {
  return (
    <>
      <button className={`rounded-lg px-3 py-1 active:translate-x-1 active:translate-y-1 duration-300 shadow-md ${className}`} onClick={onClick}>{text}</button>
    </>
  );
}
