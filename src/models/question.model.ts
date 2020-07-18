export class QuestionOption {
  text: string;
  isCorrect: string;
}

export class Question {
  questionId?: string;
  text: string;
  options: QuestionOption[];
  courseId: string;
}
