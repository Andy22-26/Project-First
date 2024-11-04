import { useState } from "react";

const ProductCard = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(0);

  const handler = () => {
    if (quantity === 0) {
      alert("Please select something first");
    } else {
      addToCart(product, quantity);
    }
  };

  return (
    <div className="ProductCard">
      <h4>{product.productName}</h4>
      <img src={product.image} alt={product.productName} />
      <p>
        <b>{product.brand}</b>
      </p>
      <div>
        <button
          onClick={() => setQuantity(quantity - 1)}
          disabled={quantity <= 0}
        >
          -
        </button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity(quantity + 1)}>+</button>
      </div>
      <p>
        <b>{product.price}</b>
      </p>
      <button onClick={handler}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
