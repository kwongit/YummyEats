import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useModal } from "../../context/Modal";
import * as reviewActions from "../../store/reviews";
import "./ReviewModal.css";

export const CreateReviewModal = ({ restaurant }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [stars, setStars] = useState();
  const [review, setReview] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const { closeModal } = useModal();

  useEffect(() => {
    const errors = {};
    if (!review) errors.review = "Review is required!";
    if (!stars) errors.stars = "Star rating is required!";
    setErrors(errors);
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    try {
      await dispatch(
        reviewActions.thunkCreateReview({ stars, review }, restaurant.id)
      );
      closeModal();
      setSubmitted(true);
      history.push(`/restaurants/${restaurant.id}`);
    } catch (errors) {
      if (errors) {
        setErrors(errors);
        setSubmitted(true);
      }
    }
  };

  return (
    <div className="reviewModal">
      <h2>Create a Review</h2>
      <form onSubmit={handleSubmit}>
        <div className="reviewForm">
          <div className="starRatingContainer">
            <div className="starsText">Stars</div>
            <div
              onClick={() => setStars(1)}
              className={ (stars >= 1 ? "fa-solid fa-star" : "fa-regular fa-star") }
            ></div>
            <div
              onClick={() => setStars(2)}
              className={ (stars >= 2 ? "fa-solid fa-star" : "fa-regular fa-star") }
            ></div>
            <div
              onClick={() => setStars(3)}
              className={ (stars >= 3 ? "fa-solid fa-star" : "fa-regular fa-star") }
            ></div>
            <div
              onClick={() => setStars(4)}
              className={ (stars >= 4 ? "fa-solid fa-star" : "fa-regular fa-star") }
            ></div>
            <div
              onClick={() => setStars(5)}
              className={ (stars >= 5 ? "fa-solid fa-star" : "fa-regular fa-star") }
            ></div>
          </div>
          {!stars && submitted && (
            <div className="error">Star review is needed</div>
          )}
          <div className="textareaContainer">
            <textarea
              className="reviewInput"
              type="text"
              placeholder="Leave a review here!"
              value={review}
              onChange={(e) => setReview(e.target.value)}
            ></textarea>
          </div>
          {!review && submitted && (
            <div className="bottomError">
              Review needs to have at least one character 😁
            </div>
          )}
        </div>
        <div className="reviewButtons">
          <button className="b yesButton"> Create Review </button>
          <button className="b noButton" onClick={closeModal}>
            {" "}
            Cancel Review{" "}
          </button>
        </div>
      </form>
    </div>
  );
};
