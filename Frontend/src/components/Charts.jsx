import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

export default function Charts({ transactions }) {
  // Filter for expenses only to create the category pie chart
  const expenses = transactions.filter(t => t.amount < 0);
  
  const categoryData = expenses.reduce((acc, t) => {
    acc[t.category] = (acc[t.category] || 0) + Math.abs(t.amount);
    return acc;
  }, {});
  
  const pieData = Object.keys(categoryData).map(key => ({ name: key, value: categoryData[key] }));

  const COLORS = ["#4ade80", "#f87171", "#60a5fa", "#facc15", "#c084fc", "#fb923c"];

  // Prepare data for the spending trend bar chart
  const spendingTrendData = transactions
    .reduce((acc, t) => {
      const date = new Date(t.date).toLocaleDateString("en-US", { month: 'short', year: '2-digit' });
      const amount = t.amount < 0 ? Math.abs(t.amount) : 0;
      if (!acc[date]) {
        acc[date] = { date, amount: 0 };
      }
      acc[date].amount += amount;
      return acc;
    }, {});
  
  const barData = Object.values(spendingTrendData).sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <div className="space-y-8">
      <div>
        <h4 className="text-xl font-semibold text-gray-800 mb-4 text-center">Expenses by Category</h4>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} labelLine={false} fill="#8884d8">
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h4 className="text-xl font-semibold text-gray-800 mb-4 text-center">Spending Trend</h4>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="date" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip />
            <Bar dataKey="amount" fill="#6366f1" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}