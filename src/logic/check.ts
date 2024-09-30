import { WINNER_COMBOS } from "@/utils/consts";

export const checkWinner = (checkBoard: (string | null)[]) => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (
      checkBoard[a] &&
      checkBoard[a] === checkBoard[b] &&
      checkBoard[a] === checkBoard[c]
    ) {
      return checkBoard[a];
    }
  }
  return null;
};

export const checkEndGame = (newBoard: (string | null)[]): boolean => {
  return newBoard.every((cell) => cell !== null);
};
