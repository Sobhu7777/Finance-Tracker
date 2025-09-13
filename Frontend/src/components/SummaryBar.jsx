export default function SummaryBar({ transactions }) {
  const income = transactions.filter(t => t.amount > 0).reduce((a, b) => a + b.amount, 0);
  const expense = transactions.filter(t => t.amount < 0).reduce((a, b) => a + b.amount, 0);
  const balance = income + expense;

  return (
    <div className="grid grid-cols-1 gap-6">
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg transform transition-transform duration-200 hover:scale-[1.01] flex justify-between items-center">
        <h3 className="text-xl font-medium text-gray-400">Total Income</h3>
        <p className="mt-2 text-3xl font-extrabold text-green-500">
          ₹{income.toFixed(2)}
        </p>
      </div>
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg transform transition-transform duration-200 hover:scale-[1.01] flex justify-between items-center">
        <h3 className="text-xl font-medium text-gray-400">Total Expenses</h3>
        <p className="mt-2 text-3xl font-extrabold text-red-500">
          ₹{Math.abs(expense).toFixed(2)}
        </p>
      </div>
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg transform transition-transform duration-200 hover:scale-[1.01] flex justify-between items-center">
        <h3 className="text-xl font-medium text-gray-400">Net Balance</h3>
        <p className="mt-2 text-3xl font-extrabold text-violet-500">
          ₹{balance.toFixed(2)}
        </p>
      </div>
    </div>
  );
}