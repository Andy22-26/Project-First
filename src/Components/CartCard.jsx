import QuantityCounter from "./QuantityCounter";

const CartCard = ({ item, removeCart }) => {
  return (
    <div>
      <div>
        <img src={item.image} alt={item.productName} />
        <p>{item.productName}</p>
        <p>Price: {item.price}</p>
        <QuantityCounter quantity={item.quantity} />
      </div>
      <div>
        <p>
          <b>
            Total=$
            {(parseFloat(item.price.replace("$", "")) * item.quantity).toFixed(
              2
            )}
          </b>
        </p>
        <button onClick={() => removeCart(item.id)}>Remove</button>
      </div>
    </div>
  );
};

export default CartCard;
