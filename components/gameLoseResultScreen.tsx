import type { GameState } from "../types/gameTypes";

interface GameLoseResultScreenProps {
  onSelectCategory: () => void;
  onRestartGame: () => void;
  onBackToMenu: () => void;
  gameState: GameState;
}

export const GameLoseResultScreen = ({
  onSelectCategory,
  onRestartGame,
  onBackToMenu,
  gameState,
}: GameLoseResultScreenProps) => {
  return (
    <div className="fixed inset-0 w-full h-full bg-gradient-to-br from-slate-950 via-red-950/40 to-slate-950 text-white flex flex-col items-center justify-center p-6 text-center overflow-y-auto">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-lg w-full bg-slate-900/80 border border-slate-800/80 p-10 rounded-3xl backdrop-blur-xl shadow-2xl flex flex-col items-center">
        <h3 className="text-sm md:text-4xl font-black mb-4 bg-gradient-to-r from-red-400 via-rose-200 to-red-200 bg-clip-text text-transparent">
          Игра окончена
        </h3>
        <p className="text-slate-300 py-2 text-lg md:text-xl mb-8 leading-relaxed">
          Ваш результат:{" "}
          <span className="font-bold text-white">
            {gameState.questionNumber} из {gameState.category?.questions.length}
          </span>
        </p>

        <button
          onClick={onSelectCategory}
          className="w-full mt-6 py-2 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl font-bold text-lg hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer shadow-lg shadow-emerald-600/40 border border-emerald-400/30"
        >
          Выбрать другую категорию
        </button>

        <button
          onClick={onRestartGame}
          className="w-full mt-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl font-bold text-lg hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer shadow-lg shadow-indigo-600/40 border border-indigo-400/30"
        >
          Попробовать снова
        </button>

        <button
          onClick={onBackToMenu}
          className="w-full mt-4 py-2 bg-gradient-to-r from-red-600 to-rose-600 rounded-2xl font-bold text-lg hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer shadow-lg shadow-red-600/40 border border-red-400/30"
        >
          Вернуться в меню
        </button>
      </div>
    </div>
  );
};
