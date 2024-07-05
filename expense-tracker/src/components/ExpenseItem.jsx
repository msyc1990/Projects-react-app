import { useState } from "react";

const ExpenseItem = ({ expense, deleteExpense, editExpense }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(expense.name);
  const [editedAmount, setEditedAmount] = useState(expense.amount);
  const [editedCategory, setEditedCategory] = useState(expense.category);
  const [editedDate, setEditedDate] = useState(expense.date);

  const handleEdit = () => {
    if (
      isEditing &&
      editedName.trim() !== "" &&
      editedAmount > 0 &&
      editedCategory.trim() !== "" &&
      editedDate !== ""
    ) {
      editExpense(expense.id, {
        name: editedName,
        amount: editedAmount,
        category: editedCategory,
        date: editedDate,
      });
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg mb-4">
      <div>
        {isEditing ? (
          <>
            <input
              type="text"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
              className="p-2 border border-gray-300 rounded-md mb-2"
              placeholder="Expense name"
            />
            <input
              type="number"
              value={editedAmount}
              onChange={(e) => setEditedAmount(parseFloat(e.target.value))}
              className="p-2 border border-gray-300 rounded-md mb-2"
              placeholder="Amount"
            />
            <select
              value={editedCategory}
              onChange={(e) => setEditedCategory(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md mb-2"
            >
              <option value="">Select category</option>
              <option value="Food">Food</option>
              <option value="Transport">Transport</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Others">Others</option>
            </select>
            <input
              type="date"
              value={editedDate}
              onChange={(e) => setEditedDate(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md mb-2"
            />
          </>
        ) : (
          <>
            <h3 className="text-lg font-bold">{expense.name}</h3>
            <p className="text-gray-600">{expense.amount.toFixed(2)} USD</p>
            <p className="text-gray-500">Category: {expense.category}</p>
            <p className="text-gray-500">Date: {expense.date}</p>
          </>
        )}
      </div>
      <div className="flex items-center">
        <button
          onClick={handleEdit}
          className="text-blue-600 hover:text-blue-800 mr-4 transition-colors duration-200"
        >
          {isEditing ? "Save" : "Edit"}
        </button>
        <button
          onClick={() => deleteExpense(expense.id)}
          className="text-red-600 hover:text-red-800 transition-colors duration-200"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ExpenseItem;
