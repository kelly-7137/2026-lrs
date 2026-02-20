import { ReviewCard } from '../components/ReviewCard';
import { useReviews } from '../hooks/useReviews';

export const ReviewerDashboard = () => {
  const { reviews, loading, refetch } = useReviews();

  if (loading) return <div>로딩 중...</div>;

  return (
    <section>
      <h2>Reviewer Dashboard</h2>
      <button onClick={refetch}>새로고침</button>
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </section>
  );
};
