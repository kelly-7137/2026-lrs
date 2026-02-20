import { Spinner } from '@/components/ui/Spinner';
import { LectureCard } from '../components/LectureCard';
import { useLectures } from '../hooks/useLectures';

export const InstructorDashboard = () => {
  const { lectures, loading, error, refetch } = useLectures();

  if (loading) return <Spinner />;
  if (error) return <div>오류: {error}</div>;

  return (
    <section>
      <h2>Instructor Dashboard</h2>
      <button onClick={refetch}>새로고침</button>
      {lectures.map((lecture) => (
        <LectureCard key={lecture.id} lecture={lecture} />
      ))}
    </section>
  );
};
