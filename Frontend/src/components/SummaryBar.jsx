export default function SummaryBar({ transactions }) {
  const income = transactions.filter(t => t.amount > 0).reduce((a, b) => a + b.amount, 0);
  const expense = transactions.filter(t => t.amount < 0).reduce((a, b) => a + b.amount, 0);
  const balance = income + expense;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-medium text-gray-600">Total Income</h3>
        <p className="mt-2 text-2xl font-bold text-green-600">₹{income.toFixed(2)}</p>
      </div>
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-medium text-gray-600">Total Expenses</h3>
        <p className="mt-2 text-2xl font-bold text-red-600">₹{Math.abs(expense).toFixed(2)}</p>
      </div>
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-medium text-gray-600">Net Balance</h3>
        <p className="mt-2 text-2xl font-bold text-blue-600">₹{balance.toFixed(2)}</p>
      </div>
    </div>
  );
}
