import type { Question } from '../types/gameTypes';

export const programmingQuestions: Question[] = [
  // easy //
  {
    id: 1,
    questionText: "Какой тег HTML используется для создания главной ссылки (гиперссылки)?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    correctAnswerIndex: 1,
    questionLevel: "easy",
  },
  {
    id: 2,
    questionText: "Какое ключевое слово используется в JavaScript для объявления переменной, значение которой нельзя изменить?",
    options: ["var", "let", "const", "static"],
    correctAnswerIndex: 2,
    questionLevel: "easy",
  },
  {
    id: 3,
    questionText: "Что означает аббревиатура CSS?",
    options: [
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Creative Style System",
      "Colorful Style Sheets",
    ],
    correctAnswerIndex: 1,
    questionLevel: "easy",
  },
  {
    id: 4,
    questionText: "Какая структура данных работает по принципу LIFO (Last In, First Out — последним пришел, первым вышел)?",
    options: ["Очередь (Queue)", "Стек (Stack)", "Дерево (Tree)", "Граф (Graph)"],
    correctAnswerIndex: 1,
    questionLevel: "easy",
  },

  // medium //
  {
    id: 5,
    questionText: "Какой метод массива в JavaScript создает новый массив с результатами вызова указанной функции для каждого элемента?",
    options: ["forEach()", "filter()", "map()", "reduce()"],
    correctAnswerIndex: 2,
    questionLevel: "medium",
  },
  {
    id: 6,
    questionText: "Какой оператор в TypeScript позволяет объединить несколько типов в один (например, type A = B & C)?",
    options: ["Union", "Intersection", "Extends", "Partial"],
    correctAnswerIndex: 1,
    questionLevel: "medium",
  },
  {
    id: 7,
    questionText: "Что такое замыкание (Closure) в JavaScript?",
    options: [
      "Функция, у которой заблокирован доступ к внешней области видимости",
      "Функция, возвращающая объект",
      "Функция вместе со всеми ее лексическими переменными, к которым она имеет доступ",
      "Способ удаления функции из памяти",
    ],
    correctAnswerIndex: 2,
    questionLevel: "medium",
  },
  {
    id: 8,
    questionText: "Какой хук в React отвечает за выполнение побочных эффектов?",
    options: ["useState", "useEffect", "useContext", "useMemo"],
    correctAnswerIndex: 1,
    questionLevel: "medium",
  },

  // hard //
  {
    id: 9,
    questionText: "Какой модификатор видимости в TypeScript делает свойство класса доступным только внутри этого класса?",
    options: ["public", "protected", "private", "readonly"],
    correctAnswerIndex: 2,
    questionLevel: "hard",
  },
  {
    id: 10,
    questionText: "Что произойдет, если в промисе вызвать метод .catch(), но перед ним не произойдет ошибки?",
    options: [
      "Промис упадет с ошибкой",
      "Блок catch будет пропущен, и цепочка продолжится",
      "Выполнится код из блока finally",
      "JavaScript выведет синтаксическую ошибку",
    ],
    correctAnswerIndex: 1,
    questionLevel: "hard",
  },
  {
    id: 11,
    questionText: "Какой паттерн проектирования гарантирует, что у класса есть только один экземпляр, и предоставляет к нему глобальную точку доступа?",
    options: ["Фабрика (Factory)", "Одиночка (Singleton)", "Наблюдатель (Observer)", "Стратегия (Strategy)"],
    correctAnswerIndex: 1,
    questionLevel: "hard",
  },
  {
    id: 12,
    questionText: "Что из перечисленного является особенностью Event Loop в JavaScript при обработке микрозадач (Microtasks)?",
    options: [
      "Микрозадачи выполняются после каждого тика макрозадач, но реже таймеров",
      "Микрозадачи (например, .then() у промисов) выполняются сразу после завершения текущего стека вызовов, до рендеринга",
      "Микрозадачи выполняются в отдельном потоке процессора",
      "Микрозадачи блокируют основной поток на фиксированные 4мс",
    ],
    correctAnswerIndex: 1,
    questionLevel: "hard",
  },
];