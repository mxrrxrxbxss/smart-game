interface StartScreenProps {
  onStart: () => void;
  onShowRules: () => void;
}

export const StartScreen = ({ onStart, onShowRules }: StartScreenProps) => {
  return (
    <div className="fixed inset-0 w-full h-full bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-950 text-white flex flex-col items-center justify-center p-6 overflow-hidden">
      <div className="absolute w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="flex flex-col items-center text-center z-10 max-w-md w-full px-4">
        <h1 className="text-2xl md:text-4xl font-black tracking-wide mb-8 bg-gradient-to-r from-white via-slate-200 to-blue-300 bg-clip-text text-transparent">
          Проверь свои знания!
        </h1>

        <div className="flex flex-col gap-4 w-full max-w-xs">
          <button
            onClick={onStart}
            className="w-full py-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 rounded-2xl font-bold text-base md:text-lg shadow-[0_10px_30px_rgba(79,70,229,0.5)] hover:shadow-[0_15px_35px_rgba(79,70,229,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 border border-indigo-400/30 cursor-pointer"
          >
            Начать игру
          </button>

          <button
            onClick={onShowRules}
            className="w-full py-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 rounded-2xl font-bold text-base md:text-lg shadow-[0_10px_30px_rgba(79,70,229,0.5)] hover:shadow-[0_15px_35px_rgba(79,70,229,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 border border-indigo-400/30 cursor-pointer"
          >
            Правила игры
          </button>
        </div>
      </div>
    </div>
  );
};
