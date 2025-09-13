import TransactionForm from "../components/TransactionForm";
import { addTransaction } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function AddTransaction() {
  const navigate = useNavigate();

  const handleSubmit = async (form) => {
    await addTransaction(form);
    navigate("/");
  };

  return <TransactionForm onSubmit={handleSubmit} />;
}
