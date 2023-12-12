export type TPoll = {
  id?: number;
  title?: string;
  isActive?: boolean;
  questions?: TPollQuestion[];
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

export interface CreatePollResponse {
  id: number;
  title: string;
  isActive: boolean;
  userId: number;
  questions: Questions[];
  uniqueId?: string;
}
interface Questions {
  id: number;
  pollId: number;
  title: string;
  questionType: number;
  options: OptionsPayload[];
}
interface OptionsPayload {
  id: number;
  title: string;
  questionId: number;
}

export interface PublishPollResponse {
  id: number;
  title: string;
  isActive: boolean;
  userId: number;
  uniqueId: string;
  questions: Questions[];
}
export interface PollQuestionResponse {
  id: number;
  title: string;
  isActive: boolean;
  userId: number;
  uniqueId: string;
  questions: Questions[];
}
export interface VoteResponse {
  pollId: number;
  questionId: number;
  questionType: number;
  answer1: number;
  answer2: string;
  voterName: string;
}

export interface PollVoteResponse {
  id: number;
  pollId: number;
  title: string;
  answers: Answers[];
}
export interface Answers {
  questionId: number;
  title: string;
  questionType: number;
  textAnswers: string;
  multipleChoiceAnswers: Options[];
}
export interface Options {
  optionId: number;
  title: string;
  total: number;
}
