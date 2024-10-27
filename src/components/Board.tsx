import Cell from "./Cell";

interface Props {
  board: (string | null)[];
  updateBoard: (index: number) => void;
}

export function Board({ board, updateBoard }: Props) {
  return (
    <section className="grid grid-cols-3 gap-4">
      {board.map((cell, index) => (
        <Cell key={index} index={index} updateBoard={updateBoard}>
          {cell}
        </Cell>
      ))}
    </section>
  );
}

export default Board;
