const NavBar = ({ cart, users = "User" }) => {
  const cartIsEmpty = cart.length === 0;

  return (
    <nav className="NavBar">
      <p>Welcome, {users}</p>
      <p>Grocery Store</p>
      <div>
        <img
          src={
            cartIsEmpty
              ? "src/assets/cart-empty.png"
              : "src/assets/cart-full.png"
          }
          alt="image"
        />
      </div>
    </nav>
  );
};

export default NavBar;
