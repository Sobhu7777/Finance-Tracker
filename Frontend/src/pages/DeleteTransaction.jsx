import { useNavigate, useParams } from "react-router-dom";
import { deleteTransaction } from "../services/api";

export default function DeleteTransaction() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = async () => {
    await deleteTransaction(id);
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <h3>Are you sure you want to delete this transaction?</h3>
      <button onClick={handleDelete} className="btn btn-danger me-2">Yes</button>
      <button onClick={() => navigate("/")} className="btn btn-secondary">No</button>
    </div>
  );
}
