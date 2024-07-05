import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Rejestracja wymaganych komponentów Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ExpenseChart = ({ expenses }) => {
  const categories = ["Food", "Transport", "Entertainment", "Others"];
  const data = {
    labels: categories,
    datasets: [
      {
        label: "Expenses",
        data: categories.map((category) =>
          expenses
            .filter((expense) => expense.category === category)
            .reduce((total, expense) => total + expense.amount, 0)
        ),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Expenses by Category",
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default ExpenseChart;
