import { useState } from "react";
import confetti from "canvas-confetti";
import { initialBoard, TURNS } from "@/utils/consts";
import { checkEndGame, checkWinner } from "./logic/check";
import WindowModal from "@/components/WindowModal";
import IndicatorTurn from "@/components/IndicatorTurn";
import Board from "@/components/Board";
import Button from "./components/Button";

function App() {
  const [board, setBoard] = useState<(null | string)[]>(() => {
    const boardFromStorage = window.localStorage.getItem("board");
    return boardFromStorage ? JSON.parse(boardFromStorage) : initialBoard;
  });
  const [turn, setTurn] = useState<string>(() => {
    const turnFromStorage = window.localStorage.getItem("turn");
    return turnFromStorage ?? TURNS.X;
  });
  const [winner, setWinner] = useState<null | string | boolean>(null);

  const updateBoard = (index: number): void => {
    // actualiza el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    // actualiza el board
    const newBoard: (string | null)[] = [...board];
    // si ya existe, no deja sobreescribirlo
    if (newBoard[index] || winner) return;
    newBoard[index] = turn;
    setBoard(newBoard);

    window.localStorage.setItem("board", JSON.stringify(newBoard));
    window.localStorage.setItem("turn", newTurn);

    // revisa si hay un ganador
    const newWinner: string | null = checkWinner(newBoard);
    if (newWinner !== null) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  const restartGame = () => {
    setBoard(initialBoard);
    setTurn(TURNS.X);
    setWinner(null);

    window.localStorage.removeItem("turn");
    window.localStorage.removeItem("board");
  };

  return (
    <>
      <main className="flex flex-col justify-center items-center min-h-dvh gap-4">
        <h1 className="text-4xl upper font-bold">Tic Tac Toe</h1>
        <Button text="Reiniciar el juego" restartGame={restartGame} />
        <Board board={board} updateBoard={updateBoard} />
        <IndicatorTurn turn={turn} />
        {winner !== null && (
          <WindowModal winner={winner} restartGame={restartGame} />
        )}
      </main>
    </>
  );
}

export default App;
