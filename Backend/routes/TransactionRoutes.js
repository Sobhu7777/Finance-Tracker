const express = require("express");
const {
  createTransaction,
  getTransactions,
  getTransaction,
  updateTransaction,
  deleteTransaction
} = require("../controllers/TransactionController");

const router = express.Router();

router.route("/")
  .get(getTransactions)
  .post(createTransaction);

router.route("/:id")
  .get(getTransaction)
  .put(updateTransaction)
  .delete(deleteTransaction);

module.exports = router;
