import type { Question } from "../types/gameTypes";

export const gamesQuestions: Question[] = [
  // easy //
  {
    id: 1,
    questionText:
      "Какое имя у главного усатого водопроводчика компании Nintendo?",
    options: ["Луиджи", "Марио", "Соник", "Пак-Ман"],
    correctAnswerIndex: 1,
    questionLevel: "easy",
  },
  {
    id: 2,
    questionText: "В какой игре главным героем является Геральт из Ривии?",
    options: ["Skyrim", "The Witcher (Ведьмак)", "Dark Souls", "Dragon Age"],
    correctAnswerIndex: 1,
    questionLevel: "easy",
  },
  {
    id: 3,
    questionText:
      "Какая королевская битва от Valve построена на тактической стрельте и покупке оружия в начале раунда?",
    options: ["Fortnite", "Apex Legends", "Counter-Strike 2", "PUBG"],
    correctAnswerIndex: 2,
    questionLevel: "easy",
  },
  {
    id: 4,
    questionText:
      "Из какой игры фраза: «The cake is a lie» («Торт — это ложь»)?",
    options: ["Portal", "Half-Life", "Minecraft", "Doom"],
    correctAnswerIndex: 0,
    questionLevel: "easy",
  },

  // medium //
  {
    id: 5,
    questionText:
      "Какая студия разработала культовую ролевую игру Cyberpunk 2077?",
    options: ["Bethesda", "CD Projekt Red", "BioWare", "Ubisoft"],
    correctAnswerIndex: 1,
    questionLevel: "medium",
  },
  {
    id: 6,
    questionText: "На каком игровом движке создана игра Dota 2?",
    options: ["Unreal Engine 5", "Unity", "Source 2", "CryEngine"],
    correctAnswerIndex: 2,
    questionLevel: "medium",
  },
  {
    id: 7,
    questionText:
      "Какое кодовое имя носила студия Rockstar Games во время разработки GTA V перед ее релизом?",
    options: ["Project Liberty", "Rush", "San Andreas 2", "Crime City"],
    correctAnswerIndex: 1,
    questionLevel: "medium",
  },
  {
    id: 8,
    questionText:
      "Какая игра получила награду «Игра года» (GOTY) на церемонии The Game Awards в 2023 году?",
    options: [
      "Zelda: Tears of the Kingdom",
      "Baldur's Gate 3",
      "Alan Wake 2",
      "Spider-Man 2",
    ],
    correctAnswerIndex: 1,
    questionLevel: "medium",
  },

  // hard //
  {
    id: 9,
    questionText:
      "В каком году вышла самая первая часть игры Counter-Strike как модификация для Half-Life?",
    options: ["1997", "1999", "2001", "2003"],
    correctAnswerIndex: 1,
    questionLevel: "hard",
  },
  {
    id: 10,
    questionText:
      "Кто является директором и главным геймдизайнером игр Death Stranding, Metal Gear Solid и Silent Hills?",
    options: [
      "Тодд Говард",
      "Хидео Кодзима",
      "Миядзаки Хидэтака",
      "Сигэру Миямото",
    ],
    correctAnswerIndex: 1,
    questionLevel: "hard",
  },
  {
    id: 11,
    questionText:
      "Какое максимальное количество игроков одновременно поддерживалось в матче классической «Королевской битвы» PUBG на релизе?",
    options: ["50", "100", "150", "200"],
    correctAnswerIndex: 1,
    questionLevel: "hard",
  },
  {
    id: 12,
    questionText:
      "Какая игра от студии FromSoftware вышла до Demon's Souls, положив начало их фирменному хардкорному стилю (хоть и в другом жанре)?",
    options: ["King's Field", "Bloodborne", "Armored Core", "Shadow Tower"],
    correctAnswerIndex: 0,
    questionLevel: "hard",
  },
];
