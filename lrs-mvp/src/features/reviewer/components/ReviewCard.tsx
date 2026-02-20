import { Review } from '@/types/review.types';

export const ReviewCard = ({ review }: { review: Review }) => {
  return (
    <article>
      <h3>리뷰 #{review.id}</h3>
      <p>상태: {review.status}</p>
    </article>
  );
};
