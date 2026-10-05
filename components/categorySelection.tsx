import type { Category } from "../types/gameTypes";
import { programmingQuestions } from "../data/programmingQuestionsData";
import { moviesQuestions } from "../data/movieQuestionsData";
import { gamesQuestions } from "../data/gameQuestionsData";

const categories: Category[] = [
  { id: 1, categoryName: "programming", questions: programmingQuestions },
  { id: 2, categoryName: "movies", questions: moviesQuestions },
  { id: 3, categoryName: "games", questions: gamesQuestions },
];

interface CategorySelectionProps {
  onSelectCategory: (category: Category) => void;
  onBackToMenu: () => void;
}

export const CategorySelection = ({
  onSelectCategory,
  onBackToMenu,
}: CategorySelectionProps) => {
  return (
    <div className="fixed inset-0 w-full h-full bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-950 text-white flex flex-col items-center justify-center p-6 overflow-hidden">
      <div className="absolute w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="flex flex-col space-y-4 items-center z-10 w-full max-w-lg px-4">
        <div className="flex flex-col w-full space-y-4 mt-6 mb-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat)}
              className="w-full py-5 px-6 bg-slate-900/80 hover:bg-indigo-950/60 border border-slate-800 hover:border-indigo-500/60 rounded-2xl font-semibold text-lg flex items-center justify-between shadow-2xl backdrop-blur-xl transition-all duration-300 group cursor-pointer"
            >
              <span className="flex items-center space-x-4 group-hover:translate-x-1 transition-transform">
                <span className="text-2xl">
                  {cat.categoryName === "programming" && "💻"}
                  {cat.categoryName === "movies" && "🎬"}
                  {cat.categoryName === "games" && "🎮"}
                </span>
                <span className="text-slate-100 group-hover:text-white">
                  {cat.categoryName === "programming" && "Программирование"}
                  {cat.categoryName === "movies" && "Кино и сериалы"}
                  {cat.categoryName === "games" && "Видеоигры"}
                </span>
              </span>
              <span className="text-indigo-400 group-hover:translate-x-2 transition-transform font-bold">
                →
              </span>
            </button>
          ))}
        </div>

        <button
          onClick={onBackToMenu}
          className="w-full py-4 px-6 bg-slate-900/40 hover:bg-slate-800/60 border border-slate-800/80 hover:border-slate-700 rounded-2xl font-medium text-slate-400 hover:text-white transition-all duration-300 cursor-pointer flex items-center justify-center space-x-2 backdrop-blur-md"
        >
          <span>←</span>
          <span>Назад в меню</span>
        </button>
      </div>
    </div>
  );
};
