import { useHistory } from "react-router";

const MenuItemTile = ({ menuItem }) => {
  const { id, name, price, imageUrl } = menuItem;
// console.log('image url ====>' , image_url)
  const history = useHistory();

  const handleClick = () => {
    // tbd
    history.push(`/menuitems/${id}`);
  };

  return (
    <div key={id} onClick={handleClick}>
      <div>
        <img
          className="preview-image"
          src={imageUrl}
          alt={name}
          title={name}
        ></img>
      </div>
      <div>{name}</div>
      <div>{price}</div>
    </div>
  );
};

export default MenuItemTile;
