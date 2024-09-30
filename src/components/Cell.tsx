import { ReactNode } from "react";

interface Props {
  updateBoard?: (index: number) => void;
  children: ReactNode;
  isSelected?: boolean;
  index?: number;
}

function Cell({ children, updateBoard, isSelected, index }: Props) {
  const handleClick = () => {
    if (updateBoard && index !== undefined) {
      updateBoard(index);
    }
    return;
  };

  return (
    <article
      className={`border cursor-pointer ${
        isSelected ? "border-red-500" : "border-white"
      } h-24 w-24 flex items-center justify-center select-none rounded`}
      onClick={handleClick}
    >
      <span className="font-bold text-4xl">{children}</span>
    </article>
  );
}

export default Cell;
