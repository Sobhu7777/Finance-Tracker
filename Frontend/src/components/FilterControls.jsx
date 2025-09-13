import { useState } from "react";

export default function FilterControls({ onFilter }) {
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");

  const applyFilter = () => onFilter({ category, search });

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6 p-4 bg-gray-800 rounded-lg shadow-inner">
      <input
        placeholder="Search by title..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="flex-grow p-3 border border-gray-600 rounded-xl bg-gray-700 text-white placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
      />
      <select
        onChange={e => setCategory(e.target.value)}
        value={category}
        className="flex-grow sm:flex-grow-0 sm:w-1/4 p-3 border border-gray-600 rounded-xl bg-gray-700 text-white shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
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
        className="w-full sm:w-auto bg-violet-600 hover:bg-violet-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition-colors"
      >
        Apply Filter
      </button>
    </div>
  );
}