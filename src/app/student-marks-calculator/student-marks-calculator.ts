import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type Subject = 'mathematics' | 'science' | 'english';

interface StudentResult {
  total: number;
  percentage: number;
  passed: boolean;
  grade: 'A' | 'B' | 'C' | 'Fail';
  highest: number;
  lowest: number;
}

@Component({
  selector: 'app-student-marks-calculator',
  imports: [FormsModule],
  templateUrl: './student-marks-calculator.html',
  styleUrl: './student-marks-calculator.css',
})
export class StudentMarksCalculator {
  marks: Record<Subject, number | null> = {
    mathematics: null,
    science: null,
    english: null,
  };

  errors: Record<Subject, string> = {
    mathematics: '',
    science: '',
    english: '',
  };

  result: StudentResult | null = null;

  calculateResult(): void {
    const subjects: Subject[] = ['mathematics', 'science', 'english'];
    let isValid = true;

    for (const subject of subjects) {
      const mark = this.marks[subject];

      if (mark === null || Number.isNaN(mark)) {
        this.errors[subject] = 'Please enter marks for this subject.';
        isValid = false;
      } else if (!Number.isInteger(mark) || mark < 0 || mark > 100) {
        this.errors[subject] = 'Enter a whole number between 0 and 100.';
        isValid = false;
      } else {
        this.errors[subject] = '';
      }
    }

    if (!isValid) {
      this.result = null;
      return;
    }

    const marks = subjects
      .map((subject) => this.marks[subject])
      .filter((mark): mark is number => mark !== null);
    const total = marks.reduce((sum, mark) => sum + mark, 0);
    const percentage = (total / 300) * 100;
    const passed = marks.every((mark) => mark >= 40);

    this.result = {
      total,
      percentage,
      passed,
      grade: !passed ? 'Fail' : percentage >= 80 ? 'A' : percentage >= 60 ? 'B' : 'C',
      highest: Math.max(...marks),
      lowest: Math.min(...marks),
    };
  }

  resetForm(): void {
    this.marks = { mathematics: null, science: null, english: null };
    this.errors = { mathematics: '', science: '', english: '' };
    this.result = null;
  }
}
