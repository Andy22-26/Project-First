const QuantityCounter = ({ quantity, incQuantity, decQuantity }) => {
  return (
    <div className="QuantityCounter">
      <button onClick={decQuantity} disabled={quantity <= 1}>
        -
      </button>
      <span>{quantity}</span>
      <button onClick={incQuantity}> + </button>
    </div>
  );
};

export default QuantityCounter;
