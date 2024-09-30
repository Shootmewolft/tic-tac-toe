export const TURNS = {
  X: "❌",
  O: "⚪",
};

export const initialBoard: (string | null)[] = Array(9).fill(null);

export const WINNER_COMBOS: (number[])[] = [
  [0, 4, 8],
  [6, 4, 2],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];
