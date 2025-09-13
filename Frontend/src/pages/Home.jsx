import { useEffect, useState } from "react";
import { getTransactions, addTransaction, updateTransaction, deleteTransaction } from "../services/api";
import TransactionList from "../components/TransactionList";
import SummaryBar from "../components/SummaryBar";
import FilterControls from "../components/FilterControls";
import Charts from "../components/Charts";
import Modal from "../components/Modal";
import TransactionForm from "../components/TransactionForm";

export default function Home() {
  const [transactions, setTransactions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const fetchData = async (filters = {}) => {
    const res = await getTransactions(filters);
    setTransactions(res.data);
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
    <div className="container mx-auto p-4 md:p-8">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">My Finances</h1>
        <button
          onClick={() => handleOpenModal(
            <TransactionForm onSubmit={handleSaveTransaction} onCancel={handleCloseModal} />
          )}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-full shadow-lg transition-colors"
        >
          Add Transaction
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <SummaryBar transactions={transactions} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Transactions</h2>
          <FilterControls onFilter={fetchData} />
          <TransactionList
            transactions={transactions}
            onEdit={(t) => handleOpenModal(
              <TransactionForm initialData={t} onSubmit={handleSaveTransaction} onCancel={handleCloseModal} />
            )}
            onDelete={(id) => handleOpenModal(
              <div className="p-4 text-center">
                <p className="mb-4">Are you sure you want to delete this transaction?</p>
                <button
                  onClick={() => handleDeleteTransaction(id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg mr-2"
                >
                  Yes, Delete
                </button>
                <button
                  onClick={handleCloseModal}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-lg"
                >
                  Cancel
                </button>
              </div>
            )}
          />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Charts transactions={transactions} />
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {modalContent}
      </Modal>
    </div>
  );
}