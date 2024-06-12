import { Button } from "@/components/ui/button";
import React, { useState } from "react";

interface FilterProps {
  categories: any[];
  selectedCategory: string;
  handleCategoryChange: (category: string) => void;
  handleShowProduct: () => void;
}

export default function Filter({
  categories,
  selectedCategory,
  handleCategoryChange,
  handleShowProduct,
}: FilterProps) {
  const [localCategory, setLocalCategory] = useState(selectedCategory);

  const handleCategorySelect = (category: string) => {
    setLocalCategory(category);
  };

  const handleShowProductClick = () => {
    handleCategoryChange(localCategory);
    handleShowProduct();
  };

  return (
    <div className="w-full rounded-xl text-white p-6 bg-darkcmi h-fit border border-white">
      <h1 className="text-xl font-semibold">Filtered Product</h1>
      <div className="my-6">
        <h1>Category</h1>
        <form>
          <div className="mt-2">
            <input
              type="radio"
              id="all"
              name="category"
              value="all"
              checked={localCategory === "all"}
              onChange={() => handleCategorySelect("all")}
              className="mr-2"
            />
            <label htmlFor="all">All</label>
          </div>
          {categories.map((category, index) => (
            <div key={index} className="mt-2">
              <input
                type="radio"
                id={category}
                name="category"
                value={category}
                checked={localCategory === category}
                onChange={() => handleCategorySelect(category)}
                className="mr-2"
              />
              <label htmlFor={category}>{category}</label>
            </div>
          ))}
        </form>
      </div>
      <Button variant="outline" onClick={handleShowProductClick}>
        Show Product
      </Button>
    </div>
  );
}
