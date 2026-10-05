export interface Category {
    id: number;
    categoryName: 'programming' | 'movies' | 'games';
    questions: Question[];
}

export interface Question {
    id: number;
    questionText: string;
    options: string[];
    questionLevel: 'easy' | 'medium' | 'hard';
    correctAnswerIndex: number;
}

export interface GameState {
    questionNumber: number;
    category: Category | null;
    gameStatus: 'not_started' | 'in_progress' | 'completed' | 'category_selection' | 'lose' | 'rules';
    fiftyFiftyHint: boolean;
    audiencePollHint: boolean;
    phoneAFriendHint: boolean;
}
