import type { Question } from '../types/gameTypes';

export const moviesQuestions: Question[] = [
  // easy //
  {
    id: 1,
    questionText: "Какое имя у главного героя во франшизе «Матрица»?",
    options: ["Морфеус", "Нео", "Тринити", "Смит"],
    correctAnswerIndex: 1,
    questionLevel: "easy",
  },
  {
    id: 2,
    questionText: "В какой вселенной происходят события фильмов «Мстители»?",
    options: ["DC Extended Universe", "Marvel Cinematic Universe", "Star Wars", "Wizarding World"],
    correctAnswerIndex: 1,
    questionLevel: "easy",
  },
  {
    id: 3,
    questionText: "Какая киностудия использует заставку с прыгающей лампой Люксо? (Pixar)",
    options: ["DreamWorks", "Pixar", "Disney", "Illumination"],
    correctAnswerIndex: 1,
    questionLevel: "easy",
  },
  {
    id: 4,
    questionText: "Какой артефакт ищут герои в фильмах об Индиане Джонсе в первой части?",
    options: ["Святой Грааль", "Ковчег Завета", "Кристальный череп", "Око Агамотто"],
    correctAnswerIndex: 1,
    questionLevel: "easy",
  },

  // medium //
  {
    id: 5,
    questionText: "Кто режиссер фильма «Начало» (Inception) 2010 года?",
    options: ["Стивен Спилберг", "Кристофер Нолан", "Квентин Тарантино", "Дени Вильнев"],
    correctAnswerIndex: 1,
    questionLevel: "medium",
  },
  {
    id: 6,
    questionText: "Какое реальное животное послужило прообразом создания звуков река в фильмах «Парк Юрского периода»?",
    options: ["Лев", "Слоненок", "Спаривающиеся черепахи", "Тигр"],
    correctAnswerIndex: 2,
    questionLevel: "medium",
  },
  {
    id: 7,
    questionText: "Какая актриса исполнила главную роль в сериале «Ход королевы» (The Queen's Gambit)?",
    options: ["Зендея", "Аня Тейлор-Джой", "Сидни Свини", "Флоренс Пью"],
    correctAnswerIndex: 1,
    questionLevel: "medium",
  },
  {
    id: 8,
    questionText: "За какой фильм Леонардо Ди Каприо наконец получил свою первую премию «Оскар» как лучший актер?",
    options: ["Тиитаник", "Волк с Уолл-стрит", "Выживший", "Начало"],
    correctAnswerIndex: 2,
    questionLevel: "medium",
  },

  // hard //
  {
    id: 9,
    questionText: "В каком году вышел оригинальный фильм «Бегущий по лезвию» (Blade Runner) Ридли Скотта?",
    options: ["1979", "1982", "1985", "1991"],
    correctAnswerIndex: 1,
    questionLevel: "hard",
  },
  {
    id: 10,
    questionText: "Какой композитор написал культовый саундтрек с органом для фильма «Интерстеллар»?",
    options: ["Эннио Морриконе", "Ханс Циммер", "Джон Уильямс", "Людвиг Йоранссон"],
    correctAnswerIndex: 1,
    questionLevel: "hard",
  },
  {
    id: 11,
    questionText: "Сколько премий «Оскар» завоевал фильм «Властелин колец: Возвращение короля» (2003), установив рекорд?",
    options: ["9", "11", "12", "14"],
    correctAnswerIndex: 1,
    questionLevel: "hard",
  },
  {
    id: 12,
    questionText: "Как звали искусственный интеллект в космическом корабле фильма «Космическая одиссея 2001 года»?",
    options: ["HAL 9000", "GLADoS", "JARVIS", "SKYNET"],
    correctAnswerIndex: 0,
    questionLevel: "hard",
  },
];