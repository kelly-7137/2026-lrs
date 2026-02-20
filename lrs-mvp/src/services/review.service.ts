import { Review } from '@/types/review.types';
import { supabase } from './supabase';

export const reviewService = {
  async getByReviewer(reviewerId: string): Promise<Review[]> {
    const { data, error } = await supabase
      .from('reviews')
      .select('id, lecture_id, reviewer_id, status, created_at')
      .eq('reviewer_id', reviewerId)
      .order('created_at', { ascending: false });

    if (error) throw new Error(error.message);

    return (data ?? []).map((row) => ({
      id: row.id as string,
      lectureId: row.lecture_id as string,
      reviewerId: row.reviewer_id as string,
      status: row.status as Review['status'],
      createdAt: row.created_at as string
    }));
  }
};
