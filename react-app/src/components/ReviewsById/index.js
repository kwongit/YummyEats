import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, NavLink, useParams } from "react-router-dom";
import { thunkGetRestaurantReviews } from "../../store/reviews";
import { thunkGetRestaurantInfo } from "../../store/restaurants";
import { DeleteReviewModal } from "../ReviewModal/DeleteReviewModal"
import { CreateReviewModal } from "../ReviewModal";
import OpenModalButton from "../OpenModalButton";
import { UpdateReviewModal } from "../ReviewModal/UpdateReviewModal";
import "../ManageReviews/ManageReviews.css"

export const RestaurantReviews = ({restaurantId}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    // const { restaurantId } = useParams();

    let user = useSelector((state) => state.session.user);
    const reviews = useSelector((state) => state.reviews.allReviews);
    const restaurant = useSelector((state) => state.restaurant.singleRestaurant);

    const reviewsList = Object.values(reviews);
    // const restaurantsList = Object.values(restaurants)

    // restaurantsList.map(restaurant => console.log("single restaurant: ", restaurant.name))
    console.log("restaurant: ", restaurant)
    console.log("reviewList: ", reviewsList)

    function lowBudgetDateConverter(date) {
        let newDate = String(new Date(date))
        let month = newDate.substring(4, 7)
        let day = newDate.substring(7,10)
        let year = newDate.substring(10, 16)
        return month.concat(day, ",".concat(year))
    }

    // console.log(">>>>>>>>>>>>> LOOK: ", reviewsList.restaurant)

    // function getRestaurantName(restaurantId) {
    //     const target_restaurant = restaurantsList.find((restaurant) => {
    //         restaurant.id === restaurantId
    //     })
    //     return target_restaurant.name
    // }
    // console.log(getRestaurantName(1))

    // console.log("reviewsList.find", reviewsList.find((review) => review.user_id === user.id ))

    useEffect(() => {
        dispatch(thunkGetRestaurantReviews(restaurantId));
        dispatch(thunkGetRestaurantInfo(restaurantId));

    }, [dispatch, reviewsList.length]);

    if (!user) user = 0;
    if (!reviews) return null;
    // if (!restaurants) return null;

    const handleClick = () => {
        // COMEBACK LATER
    }

    return (
        <div className="all-reviews-container">
            <h1>Restaurant Reviews</h1>
            {!(reviewsList.find((review) => review.user_id === user.id )) && user.id !== restaurant.owner_id && user.id ?
                <OpenModalButton
                    className="delete-button"
                    buttonText='Create a Review'
                    modalComponent={<CreateReviewModal restaurant={restaurant}/>}
                />
                    :
                <></>
            }
            {reviewsList.map((review) => (
                <div className="review-container" key={review.id}>
                    <div className="review-stars">
                        <h4>Stars: </h4>
                        <div className= {review.stars >= 1 ? "fa-solid fa-star" : "fa-regular fa-star"}></div>
                        <div className= {review.stars >= 2 ? "fa-solid fa-star" : "fa-regular fa-star"}></div>
                        <div className= {review.stars >= 3 ? "fa-solid fa-star" : "fa-regular fa-star"}></div>
                        <div className= {review.stars >= 4 ? "fa-solid fa-star" : "fa-regular fa-star"}></div>
                        <div className= {review.stars >= 5 ? "fa-solid fa-star" : "fa-regular fa-star"}></div>
                    </div>
                    <div>
                        <h4>Reviewer: </h4> {review.user}
                    </div>
                    <div className="review-div">
                        <h4>Review:</h4> {review.review}
                    </div>
                    <div>
                        <h4>Updated on: </h4> {lowBudgetDateConverter(review.updated_at)}
                    </div>
                    <div>
                        {review.user_id === user.id && (
                            <div>
                                <OpenModalButton
                                    className="delete-button"
                                    buttonText='Delete'
                                    modalComponent={<DeleteReviewModal review={review}/>}
                                />
                                <OpenModalButton
                                    className="delete-button"
                                    buttonText='Update'
                                    modalComponent={<UpdateReviewModal updateReview={review}/>}
                                />
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}
