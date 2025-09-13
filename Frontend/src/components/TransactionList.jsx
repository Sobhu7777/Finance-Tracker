export default function TransactionList({ transactions, onEdit, onDelete }) {
  return (
    <ul className="divide-y divide-gray-200">
      {transactions.map(t => (
        <li key={t._id} className="py-4 flex items-center justify-between">
          <div className="flex-1">
            <h5 className="text-lg font-medium text-gray-900">{t.title}</h5>
            <p className="text-sm text-gray-500">{t.category} - {new Date(t.date).toLocaleDateString()}</p>
          </div>
          <div className={`font-semibold text-lg ml-4 ${t.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
            ₹{t.amount.toFixed(2)}
          </div>
          <div className="ml-4 flex-shrink-0">
            <button onClick={() => onEdit(t)} className="text-yellow-500 hover:text-yellow-600 font-medium mr-2">Edit</button>
            <button onClick={() => onDelete(t._id)} className="text-red-500 hover:text-red-600 font-medium">Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}
