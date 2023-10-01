import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import * as reviewActions from '../../store/reviews'

export const UpdateReviewModal = ({ updateReview }) => {
    const dispatch = useDispatch();

    const [stars, setStars] = useState(updateReview.stars)
    const [review, setReview] = useState(updateReview.review)
    const [errors, setErrors] = useState({})

    const { closeModal } = useModal();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({})
        try {
            await dispatch(
                reviewActions.thunkUpdateReview({ stars, review }, updateReview.id)
            ).then(closeModal)
        } catch (error) {
            if (error) {
                const data = await error.json()
                setErrors(data.errors)
                return data
            }
        }
    }

    useEffect(() => {
        dispatch(reviewActions.thunkGetReviewInfo(updateReview.id))
    }, [dispatch, review, stars])

    return (
        <div className="reviewModal">
            <h2>Update your Review</h2>
            <form onSubmit={handleSubmit}>

                <div className="reviewForm">

                    <div className='starRatingContainer'>
                        <div className='starsText'>Stars</div>
                        <div onClick={() => setStars(1)}
                            className=  { (stars >= 1 ? "fa-solid fa-star" : "fa-regular fa-star") }
                        >
                        </div>
                        <div onClick={() => setStars(2)}
                            className=  { (stars >= 2 ? "fa-solid fa-star" : "fa-regular fa-star") }
                        >
                        </div>
                        <div onClick={() => setStars(3)}
                            className=  { (stars >= 3 ? "fa-solid fa-star" : "fa-regular fa-star") }
                        >
                        </div>
                        <div onClick={() => setStars(4)}
                            className=  { (stars >= 4 ? "fa-solid fa-star" : "fa-regular fa-star") }
                        >
                        </div>
                        <div onClick={() => setStars(5)}
                            className=  { (stars >= 5 ? "fa-solid fa-star" : "fa-regular fa-star") }
                        >
                        </div>
                    </div>
                    <div className="textareaContainer">
                        <textarea
                            className="reviewInput"
                            type='text'
                            placeholder={`${updateReview.review}`}
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                        >
                        </textarea>
                    </div>
                    {errors.review && <div className="bottomError">Review needs to have at least one character 😁</div>}

                </div>
                <div className="reviewButtons">
                    <button className="b yesButton"> Update Review </button>
                    <button className="b noButton" onClick={closeModal}> Cancel Update </button>
                </div>
            </form>
        </div>
    )
}
