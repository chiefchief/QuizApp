import {TAnswerItem, TRequestItem} from '@types';

export class INITIAL_GLOBAL {
  constructor(data: any = {}) {
    this.loader = data.loader || false;
  }
  loader: boolean;
}

export class INITIAL_QUIZ {
  constructor(data: any = {}) {
    this.initialData = data.initialData || [];
    this.resultData = data.resultData || [];
    this.currentQuestion = data.currentQuestion || 0;
  }
  initialData: TRequestItem[];
  resultData: TAnswerItem[];
  currentQuestion: number;
}
