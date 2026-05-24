
import React from "react";
import "../../assets/styles/homepage.css";
import {
  FaGem,
  FaRing,
  FaCrown
} from "react-icons/fa";

import {
  GiDiamondRing,
  GiNecklace
} from "react-icons/gi";


const CategoryMenu = ({
  categories,
  subcategories,
  activeCategory,
  onCategoryHover,
  onSubCategoryClick,
}) => {
  return (
    <div className="category-sidebar">
      <h3 className="side-title">Categories</h3>

      <ul className="category-list">
        {categories.map((cat) => (
          <li
            key={cat.id}
            className={`category-item ${
              activeCategory === cat.id ? "active" : ""
            }`}
            onMouseEnter={() => onCategoryHover(cat.id)}
          >
            {/* {cat.category_name} */}
            <span className="category-content">

  {cat.category_name === "Gold" && (
    <FaCrown className="cat-icon" />
  )}

  {cat.category_name === "Silver" && (
    <GiDiamondRing className="cat-icon" />
   
  )}

  {cat.category_name === "Diamond" && (
    <FaGem className="cat-icon" />
  )}

  {cat.category_name === "Platinum" && (
    <FaRing className="cat-icon" />
  )}

 

  {cat.category_name}

</span>

            {/* SUBCATEGORY DROPDOWN */}
            {activeCategory === cat.id && (
              <ul className="subcategory-list">
                {/* ALL OPTION */}
                <li
                  className="subcategory-item all-item"
                  onClick={() => onSubCategoryClick("all")}
                >
                  All
                </li>

                {/* REAL SUBCATEGORIES */}
                {subcategories
                  .filter((sub) => sub.category === cat.id)
                  .map((sub) => (
                    <li
                      key={sub.id}
                      className="subcategory-item"
                      onClick={() => onSubCategoryClick(sub.id)}
                    >
                      {sub.subcategory_name}
                    </li>
                  ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryMenu;
