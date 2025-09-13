"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ExamAnswers {
  exam1: {
    question1: string;
    question2: string;
    question3: string;
    question4: string;
    question5: string;
  };
  exam2: {
    question1: string;
    question2: string;
  };
}

interface ExamContextType {
  answers: ExamAnswers;
  updateExam1Answer: (questionId: string, answer: string) => void;
  updateExam2Answer: (questionId: string, answer: string) => void;
  calculateScore: () => number;
  getGrade: () => string;
}

const ExamContext = createContext<ExamContextType | undefined>(undefined);

export const useExam = () => {
  const context = useContext(ExamContext);
  if (context === undefined) {
    throw new Error('useExam must be used within an ExamProvider');
  }
  return context;
};

export const ExamProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [answers, setAnswers] = useState<ExamAnswers>({
    exam1: {
      question1: '',
      question2: '',
      question3: '',
      question4: '',
      question5: ''
    },
    exam2: {
      question1: '',
      question2: ''
    }
  });

  // الإجابات الصحيحة لامتحان 1
  const correctAnswers = {
    exam1: {
      question1: 'setting-goals',
      question2: 'urgency-importance',
      question3: 'scheduling-specific-time',
      question4: '25-minutes',
      question5: 'procrastination'
    }
  };

  const updateExam1Answer = (questionId: string, answer: string) => {
    setAnswers(prev => ({
      ...prev,
      exam1: {
        ...prev.exam1,
        [questionId]: answer
      }
    }));
  };

  const updateExam2Answer = (questionId: string, answer: string) => {
    setAnswers(prev => ({
      ...prev,
      exam2: {
        ...prev.exam2,
        [questionId]: answer
      }
    }));
  };

  const calculateScore = () => {
    let totalQuestions = 7; // 5 من exam1 + 2 من exam2
    let correctCount = 0;

    // حساب درجات exam1 (اختيار من متعدد)
    Object.keys(correctAnswers.exam1).forEach(key => {
      if (answers.exam1[key as keyof typeof answers.exam1] === correctAnswers.exam1[key as keyof typeof correctAnswers.exam1]) {
        correctCount++;
      }
    });

    // حساب درجات exam2 (أسئلة مقالية - نعطي درجة إذا كانت الإجابة ليست فارغة ولها محتوى معقول)
    if (answers.exam2.question1.trim().length > 20) correctCount++;
    if (answers.exam2.question2.trim().length > 20) correctCount++;

    return Math.round((correctCount / totalQuestions) * 100);
  };

  const getGrade = () => {
    const score = calculateScore();
    if (score >= 90) return 'A+';
    if (score >= 85) return 'A';
    if (score >= 80) return 'B+';
    if (score >= 75) return 'B';
    if (score >= 70) return 'C+';
    if (score >= 65) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  };

  return (
    <ExamContext.Provider value={{
      answers,
      updateExam1Answer,
      updateExam2Answer,
      calculateScore,
      getGrade
    }}>
      {children}
    </ExamContext.Provider>
  );
};
