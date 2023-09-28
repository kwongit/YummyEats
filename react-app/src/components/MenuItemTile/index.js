import { useHistory } from "react-router";
import OpenModalButton from "../OpenModalButton";
import { DeleteMenuItemModal } from "./DeleteMenuItemModal";


const MenuItemTile = ({ menuItem }) => {
  const { id, name, price, imageUrl } = menuItem;
// console.log('image url ====>' , image_url)
  const history = useHistory();

  const handleClick = () => {
    // tbd
    history.push(`/menuitems/${id}`);
  };

  return (
    <div className="menu-item-details-container" key={id}>
      <div className="menu-item-tile" onClick={handleClick}>
        <img
          className="preview-image"
          src={imageUrl}
          alt={name}
          title={name}
        ></img>
      <div>{name}</div>
      <div>{price}</div>
      </div>

      <OpenModalButton
        className="delete-button"
        buttonText="Delete"
        modalComponent={
          <DeleteMenuItemModal menuItemId={menuItem.id} />
        }
      />
    </div>
  );
};

export default MenuItemTile;
