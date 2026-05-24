

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";



// Components
import BannerSlide from "../components/homepage/bannerslide";
import CategoryMenu from "../components/homepage/categorymenu";
import ProductListCard from "../components/homepage/productlistcard";

// Redux
import { fetchCategories } from "../reducks/category/operations";
import { fetchSubCategories } from "../reducks/subcategory/operations";
import { fetchProducts } from "../reducks/product/operations";

import { getCategories } from "../reducks/category/selectors";
import { getSubCategories } from "../reducks/subcategory/selectors";
import { getProducts } from "../reducks/product/selectors";

// CSS
import "../assets/styles/homepage.css";

const HomePage = () => {
  const dispatch = useDispatch();

  const categories = useSelector(getCategories);
  const subcategories = useSelector(getSubCategories);
  const products = useSelector(getProducts);
  const location = useLocation();


  //  TWO STATES (REQUIRED)
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubCategory, setActiveSubCategory] = useState(null);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchSubCategories());
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
  if (location.state?.resetFilters) {
    setActiveCategory(null);
    setActiveSubCategory(null);
  }
}, [location.state]);




const isFiltering = activeCategory || activeSubCategory;

// If user is browsing normally → apply category filter
const filteredProducts = isFiltering
  ? products.filter((product) => {
      if (!activeCategory) return true;

      if (!activeSubCategory || activeSubCategory === "all") {
        return product.category === activeCategory;
      }

      return (
        product.category === activeCategory &&
        product.subcategory === activeSubCategory
      );
    })
  : products;



  return (
    <div className="homepage">
      {/* Banner */}
      <section className="homepage-banner">
        <BannerSlide />
      </section>

      <div className="homepage-content">
        {/* Category Menu */}
        <aside className="homepage-left">
          <CategoryMenu
            categories={categories}
            subcategories={subcategories}
            activeCategory={activeCategory}
            onCategoryHover={setActiveCategory}
            onSubCategoryClick={setActiveSubCategory}
          />
        </aside>

        {/* Products */}
        <main className="homepage-right">
          <h3 className="section-title">
            {activeSubCategory
              ? "Filtered Products"
              : activeCategory
              ? "Category Products"
              : "Latest Products"}
          </h3>

          <ProductListCard products={filteredProducts} />
        </main>
      </div>
    </div>
  );
};

export default HomePage;
