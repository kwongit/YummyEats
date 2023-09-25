import { useHistory } from "react-router";

const MenuItemTile = ({ menuItem }) => {
  const { id, name, price, image_url } = menuItem;

  const history = useHistory();

  const handleClick = () => {
    // tbd
    history.push(`/`);
  };

  return (
    <div key={id} onClick={handleClick}>
      <div>
        <img
          className="preview-image"
          src={image_url}
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
