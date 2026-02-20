import { Lecture } from '@/types/lecture.types';

export const LectureCard = ({ lecture }: { lecture: Lecture }) => {
  return (
    <article>
      <h3>{lecture.title}</h3>
      <p>상태: {lecture.status}</p>
    </article>
  );
};
