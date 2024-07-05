import { useState } from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses, deleteExpense, editExpense }) => {
  const [filter, setFilter] = useState("all");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const filteredExpenses = expenses.filter((expense) => {
    if (filter === "income") {
      return expense.amount > 0;
    }
    if (filter === "expense") {
      return expense.amount < 0;
    }
    if (startDate && endDate) {
      const expenseDate = new Date(expense.date);
      return (
        expenseDate >= new Date(startDate) && expenseDate <= new Date(endDate)
      );
    }
    return true;
  });

  const totalAmount = filteredExpenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  return (
    <div>
      <div className="flex justify-between mb-4">
        <button
          onClick={() => setFilter("all")}
          className={`px-3 py-1 rounded-lg ${
            filter === "all" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("income")}
          className={`px-3 py-1 rounded-lg ${
            filter === "income" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Income
        </button>
        <button
          onClick={() => setFilter("expense")}
          className={`px-3 py-1 rounded-lg ${
            filter === "expense" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Expense
        </button>
      </div>
      <div className="flex mb-4">
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="p-3 border border-gray-300 rounded-l-lg flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="p-3 border border-gray-300 rounded-r-lg flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2"
        />
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-bold">
          Total: {totalAmount.toFixed(2)} USD
        </h3>
      </div>
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expense={expense}
          deleteExpense={deleteExpense}
          editExpense={editExpense}
        />
      ))}
    </div>
  );
};

export default ExpenseList;
