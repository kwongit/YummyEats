import deals from "../../assets/deals.png"
import grocery from "../../assets/grocery.png"
import convenience from "../../assets/convenience.png"
import pizza from "../../assets/pizza.png"
import alcohol from "../../assets/alcohol.png"
import pharmacy from "../../assets/pharmacy.png"
import baby from "../../assets/baby.png"
import specialty from "../../assets/specialty.png"
import pet from "../../assets/pet.png"
import flowers from "../../assets/flowers.png"
import retail from "../../assets/retail.png"
import overall from "../../assets/top_eats.png"

const showAlert = () => {
    window.alert("Coming Soon");
  };
let categories = (
    <div >
        <ul id="categories-bar-container">
            <li onClick={showAlert} >
                <div className="image-container" >
                    <img src={deals} alt="deals" ></img>
                </div>
                <p>Deals</p>
            </li>
            <li onClick={showAlert}>
                <div className="image-container">
                    <img src={grocery} alt="grocery" ></img>
                </div>
                <p>Grocery</p>
            </li>
            <li onClick={showAlert}>
                <div className="image-container">
                    <img src={convenience} alt="convenience" ></img>
                </div>
                <p>Convenience</p>
            </li>
            <li onClick={showAlert}>
                <div className="image-container">
                    <img src={pizza} alt="pizza" ></img>
                </div>
                <p>Pizza</p>
            </li>
            <li onClick={showAlert}>
                <div className="image-container">
                    <img src={alcohol} alt="alcohol" ></img>
                </div>
                <p>Alcohol</p>
            </li>
            <li onClick={showAlert}>
                <div className="image-container">
                    <img src={pharmacy} alt="pharmacy" ></img>
                </div>
                <p>Pharmacy</p>
            </li>
            <li onClick={showAlert}>
                <div className="image-container">
                    <img src={baby} alt="baby" ></img>
                </div>
                <p>Baby</p>
            </li>
            <li onClick={showAlert}>
                <div className="image-container">
                    <img src={specialty} alt="specialty" ></img>
                </div>
                <p>Specialty Foods</p>

            </li>
            <li onClick={showAlert}>
                <div className="image-container">
                    <img src={pet} alt="pet" ></img>
                </div>
                <p>Pet Supplies</p>
            </li>
            <li onClick={showAlert}>
                <div className="image-container">
                    <img src={flowers} alt="flowers" ></img>
                </div>
                <p>Flowers</p>
            </li>
            <li onClick={showAlert}>
                <div className="image-container">
                    <img src={retail} alt="retail" ></img>
                </div>
                <p>Retail</p>
            </li>
            <li onClick={showAlert}>
                <div className="image-container">
                    <img src={overall} alt="best" ></img>
                </div>
                <p>Best overall</p>
            </li>
        </ul>
    </div>
)

export default categories
