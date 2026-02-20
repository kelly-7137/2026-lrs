import { useCallback, useEffect, useState } from 'react';
import { useAuthContext } from '@/contexts/AuthContext';
import { lectureService } from '@/services/lecture.service';
import { Lecture } from '@/types/lecture.types';

export const useLectures = () => {
  const { user } = useAuthContext();
  const [lectures, setLectures] = useState<Lecture[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchLectures = useCallback(async () => {
    if (!user) {
      setLectures([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const data = await lectureService.getByInstructor(user.id);
      setLectures(data);
    } catch (e) {
      setError(e instanceof Error ? e.message : '알 수 없는 오류');
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchLectures();
  }, [fetchLectures]);

  return { lectures, loading, error, refetch: fetchLectures };
};
