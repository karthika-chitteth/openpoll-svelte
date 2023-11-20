export type TPoll = {
  id: number;
  title: string;
  isActive: boolean;
  questions: TPollQuestion[];
};

export type TPollQuestion = {
  id?: number;
  pollId?: number;
  title?: string;
  questionType?: 0 | 1;
  isActive?: boolean;
  options?: TPollQuestionOption[];
};

export type TPollQuestionOption = {
  id: number;
  title: string;
  questionId: number;
};
