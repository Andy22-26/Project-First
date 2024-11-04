import CartCard from "./CartCard";

const CartContainer = ({ cart, removeCart, emptyCart }) => {
  const totalitems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const totalprice = cart.reduce(
    (sum, item) =>
      sum + parseFloat(item.price.replace("$", "")) * item.quantity,
    0
  );

  return (
    <div>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          <h2>Cart items: {totalitems}</h2>
          {cart.map((item) => (
            <CartCard key={item.id} item={item} removeCart={removeCart} />
          ))}

          <div>
            <button onClick={emptyCart}>Empty Cart</button>

            <button>Total Fees: ${totalprice.toFixed(2)}</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartContainer;
