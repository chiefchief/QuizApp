// REQUESTS
export type TGenerateOptions = {
  method: 'POST' | 'GET' | 'PUT' | 'DELETE';
  url: string;
  data?: any;
  params?: any;
};

export type TFormatResponse = {
  data: any;
  status: number;
  statusText: string;
};

export type TRequestParams = {
  amount: string;
  difficulty: string;
  type: string;
};

export type TRequestItem = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type TAnswerItem = {
  correct: boolean;
  id: number;
  question: string;
};
