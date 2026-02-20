export type ReviewStatus = 'pending' | 'approved' | 'rejected';

export interface Review {
  id: string;
  lectureId: string;
  reviewerId: string;
  status: ReviewStatus;
  createdAt: string;
}
