import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseChart from "./components/ExpenseChart";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const editExpense = (id, updatedExpense) => {
    setExpenses(
      expenses.map((expense) =>
        expense.id === id ? { ...expense, ...updatedExpense } : expense
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-200 p-4 flex items-center justify-center">
      <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Expense Tracker</h1>
        <ExpenseForm addExpense={addExpense} />
        <ExpenseList
          expenses={expenses}
          deleteExpense={deleteExpense}
          editExpense={editExpense}
        />
        <ExpenseChart expenses={expenses} />
      </div>
    </div>
  );
};

export default App;
