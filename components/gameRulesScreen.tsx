interface GameRulesScreenProps {
    onClose: () => void;
}

export const GameRulesScreen = ({ onClose }: GameRulesScreenProps) => {
    return (
        <div className="fixed inset-0 w-full h-full bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-950 text-white flex flex-col items-center justify-center p-6 overflow-hidden">
            <div className="absolute w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />

            <div className="flex flex-col items-center text-center z-10 max-w-xl px-4">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-white via-slate-200 to-indigo-300 bg-clip-text text-transparent tracking-wide">
                    Правила игры
                </h2>
                <p className="text-slate-300 text-lg md:text-xl mb-8 leading-relaxed">
                    В этой игре вам предстоит отвечать на вопросы из выбранной категории. У вас есть три подсказки, которые помогут вам в трудных ситуациях:
                </p>
                <ul className="text-slate-300 text-lg md:text-xl mb-8 leading-relaxed list-disc list-inside space-y-2"> 
                    <li>50/50: Убирает два неправильных варианта ответа.</li>
                    <li>Звонок другу: Позволяет получить совет от "друга".</li> 
                    <li>Помощь зала: Показывает, как бы проголосовали другие игроки.</li>
                </ul>
                <p className="text-slate-300 text-lg md:text-xl mb-8 leading-relaxed">
                    Вы должны выбрать правильный ответ из предложенных вариантов. Если вы ответите неправильно, игра закончится. Удачи!
                </p>
                <button 
                    onClick={onClose}
                    className="w-full py-2 mt-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl font-bold text-lg hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer shadow-lg shadow-indigo-600/40 border border-indigo-400/30"
                >
                    Понятно
                </button>
            </div>
        </div>
    );
}