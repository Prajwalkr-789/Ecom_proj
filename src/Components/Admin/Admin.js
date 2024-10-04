import React from 'react';
import { Link } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Admin = () => {
  // Random data for the chart
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Revenue ($)',
        data: [5000, 4000, 7500, 12000, 9000, 8000],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Revenue Analytics (in USD)',
      },
    },
  };

  return (
    <div className="admin-dashboard min-h-screen flex flex-col items-center bg-black p-6 mt-10">
      <h1 className="text-4xl font-bold text-white mb-10">Admin Dashboard</h1>

      {/* Revenue Analytics Chart */}
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg mb-10">
        <Line data={data} options={options} />
      </div>

      {/* Management Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        
        {/* Customer Management Box */}
        <Link to="/admin/customers" className="bg-blue-500 text-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-200">
          <div className="text-2xl font-bold mb-4">Customer Management</div>
          <p>Manage all customer-related activities, view profiles, and handle customer requests.</p>
        </Link>

        {/* Seller Management Box */}
        <Link to="/admin/sellers" className="bg-green-500 text-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-200">
          <div className="text-2xl font-bold mb-4">Seller Management</div>
          <p>Oversee sellers, monitor activities, and assist with account management.</p>
        </Link>

        {/* Product Management Box */}
        <Link to="/admin/products" className="bg-yellow-500 text-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-200">
          <div className="text-2xl font-bold mb-4">Product Management</div>
          <p>Manage products, update inventory, and ensure quality control.</p>
        </Link>

        {/* Role Assignment Box */}
        <Link to="/admin/roles" className="bg-red-500 text-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-200">
          <div className="text-2xl font-bold mb-4">Role Assignment</div>
          <p>Assign roles and permissions to users, manage admin access, and more.</p>
        </Link>

      </div>
    </div>
  );
};

export default Admin;
