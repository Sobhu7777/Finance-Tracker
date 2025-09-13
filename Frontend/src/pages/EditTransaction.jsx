import { useEffect, useState } from "react";
import { getTransaction, updateTransaction } from "../services/api";
import TransactionForm from "../components/TransactionForm";
import { useNavigate, useParams } from "react-router-dom";

export default function EditTransaction() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    getTransaction(id).then(res => setData(res.data));
  }, [id]);

  const handleSubmit = async (form) => {
    await updateTransaction(id, form);
    navigate("/");
  };

  return data ? <TransactionForm initialData={data} onSubmit={handleSubmit} /> : <p>Loading...</p>;
}
