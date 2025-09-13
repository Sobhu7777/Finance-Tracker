import { useState } from "react";

export default function FilterControls({ onFilter }) {
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");

  const applyFilter = () => onFilter({ category, search });

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <input
        placeholder="Search by title"
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="w-full sm:w-1/2 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
      />
      <select
        onChange={e => setCategory(e.target.value)}
        value={category}
        className="w-full sm:w-1/4 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
      >
        <option value="">All Categories</option>
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Bills">Bills</option>
        <option value="Shopping">Shopping</option>
        <option value="Salary">Salary</option>
      </select>
      <button
        onClick={applyFilter}
        className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors"
      >
        Apply Filter
      </button>
    </div>
  );
}