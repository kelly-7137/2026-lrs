import { useCallback, useEffect, useState } from 'react';
import { useAuthContext } from '@/contexts/AuthContext';
import { reviewService } from '@/services/review.service';
import { Review } from '@/types/review.types';

export const useReviews = () => {
  const { user } = useAuthContext();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchReviews = useCallback(async () => {
    if (!user) {
      setReviews([]);
      setLoading(false);
      return;
    }

    const data = await reviewService.getByReviewer(user.id);
    setReviews(data);
    setLoading(false);
  }, [user]);

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  return { reviews, loading, refetch: fetchReviews };
};
