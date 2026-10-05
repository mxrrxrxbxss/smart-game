import { useState } from "react";
import type { GameState, Category } from "../types/gameTypes";
import { StartScreen } from "../components/startScreen";
import { CategorySelection } from "../components/categorySelection";
import { GameScreen } from "../components/gameScreen";
import { GameRulesScreen } from "../components/gameRulesScreen";
import { GameWinResultScreen } from "../components/gameWinResultScreen";
import { GameLoseResultScreen } from "../components/gameLoseResultScreen";

export const Game = () => {
  const [gameState, setGameState] = useState<GameState>({
    gameStatus: "not_started",
    category: null,
    questionNumber: 0,
    fiftyFiftyHint: true,
    audiencePollHint: true,
    phoneAFriendHint: true,
  });

  const handleSelectCategory = (category: Category) => {
    setGameState((prev) => ({
      ...prev,
      category: category,
      gameStatus: "in_progress",
      questionNumber: 0,
    }));
  };

  const handleNextQuestion = () => {
    if (!gameState.category) return;

    if (gameState.questionNumber + 1 < gameState.category.questions.length) {
      setGameState((prev) => ({
        ...prev,
        questionNumber: prev.questionNumber + 1,
      }));
    } else {
      setGameState((prev) => ({
        ...prev,
        gameStatus: "completed",
      }));
    }
  };

  return (
    <>
      {/* Стартовый экран */}
      {gameState.gameStatus === "not_started" && (
        <StartScreen
          onStart={() =>
            setGameState((prev) => ({
              ...prev,
              gameStatus: "category_selection",
            }))
          }
          onShowRules={() =>
            setGameState((prev) => ({
              ...prev,
              gameStatus: "rules",
            }))
          }
        />
      )}

      {/* Выбор категорий */}
      {gameState.gameStatus === "category_selection" && (
        <CategorySelection
          onSelectCategory={handleSelectCategory}
          onBackToMenu={() =>
            setGameState((prev) => ({ ...prev, gameStatus: "not_started" }))
          }
        />
      )}

      {/* Игра */}
      {gameState.gameStatus === "in_progress" && gameState.category && (
        <GameScreen
          key={gameState.questionNumber}
          questionNumber={gameState.questionNumber}
          onAnswer={() => {}}
          onNextQuestion={handleNextQuestion}
          onGameOver={() =>
            setGameState({
              gameStatus: "not_started",
              category: null,
              questionNumber: 0,
              fiftyFiftyHint: true,
              audiencePollHint: true,
              phoneAFriendHint: true,
            })
          }
          onLoseGame={() =>
            setGameState((prev) => ({ ...prev, gameStatus: "lose" }))
          }
          category={gameState.category}
          gameState={gameState}
          onUseHint={(hintType) => {
            setGameState((prev) => ({
              ...prev,
              fiftyFiftyHint:
                hintType === "fiftyFifty" ? false : prev.fiftyFiftyHint,
              audiencePollHint:
                hintType === "audience" ? false : prev.audiencePollHint,
              phoneAFriendHint:
                hintType === "phone" ? false : prev.phoneAFriendHint,
            }));
          }}
        />
      )}

      {/* Экран победы */}
      {gameState.gameStatus === "completed" && (
        <GameWinResultScreen
          onSelectCategory={() =>
            setGameState((prev) => ({
              ...prev,
              gameStatus: "category_selection",
              questionNumber: 0,
              fiftyFiftyHint: true,
              audiencePollHint: true,
              phoneAFriendHint: true,
            }))
          }
          onBackToMenu={() =>
            setGameState({
              gameStatus: "not_started",
              category: null,
              questionNumber: 0,
              fiftyFiftyHint: true,
              audiencePollHint: true,
              phoneAFriendHint: true,
            })
          }
          gameState={gameState}
        />
      )}

      {/* Экран проигрыша */}
      {gameState.gameStatus === "lose" && (
        <GameLoseResultScreen
          onSelectCategory={() =>
            setGameState((prev) => ({
              ...prev,
              gameStatus: "category_selection",
              questionNumber: 0,
              fiftyFiftyHint: true,
              audiencePollHint: true,
              phoneAFriendHint: true,
            }))
          }
          onRestartGame={() =>
            setGameState((prev) => ({
              ...prev,
              gameStatus: "in_progress",
              questionNumber: 0,
              fiftyFiftyHint: true,
              audiencePollHint: true,
              phoneAFriendHint: true,
            }))
          }
          onBackToMenu={() =>
            setGameState({
              gameStatus: "not_started",
              category: null,
              questionNumber: 0,
              fiftyFiftyHint: true,
              audiencePollHint: true,
              phoneAFriendHint: true,
            })
          }
          gameState={gameState}
        />
      )}

      {/* Правила игры */}
      {gameState.gameStatus === "rules" && (
        <GameRulesScreen
          onClose={() =>
            setGameState((prev) => ({
              ...prev,
              gameStatus: "not_started",
            }))
          }
        />
      )}
    </>
  );
};
