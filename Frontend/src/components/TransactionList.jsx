export default function TransactionList({ transactions, onEdit, onDelete }) {
  return (
    <ul className="divide-y divide-gray-700">
      {transactions.map(t => (
        <li key={t._id} className="py-4 flex items-center justify-between transition-transform duration-200 hover:scale-[1.01]">
          <div className="flex-1 flex items-center gap-4">
            <span className={`w-2 h-10 rounded-full ${t.amount > 0 ? 'bg-green-500' : 'bg-red-500'}`}></span>
            <div>
              <h5 className="text-lg font-medium text-gray-100">{t.title}</h5>
              <p className="text-sm text-gray-400 flex items-center gap-2">
                <span className="text-xs font-semibold px-2 py-1 rounded-full bg-gray-700 text-gray-300">{t.category}</span>
                <span className="text-xs">{new Date(t.date).toLocaleDateString()}</span>
              </p>
            </div>
          </div>
          <div className={`font-bold text-lg ml-4 ${t.amount > 0 ? 'text-green-500' : 'text-red-500'}`}>
            ₹{t.amount.toFixed(2)}
          </div>
          <div className="ml-4 flex-shrink-0 flex items-center space-x-2">
            <button onClick={() => onEdit(t)} className="text-gray-400 hover:text-violet-500 transition-colors p-2 rounded-full hover:bg-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </button>
            <button onClick={() => onDelete(t._id)} className="text-gray-400 hover:text-red-500 transition-colors p-2 rounded-full hover:bg-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}