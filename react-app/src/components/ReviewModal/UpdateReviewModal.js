import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import * as reviewActions from '../../store/reviews'

export const UpdateReviewModal = ({ updateReview }) => {
    const dispatch = useDispatch();

    const [stars, setStars] = useState(updateReview.stars)
    const [tempRating, setTempRating] = useState(updateReview.stars)
    const [review, setReview] = useState(updateReview.review)
    const [errors, setErrors] = useState({})

    const { closeModal } = useModal();

    console.log("UpdateReviewModal review: ", updateReview)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({})
        try {
            const updatedReview = await dispatch(
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
    }, [dispatch])

    return (
        <div className="updateModal">
            <h2>Update your Review</h2>
            <form onSubmit={handleSubmit}>

                <div className="updateForm">

                    <div className='starRatingContainer'>
                        <div className='starsText'>Stars</div>
                        <div onClick={() => setStars(1)}
                            className=  {
                                (stars >= 1 ? "fa-solid fa-star" : "fa-regular fa-star")
                                &&
                                (tempRating >= 1 ? "fa-solid fa-star" : "fa-regular fa-star")
                            }
                            onMouseEnter={() => setTempRating(1)}
                            onMouseLeave={() => setTempRating(1)}
                        >
                        </div>
                        <div onClick={() => setStars(2)}
                            className=  {
                                (stars >= 2 ? "fa-solid fa-star" : "fa-regular fa-star")
                                &&
                                (tempRating >= 2 ? "fa-solid fa-star" : "fa-regular fa-star")
                            }
                            onMouseEnter={() => setTempRating(2)}
                            onMouseLeave={() => setTempRating(2)}
                        >
                        </div>
                        <div onClick={() => setStars(3)}
                            className=  {
                                (stars >= 3 ? "fa-solid fa-star" : "fa-regular fa-star")
                                &&
                                (tempRating >= 3 ? "fa-solid fa-star" : "fa-regular fa-star")
                            }
                            onMouseEnter={() => setTempRating(3)}
                            onMouseLeave={() => setTempRating(3)}
                        >
                        </div>
                        <div onClick={() => setStars(4)}
                            className=  {
                                (stars >= 4 ? "fa-solid fa-star" : "fa-regular fa-star")
                                &&
                                (tempRating >= 4 ? "fa-solid fa-star" : "fa-regular fa-star")
                            }
                            onMouseEnter={() => setTempRating(4)}
                            onMouseLeave={() => setTempRating(4)}
                        >
                        </div>
                        <div onClick={() => setStars(5)}
                            className=  {
                                (stars >= 5 ? "fa-solid fa-star" : "fa-regular fa-star")
                                &&
                                (tempRating >= 5 ? "fa-solid fa-star" : "fa-regular fa-star")
                            }
                            onMouseEnter={() => setTempRating(5)}
                            onMouseLeave={() => setTempRating(5)}
                        >
                        </div>
                    </div>

                    <textarea
                        className="reviewInput"
                        type='text'
                        placeholder={`${updateReview.review}`}
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                    >
                    </textarea>
                    {errors.review && <span className="error bottomError">Review needs to have at least one character or an emoji 😁</span>}

                </div>
                <div className="updateButtons">
                    <button className="b yesButton"> Yes (Update Review) </button>
                    <button className="b noButton" onClick={closeModal}> No (Cancel Update) </button>
                </div>
            </form>
        </div>
    )
}
