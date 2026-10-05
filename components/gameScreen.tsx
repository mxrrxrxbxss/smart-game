import { useState } from "react";
import type { Category, GameState } from "../types/gameTypes";

interface GameScreenProps {
  questionNumber: number;
  onAnswer: (optionIndex: number) => void;
  onNextQuestion: () => void;
  onGameOver: () => void;
  onLoseGame: () => void;
  category: Category;
  gameState: GameState;
  onUseHint: (hintType: "fiftyFifty" | "audience" | "phone") => void;
}

export const GameScreen = ({
  questionNumber,
  onAnswer,
  onNextQuestion,
  onGameOver,
  onLoseGame,
  category,
  gameState,
  onUseHint,
}: GameScreenProps) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [hiddenOptions, setHiddenOptions] = useState<number[]>([]);
  const [hintMessage, setHintMessage] = useState<string | null>(null);

  const currentQuestion = category.questions[questionNumber];

  const handleOptionClick = (index: number) => {
    if (isAnswered || hiddenOptions.includes(index)) return;

    setSelectedOption(index);
    setIsAnswered(true);
    onAnswer(index);
    setHintMessage(null);

    const isCorrect = index === currentQuestion.correctAnswerIndex;

    if (isCorrect) {
      setTimeout(() => {
        onNextQuestion();
      }, 2000);
    } else {
      setTimeout(() => {
        onLoseGame();
      }, 1500);
    }
  };

  const handleFiftyFifty = () => {
    if (!gameState.fiftyFiftyHint || isAnswered) return;

    const incorrectIndexes = currentQuestion.options
      .map((_, index) => index)
      .filter((index) => index !== currentQuestion.correctAnswerIndex);

    const shuffledIncorrect = incorrectIndexes.sort(() => 0.5 - Math.random());
    const toHide = shuffledIncorrect.slice(0, 2);

    setHiddenOptions(toHide);
    onUseHint("fiftyFifty");
  };

  const handleAudiencePoll = () => {
    if (!gameState.audiencePollHint || isAnswered) return;

    const correct = currentQuestion.correctAnswerIndex;
    setHintMessage(
      `📊 Зал считает, что правильный вариант: ${String.fromCharCode(65 + correct)}`,
    );
    onUseHint("audience");
  };

  const handlePhoneFriend = () => {
    if (!gameState.phoneAFriendHint || isAnswered) return;

    const correct = currentQuestion.correctAnswerIndex;
    setHintMessage(
      `📞 Друг уверен, что это вариант ${String.fromCharCode(65 + correct)}`,
    );
    onUseHint("phone");
  };

  return (
    <div className="fixed inset-0 w-full h-full bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-950 text-white flex flex-col justify-between p-6 md:p-10 overflow-y-auto">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 z-10">
        <div className="flex items-center space-x-3">
          <div className="px-4 py-2 bg-slate-900/80 border border-slate-800 rounded-xl text-slate-300 text-sm font-medium backdrop-blur-md">
            Вопрос{" "}
            <span className="text-white font-bold">{questionNumber + 1}</span>{" "}
            из {category.questions.length}
          </div>

          <button
            onClick={onGameOver}
            className="px-4 py-2 bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white rounded-xl font-semibold text-sm hover:bg-red-950/40 hover:border-red-500/50 transition-all duration-300 cursor-pointer backdrop-blur-md"
          >
            Назад в меню
          </button>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={handleFiftyFifty}
            disabled={!gameState.fiftyFiftyHint || isAnswered}
            className={`px-4 py-2 rounded-xl font-bold text-sm border transition-all duration-300 cursor-pointer backdrop-blur-md ${
              gameState.fiftyFiftyHint
                ? "bg-indigo-950/60 border-indigo-500/50 text-indigo-300 hover:bg-indigo-900/60 shadow-lg shadow-indigo-600/20"
                : "bg-slate-900/40 border-slate-800 text-slate-600 opacity-40 cursor-not-allowed"
            }`}
          >
            50 / 50
          </button>
          <button
            onClick={handleAudiencePoll}
            disabled={!gameState.audiencePollHint || isAnswered}
            className={`px-4 py-2 rounded-xl font-bold text-sm border transition-all duration-300 cursor-pointer backdrop-blur-md ${
              gameState.audiencePollHint
                ? "bg-indigo-950/60 border-indigo-500/50 text-indigo-300 hover:bg-indigo-900/60 shadow-lg shadow-indigo-600/20"
                : "bg-slate-900/40 border-slate-800 text-slate-600 opacity-40 cursor-not-allowed"
            }`}
          >
            👥 Зал
          </button>
          <button
            onClick={handlePhoneFriend}
            disabled={!gameState.phoneAFriendHint || isAnswered}
            className={`px-4 py-2 rounded-xl font-bold text-sm border transition-all duration-300 cursor-pointer backdrop-blur-md ${
              gameState.phoneAFriendHint
                ? "bg-indigo-950/60 border-indigo-500/50 text-indigo-300 hover:bg-indigo-900/60 shadow-lg shadow-indigo-600/20"
                : "bg-slate-900/40 border-slate-800 text-slate-600 opacity-40 cursor-not-allowed"
            }`}
          >
            📞 Звонок
          </button>
        </div>
      </div>

      <div className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center z-10 my-auto py-6 space-y-6">
        {hintMessage && (
          <div className="px-6 py-2.5 bg-amber-500/10 border border-amber-500/30 rounded-2xl text-amber-300 text-center text-sm backdrop-blur-md">
            {hintMessage}
          </div>
        )}

        <h2 className="text-xl py-8 md:text-2xl font-bold tracking-tight text-center bg-gradient-to-r from-white via-slate-100 to-indigo-200 bg-clip-text text-transparent leading-snug px-4">
          {currentQuestion.questionText}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 w-full">
          {currentQuestion.options.map((option, index) => {
            const isHidden = hiddenOptions.includes(index);
            if (isHidden) {
              return <div key={index} className="invisible" />;
            }

            let buttonStyle =
              "bg-slate-900/80 hover:bg-indigo-950/60 border border-slate-800 hover:border-indigo-500/60 text-slate-100";

            if (selectedOption !== null) {
              if (index === currentQuestion.correctAnswerIndex) {
                buttonStyle =
                  "bg-green-600/90 border-green-500 text-white shadow-lg shadow-green-600/30";
              } else if (index === selectedOption) {
                buttonStyle =
                  "bg-red-600/90 border-red-500 text-white shadow-lg shadow-red-600/30";
              } else {
                buttonStyle =
                  "bg-slate-900/40 opacity-40 border-slate-800 text-slate-400";
              }
            }

            return (
              <button
                key={index}
                onClick={() => handleOptionClick(index)}
                disabled={isAnswered}
                className={`w-full py-3.5 px-5 rounded-2xl font-medium text-base flex items-center justify-between backdrop-blur-xl transition-all duration-300 cursor-pointer ${buttonStyle}`}
              >
                <div className="flex items-center space-x-3 text-left">
                  <span className="text-indigo-400 font-bold">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  <span>{option}</span>
                </div>
                {selectedOption === index && (
                  <span className="font-bold text-lg">
                    {index === currentQuestion.correctAnswerIndex ? "✔" : "✖"}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="w-full max-w-2xl mx-auto flex items-center justify-center z-10 pb-4 h-12" />
    </div>
  );
};
