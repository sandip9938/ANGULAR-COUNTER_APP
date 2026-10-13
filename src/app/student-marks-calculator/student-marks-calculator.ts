import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Har subject ke liye app ko kaunsa data chahiye, uska shape yahan define hai.
interface SubjectEntry {
  id: number;
  name: string;
  mark: number | null;
  nameError: string;
  markError: string;
}

// Calculation ke baad result me jo values hongi, unke types yahan define hain.
interface StudentResult {
  total: number;
  maxMarks: number;
  percentage: number;
  passed: boolean;
  grade: 'A' | 'B' | 'C' | 'Fail';
  highest: number;
  lowest: number;
}

// Angular ko batata hai ki yeh component hai aur uski HTML/CSS files kaun si hain.
@Component({
  selector: 'app-student-marks-calculator',
  imports: [FormsModule],
  templateUrl: './student-marks-calculator.html',
  styleUrl: './student-marks-calculator.css',
})
export class StudentMarksCalculator {
  // App shuru hote hi ye 3 subjects dikhte hain; baad me user list badha sakta hai.
  subjects: SubjectEntry[] = [
    { id: 1, name: 'Mathematics', mark: null, nameError: '', markError: '' },
    { id: 2, name: 'Science', mark: null, nameError: '', markError: '' },
    { id: 3, name: 'English', mark: null, nameError: '', markError: '' },
  ];

  // Calculate hone se pehle result null hota hai, isliye result panel empty state dikhata hai.
  result: StudentResult | null = null;

  // Har naye subject ko unique id dene ke liye counter use hota hai.
  private nextSubjectId = 4;

  // Naya subject blank naam aur blank marks ke saath list me add karta hai.
  addSubject(): void {
    this.subjects.push({
      id: this.nextSubjectId++,
      name: '',
      mark: null,
      nameError: '',
      markError: '',
    });
    this.result = null;
  }

  // Di hui id wala subject remove karta hai; kam se kam ek subject hamesha bacha rahega.
  removeSubject(id: number): void {
    if (this.subjects.length <= 1) {
      return;
    }

    this.subjects = this.subjects.filter((subject) => subject.id !== id);
    this.result = null;
  }

  // Pehle har subject ka naam aur marks validate karta hai, phir result calculate karta hai.
  calculateResult(): void {
    let isValid = true;

    // Har subject ke errors reset/check hote hain, taaki galat input ke paas message dikhe.
    for (const subject of this.subjects) {
      subject.nameError = subject.name.trim() ? '' : 'Please enter a subject name.';

      if (subject.nameError) {
        isValid = false;
      }

      if (subject.mark === null || Number.isNaN(subject.mark)) {
        subject.markError = 'Please enter marks for this subject.';
        isValid = false;
      } else if (!Number.isInteger(subject.mark) || subject.mark < 0 || subject.mark > 100) {
        subject.markError = 'Enter a whole number between 0 and 100.';
        isValid = false;
      } else {
        subject.markError = '';
      }
    }

    // Ek bhi input invalid ho to calculation rok kar purana result hata dete hain.
    if (!isValid) {
      this.result = null;
      return;
    }

    // Valid marks ki list se total, maximum marks, percentage aur pass/fail nikalte hain.
    const marks = this.subjects
      .map((subject) => subject.mark)
      .filter((mark): mark is number => mark !== null);
    const total = marks.reduce((sum, mark) => sum + mark, 0);
    const maxMarks = this.subjects.length * 100;
    const percentage = (total / maxMarks) * 100;
    const passed = marks.every((mark) => mark >= 40);

    // Grade, sabse zyada aur sabse kam marks ko result object me save karte hain.
    this.result = {
      total,
      maxMarks,
      percentage,
      passed,
      grade: !passed ? 'Fail' : percentage >= 80 ? 'A' : percentage >= 60 ? 'B' : 'C',
      highest: Math.max(...marks),
      lowest: Math.min(...marks),
    };
  }

  // Reset par original 3 subjects wapas aate hain aur result clear ho jata hai.
  resetForm(): void {
    this.subjects = [
      { id: 1, name: 'Mathematics', mark: null, nameError: '', markError: '' },
      { id: 2, name: 'Science', mark: null, nameError: '', markError: '' },
      { id: 3, name: 'English', mark: null, nameError: '', markError: '' },
    ];
    this.result = null;
  }
}
