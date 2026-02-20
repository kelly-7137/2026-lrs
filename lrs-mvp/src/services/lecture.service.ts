import { Lecture } from '@/types/lecture.types';
import { supabase } from './supabase';

type LectureRow = {
  id: string;
  title: string;
  status: Lecture['status'];
  instructor_id: string;
  created_at: string;
};

const toDto = (row: LectureRow): Lecture => ({
  id: row.id,
  title: row.title,
  status: row.status,
  instructorId: row.instructor_id,
  createdAt: row.created_at
});

export const lectureService = {
  async getByInstructor(instructorId: string): Promise<Lecture[]> {
    const { data, error } = await supabase
      .from('lectures')
      .select('id, title, status, instructor_id, created_at')
      .eq('instructor_id', instructorId)
      .order('created_at', { ascending: false });

    if (error) throw new Error(error.message);
    return (data ?? []).map((row) => toDto(row as LectureRow));
  }
};
