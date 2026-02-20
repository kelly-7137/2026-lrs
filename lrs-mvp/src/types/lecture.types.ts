export type LectureStatus = 'draft' | 'published' | 'archived';

export interface Lecture {
  id: string;
  title: string;
  status: LectureStatus;
  instructorId: string;
  createdAt: string;
}
