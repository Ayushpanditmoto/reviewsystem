import { createContext, useState } from 'react';
// import { data } from '../Components/data';
const ReviewContext = createContext();

const ReviewProvider = ({ children }) => {
  const [reviews, setReviews] = useState([
    {
      id: 2,
      rating: 4,
      review: 'This is a review 2',
    },
    {
      id: 3,
      rating: 10,
      review: 'This is a review 10',
    },
  ]);

  const [reviewEdit, setReviewEdit] = useState({
    item: {},
    isEdit: false,
  });

  const editReview = (item) => {
    setReviewEdit({ item, isEdit: true });
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this review?')) {
      const newReviews = reviews.filter((review) => review.id !== id);
      setReviews(newReviews);
    }
  };
  const updateReview = (id, updateItem) => {
    const newReviews = reviews.map((review) =>
      review.id === id ? updateItem : review
    );
    setReviews(newReviews);
    setReviewEdit({ item: {}, isEdit: false });
  };

  const handleAdd = (newReview) => {
    console.log(newReview);
    setReviews([newReview, ...reviews]);
  };
  return (
    <ReviewContext.Provider
      value={{
        reviews,
        handleDelete,
        handleAdd,
        editReview,
        reviewEdit,
        updateReview,
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
};

export { ReviewContext, ReviewProvider };
