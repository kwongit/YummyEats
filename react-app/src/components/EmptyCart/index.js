
import { useHistory, useNavigate } from "react-router-dom";
import './EmptyCart.css'

export const EmptyCart = () => {
  const history = useHistory();

  //!
  const onClick = () => {

    history.push(`/`);
    window.location.reload();
  };


  return (
    <div>
      <div id="empty-cart">
        <h1> Your Cart Is Empty </h1>
        <button
        onClick={onClick}>Go to Main Page</button>
      </div>
    </div>
  );
};
