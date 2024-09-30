import Cell from "./Cell";
import Button from "./Button";

interface Props {
  winner: string | null | boolean;
  restartGame: () => void;
}

function WindowModal({ winner, restartGame }: Props) {
  const textWinner = !winner ? "Empate" : "Ganó:";
  return (
    <section className="absolute bg-black/80 w-dvw flex flex-col gap-4 items-center h-dvh justify-center rounded">
      <h2 className="text-2xl">{textWinner}</h2>
      {winner && <Cell>{winner}</Cell>}
      <Button restartGame={restartGame} text="Reiniciar el juego" />
    </section>
  );
}

export default WindowModal;
