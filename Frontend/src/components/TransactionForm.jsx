import { useState } from "react";

export default function TransactionForm({ initialData, onSubmit, onCancel }) {
  const [form, setForm] = useState(initialData || {
    title: "", amount: "", date: "", category: ""
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); onSubmit(form); };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-gray-700 rounded-lg text-white">
      <h3 className="text-2xl font-bold mb-6 text-white">{initialData ? "Edit Transaction" : "Add Transaction"}</h3>
      <div className="mb-4">
        <label className="block text-gray-300 text-sm font-medium mb-2">Title</label>
        <input 
          name="title" 
          value={form.title} 
          onChange={handleChange} 
          placeholder="e.g., Groceries" 
          required 
          className="w-full p-3 border border-gray-600 rounded-lg bg-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-300 text-sm font-medium mb-2">Amount</label>
        <input 
          name="amount" 
          type="number" 
          value={form.amount} 
          onChange={handleChange} 
          placeholder="e.g., -50.00" 
          required 
          className="w-full p-3 border border-gray-600 rounded-lg bg-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-300 text-sm font-medium mb-2">Date</label>
        <input 
          name="date" 
          type="date" 
          value={form.date} 
          onChange={handleChange} 
          required 
          className="w-full p-3 border border-gray-600 rounded-lg bg-gray-600 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-300 text-sm font-medium mb-2">Category</label>
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-600 rounded-lg bg-gray-600 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
        >
          <option value="" disabled>Select a category</option>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Bills">Bills</option>
          <option value="Shopping">Shopping</option>
          <option value="Salary">Salary</option>
        </select>
      </div>
      <div className="flex items-center justify-end space-x-4">
        <button 
          type="button" 
          onClick={onCancel} 
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
        >
          Cancel
        </button>
        <button 
          type="submit" 
          className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
        >
          Save
        </button>
      </div>
    </form>
  );
}