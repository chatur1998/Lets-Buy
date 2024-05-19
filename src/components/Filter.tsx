import React from "react";

type FilterProps = {
  categories: string[];
  filterByCategory: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  filterByPrice: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Filter: React.FC<FilterProps> = ({
  categories,
  filterByCategory,
  filterByPrice,
}) => {
  const priceRanges = [
    { label: "All", value: "" },
    { label: "0-20", value: "0-20" },
    { label: "20-40", value: "20-40" },
    { label: "40-60", value: "40-60" },
    { label: "60-80", value: "60-80" },
    { label: "80-100", value: "80-100" },
    { label: "100+", value: "100-9999" },
  ];

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
      <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Filter by Category:
        </label>
        <select
          onChange={filterByCategory}
          className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full sm:w-1/3">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Filter by Price:
        </label>
        <select
          onChange={filterByPrice}
          className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          {priceRanges.map((range) => (
            <option key={range.value} value={range.value}>
              {range.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filter;
