import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useModal } from "../../context/Modal";
import * as reviewActions from '../../store/reviews'

export const CreateReviewModal = ({ restaurant }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [stars, setStars] = useState()
    const [tempRating, setTempRating] = useState()
    const [review, setReview] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({})

    const { closeModal } = useModal();

    // console.log("CreateReviewModal restaurant: ", restaurant)

    useEffect(() => {
        const errors = {};
        if (!review) errors.review = "Review is required!";
        if (!stars) errors.stars = "Star rating is required!";
        setErrors(errors)
    }, [dispatch, review, stars])

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     // if (isSubmitting) return;
    //     setIsSubmitting(true);
    //     setSubmitted(true);

    //     if (!Object.values(errors).length) {
    //         const createReview = await dispatch(
    //             reviewActions.thunkCreateReview({ stars, review }, restaurant.id)
    //         )

    //         const combinedErrors = { ...errors, Errors: createReview.errors };

    //         if (createReview.errors) {
    //             setErrors(combinedErrors)
    //         } else {
    //             history.push(`/restaurants/${restaurant.id}`)
    //         }
    //     }
    //     setIsSubmitting(false)
    //     closeModal()
    //     // setIsSubmitting(false).then(closeModal)
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({})

        try {
            await dispatch(reviewActions.thunkCreateReview({ stars, review }, restaurant.id))
            .then(setSubmitted(true))
            .then(closeModal)
        } catch (error) {
            if (error) {
                const data = await error.json()
                console.log("LOOK: ", data.errors)
                setErrors(data.errors)
                setSubmitted(true)
            }
        }
    }

    return (
        <div className="updateModal">
            <h2>Create a Review</h2>
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
                    {errors.stars && submitted && <span className="error bottomError">Star review is needed</span>}
                    </div>

                    <textarea
                        className="reviewInput"
                        type='text'
                        placeholder="Leave a review here!"
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                    >
                    </textarea>
                    {errors.review && submitted && <span className="error bottomError">Review needs to have at least one character or an emoji 😁</span>}

                </div>
                <div className="updateButtons">
                    <button className="b yesButton"> Yes (Create Review) </button>
                    <button className="b noButton" onClick={closeModal}> No (Cancel Review) </button>
                </div>
            </form>
        </div>
    )
}
