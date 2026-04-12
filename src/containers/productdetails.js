import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import "../assets/styles/productdetails.css";
import { addCart, fetchCarts } from "../reducks/cart/operations";
import { isUserSignedIn } from "../reducks/users/selectors";

const ProductDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);

  const isSignedIn = useSelector(isUserSignedIn);

  useEffect(() => {
    axios
      .get(`https://jeweleryshopbackend.onrender.com/api/products/${id}/`)
      .then((res) => setProduct(res.data));
  }, [id]);

  const handleBuyNow = async () => {
    if (!product) return;

    if (!isSignedIn) {
      history.push("/sign-in");
      return;
    }
    
    setLoading(true);
    console.log("🛒 Buy Now - Adding to cart:", { product_id: product.id, quantity });
    
    try {
      await dispatch(addCart({ product_id: product.id, quantity: quantity }));
      await dispatch(fetchCarts());
      console.log("✅ Successfully added to cart, redirecting...");
      
      // Redirect to cart page
      history.push("/cart");
    } catch (error) {
      console.error("❌ Error adding to cart:", error);
      alert("Error adding to cart: " + (error.response?.data?.error || error.message));
    } finally {
      setLoading(false);
    }
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-details-page">
      <div className="details-container">

        {/* LEFT IMAGE */}
        <div className="details-image">
          <img src={product.product_image} alt={product.product_name} />
        </div>

        {/* RIGHT CONTENT */}
        <div className="details-info">
          <h2>{product.product_name}</h2>
          <p className="sku">Product Code: {product.sku}</p>
          <p className="availability">Availability: In stock</p>

          <h3 className="price">₹ {product.price}</h3>

          <div className="meta">
            <p>Weight: {product.weight} g</p>
          </div>

          <div className="quantity-selector">
            <label>Quantity: </label>
            <input 
              type="number" 
              min="1" 
              value={quantity} 
              onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
            />
          </div>

          <button 
            className="buy-btn" 
            onClick={handleBuyNow}
            disabled={loading}
          >
            {loading ? "Adding..." : "Buy Now"}
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;
