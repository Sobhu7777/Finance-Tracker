import { useEffect, useState } from "react";
import { getTransactions, addTransaction, updateTransaction, deleteTransaction } from "../services/api";
import TransactionList from "../components/TransactionList";
import SummaryBar from "../components/SummaryBar";
import FilterControls from "../components/FilterControls";
import Charts from "../components/Charts";
import Modal from "../components/Modal";
import TransactionForm from "../components/TransactionForm";
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const [transactions, setTransactions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const { logout } = useAuth();

  const fetchData = async (filters = {}) => {
    try {
      const res = await getTransactions(filters);
      setTransactions(res.data);
    } catch (err) {
      console.error("Failed to fetch transactions:", err);
    }
  };

  useEffect(() => { fetchData(); }, []);

  const handleOpenModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  const handleSaveTransaction = async (form) => {
    if (form._id) {
      await updateTransaction(form._id, form);
    } else {
      await addTransaction(form);
    }
    await fetchData();
    handleCloseModal();
  };

  const handleDeleteTransaction = async (id) => {
    await deleteTransaction(id);
    await fetchData();
    handleCloseModal();
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <div className="container mx-auto p-4 md:p-8">
        <header className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <h1 className="text-4xl font-extrabold text-white">WealthWise</h1>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <button
              onClick={() => handleOpenModal(
                <TransactionForm onSubmit={handleSaveTransaction} onCancel={handleCloseModal} />
              )}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full shadow-lg transition-colors transform hover:scale-105"
            >
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                Add Transaction
              </span>
            </button>
            <button
              onClick={logout}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full shadow-lg transition-colors transform hover:scale-105"
            >
              Logout
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-6 mb-8">
          <SummaryBar transactions={transactions} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Transactions</h2>
            <FilterControls onFilter={fetchData} />
            <TransactionList
              transactions={transactions}
              onEdit={(t) => handleOpenModal(
                <TransactionForm initialData={t} onSubmit={handleSaveTransaction} onCancel={handleCloseModal} />
              )}
              onDelete={(id) => handleOpenModal(
                <div className="p-8 text-center text-white bg-gray-800 rounded-2xl">
                  <p className="mb-6 text-lg">Are you sure you want to delete this transaction?</p>
                  <div className="flex justify-center space-x-4">
                    <button
                      onClick={() => handleDeleteTransaction(id)}
                      className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                      Yes, Delete
                    </button>
                    <button
                      onClick={handleCloseModal}
                      className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            />
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <Charts transactions={transactions} />
          </div>
        </div>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          {modalContent}
        </Modal>
      </div>
    </div>
  );
}