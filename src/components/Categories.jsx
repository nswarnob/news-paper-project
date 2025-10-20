import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h2 className="font-bold hidden md:block">
        All Categories({categories.length}){" "}
      </h2>

      <div className="flex md:grid mt-5 gap-3 overflow-x-auto scrollbar-hide md:mb-0 lg:mb-0 mb-5">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            className={
              " font-semibold text-sm md:text-xl text-accent text-nowrap px-4 md:px-3 md:py-1 rounded-3xl bg-base-100 border-0 hover:bg-base-200"
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
