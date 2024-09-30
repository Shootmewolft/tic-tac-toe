import Cell from "./Cell";
import { TURNS } from "@/utils/consts";

interface Props {
  turn: string;
}

export function IndicatorTurn({ turn }: Props) {
  return (
    <section className="flex gap-4">
      <Cell isSelected={turn === TURNS.O}>{TURNS.O}</Cell>
      <Cell isSelected={turn === TURNS.X}>{TURNS.X}</Cell>
    </section>
  );
}

export default IndicatorTurn;
