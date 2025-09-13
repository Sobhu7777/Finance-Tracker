import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

export default function Charts({ transactions }) {
  const expenses = transactions.filter(t => t.amount < 0);
  
  const categoryData = expenses.reduce((acc, t) => {
    acc[t.category] = (acc[t.category] || 0) + Math.abs(t.amount);
    return acc;
  }, {});
  
  const pieData = Object.keys(categoryData).map(key => ({ name: key, value: categoryData[key] }));

  const COLORS = ["#4ade80", "#f87171", "#60a5fa", "#facc15", "#c084fc", "#fb923c"];

  const spendingTrendData = transactions
    .filter(t => t.amount < 0)
    .reduce((acc, t) => {
      const date = new Date(t.date).toLocaleDateString("en-US", { month: 'short', year: '2-digit' });
      const amount = Math.abs(t.amount);
      if (!acc[date]) {
        acc[date] = { date, amount: 0 };
      }
      acc[date].amount += amount;
      return acc;
    }, {});
  
  const barData = Object.values(spendingTrendData);

  return (
    <div className="space-y-8">
      <div>
        <h4 className="text-xl font-semibold text-gray-100 mb-4 text-center">Expenses by Category</h4>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} labelLine={false} fill="#8884d8">
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px' }} itemStyle={{ color: '#fff' }} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h4 className="text-xl font-semibold text-gray-100 mb-4 text-center">Spending Trend</h4>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4b5563" />
            <XAxis dataKey="date" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px' }} itemStyle={{ color: '#fff' }} />
            <Bar dataKey="amount" fill="#8b5cf6" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}