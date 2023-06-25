import { useGetReviewByIdQuery } from '@/redux/services/reviewsApi';
import styles from './Reviews.module.css';
import Review from './Review/Review';

const Reviews = ({ id }: Props) => {
  const { data, isLoading, error } = useGetReviewByIdQuery(id);

  if (isLoading) return <div>Loading</div>;
  if (!data) return <div> Отзывы не найдены</div>;

  return (
    <div className={styles.container}>
      {data.map((review: Review) => (
        <Review key={review.id} {...review} />
      ))}
    </div>
  );
};
export default Reviews;

interface Props {
  id: number;
}
