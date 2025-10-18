import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h2 className="font-bold">All Categories({categories.length}) </h2>

      <div className="grid grid-cols-1 mt-5 gap-3">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            className={
              " font-semibold text-accent px-3 py-1 rounded-3xl bg-base-100 border-0 hover:bg-base-200"
            }
            to={`/category/${category.id}`}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
