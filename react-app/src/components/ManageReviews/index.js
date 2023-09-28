import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, NavLink } from "react-router-dom";
import { thunkGetUserReviews } from "../../store/reviews";
import { thunkGetRestaurants } from "../../store/restaurants";
import OpenModalButton from "../OpenModalButton";
import { DeleteReviewModal } from "../ReviewModal/DeleteReviewModal";
import { UpdateReviewModal } from "../ReviewModal/UpdateReviewModal";
import "./ManageReviews.css"

export const ManageReviews = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const user = useSelector((state) => state.session.user);
    const reviews = useSelector((state) => state.reviews.allReviews);
    const restaurants = useSelector((state) => state.restaurant.allRestaurants);

    const reviewsList = Object.values(reviews);
    const restaurantsList = Object.values(restaurants)

    function lowBudgetDateConverter(date) {
        let newDate = String(new Date(date))
        let month = newDate.substring(4, 7)
        let day = newDate.substring(7,10)
        let year = newDate.substring(10, 16)
        return month.concat(day, ",".concat(year))
    }

    // function getRestaurantName(restaurantId) {
    //     let name = ""
    //     restaurantsList.forEach((restaurant) => {
    //         // console.log("restaurant: ", restaurant.id)
    //         console.log(" 111111111111111111111111: ", restaurant.id === restaurantId)
    //         if (restaurant.id === restaurantId) {
    //             name = restaurant.name
    //         }
    //     })
    //     return name
    // }

    // console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaa", getRestaurantName(1))

    useEffect(() => {
        dispatch(thunkGetUserReviews());
        dispatch(thunkGetRestaurants());
    }, [dispatch, reviewsList.length]);

    if (!user) return null;

    const handleClick = () => {
        // COMEBACK LATER
    }
    // review.restaurant.name
    return (
        <div className="all-reviews-container">
            <h1>Manage Your Reviews</h1>
            {reviewsList.map((review) => (
                <div className="review-container" key={review.id}>
                    <div className="review-stars">
                        <h4>Stars: </h4>
                        {/* {review.stars} */}
                        <div className= {review.stars >= 1 ? "fa-solid fa-star" : "fa-regular fa-star"}></div>
                        <div className= {review.stars >= 2 ? "fa-solid fa-star" : "fa-regular fa-star"}></div>
                        <div className= {review.stars >= 3 ? "fa-solid fa-star" : "fa-regular fa-star"}></div>
                        <div className= {review.stars >= 4 ? "fa-solid fa-star" : "fa-regular fa-star"}></div>
                        <div className= {review.stars >= 5 ? "fa-solid fa-star" : "fa-regular fa-star"}></div>
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
                            modalComponent={<DeleteReviewModal review={review}/>}
                        />
                        <OpenModalButton
                            className="update-button"
                            buttonText="Update"
                            modalComponent={<UpdateReviewModal updateReview={review}/>}
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}
