import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://expense-tracker-backend-vszq.onrender.com/expenses")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Expense Tracker</h1>
      <ul>
        {data.map((expense, index) => (
          <li key={index} className="border p-2 mt-2">{expense.name}: ${expense.amount}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
