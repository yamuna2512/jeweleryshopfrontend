import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWishlist } from "../reducks/wishlist/selectors";
import { fetchWishlist, toggleWishlist } from "../reducks/wishlist/operations";
import { addCart, fetchCarts } from "../reducks/cart/operations";
import "../assets/styles/wishlist.css";


const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector(getWishlist);

  useEffect(() => {
    console.log("🔍 Wishlist Component Mounted - Fetching wishlist...");
    dispatch(fetchWishlist());
  }, [dispatch]);

  useEffect(() => {
    console.log("📋 Wishlist Updated:", wishlist);
  }, [wishlist]);

  const handleAddToCart = async (product) => {
    console.log("🛒 Adding to cart:", product);
    try {
      await dispatch(addCart({ product_id: product.id, quantity: 1 }));
      await dispatch(fetchCarts());
      console.log(" Successfully added to cart");
    } catch (error) {
      console.error("❌ Error adding to cart:", error);
    }
  };

  const handleRemoveFromWishlist = (productId, wishlistId) => {
    console.log("❌ Removing from wishlist:", { productId, wishlistId });
    dispatch(toggleWishlist(productId));
  };

  return (
    <div className="wishlist-page">
      <h2>My Wishlist</h2>

      {wishlist.length === 0 && <p>No items in wishlist</p>}

      {wishlist.map((item) => (
        <div key={item.id} className="wishlist-card">
          <img src={item.product.product_image} alt={item.product.product_name} />
          <h4>{item.product.product_name}</h4>
          <p>₹ {item.product.price}</p>

          <button onClick={() => handleAddToCart(item.product)}>
            Add to Cart
          </button>
          <button onClick={() => handleRemoveFromWishlist(item.product.id, item.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
