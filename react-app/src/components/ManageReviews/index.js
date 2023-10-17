import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { thunkGetUserReviews } from "../../store/reviews";
import OpenModalButton from "../OpenModalButton";
import { DeleteReviewModal } from "../ReviewModal/DeleteReviewModal";
import { UpdateReviewModal } from "../ReviewModal/UpdateReviewModal";
import "./ManageReviews.css";

export const ManageReviews = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user);
  const reviews = useSelector((state) => state.reviews.allReviews);

  const reviewsList = Object.values(reviews).reverse();

  function lowBudgetDateConverter(date) {
    let newDate = String(new Date(date));
    let month = newDate.substring(4, 7);
    let day = newDate.substring(7, 10);
    let year = newDate.substring(10, 16);
    return month.concat(day, ",".concat(year));
  }

  useEffect(() => {
    dispatch(thunkGetUserReviews());
  }, [dispatch, reviewsList.length]);

  if (!user) return null;

  return (
    <div className="all-reviews-container">
      <h1>Manage Your Reviews</h1>
      {reviewsList.map((review) => (
        <div className="review-container" key={review.id}>
          <div className="review-stars">
            <h4>Stars: </h4>
            {/* {review.stars} */}
            <div
              className={
                review.stars >= 1 ? "fa-solid fa-star" : "fa-regular fa-star"
              }
            ></div>
            <div
              className={
                review.stars >= 2 ? "fa-solid fa-star" : "fa-regular fa-star"
              }
            ></div>
            <div
              className={
                review.stars >= 3 ? "fa-solid fa-star" : "fa-regular fa-star"
              }
            ></div>
            <div
              className={
                review.stars >= 4 ? "fa-solid fa-star" : "fa-regular fa-star"
              }
            ></div>
            <div
              className={
                review.stars >= 5 ? "fa-solid fa-star" : "fa-regular fa-star"
              }
            ></div>
          </div>
          <div>
            <h4>Restaurant: </h4>
            <NavLink to={`/restaurants/${review.restaurant_id}`}>
              {review.restaurant_name}
            </NavLink>
          </div>
          <div className="review-div">
            <h4>Review:</h4> {review.review}
          </div>
          <div>
            <h4>Updated on: </h4> {lowBudgetDateConverter(review.updated_at)}
          </div>
          <div className="update-delete-button">
            <OpenModalButton
              className="delete-button"
              buttonText="Delete"
              modalComponent={<DeleteReviewModal review={review} />}
            />
            <OpenModalButton
              className="update-button"
              buttonText="Update"
              modalComponent={<UpdateReviewModal updateReview={review} />}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
