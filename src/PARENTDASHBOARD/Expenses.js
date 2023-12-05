import React from 'react';
import { Bar } from 'react-chartjs-2';

const Expenses = () => {
  const expensesData = [
    { category: 'Tuition', amount: 500 },
    { category: 'Books', amount: 100 },
    { category: 'Uniform', amount: 50 },
    { category: 'Activity Fees', amount: 75 },
  ];

  const data = {
    labels: expensesData.map((expense) => expense.category),
    datasets: [
      {
        label: 'Amount (₹)',
        data: expensesData.map((expense) => expense.amount),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 205, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white h-screen">
      <div className="text-3xl font-bold text-cyan-700 mb-8">Parent Expenses</div>
      <div className="bg-white rounded-lg overflow-hidden shadow-md w-full max-w-xl">
        {expensesData.map((expense, index) => (
          <div
            key={index}
            className={`flex items-center justify-between px-6 py-4 ${
              index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'
            }`}
          >
            <span className="text-lg font-semibold text-gray-800">
              {expense.category}
            </span>
            <span className="text-lg font-semibold text-blue-500">
              ₹{expense.amount}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-8 w-full max-w-xl">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Expenses;
