interface Props {
  restartGame: () => void;
  text: string;
}

export function Button({ restartGame, text }: Props) {
  const handleClick = () => {
    restartGame();
  };
  return (
    <button onClick={handleClick} className="border border-white p-4 font-bold rounded hover:bg-white hover:text-black transition duration-300 select-none">
      {text}
    </button>
  );
}

export default Button;
