"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const SalesChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300} className="responsiv-chart-container">
      <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis tickFormatter={(value) => `$${value.toFixed(2)}`} />
        <Tooltip formatter={(value) => `${value}`} />
        <Legend />
        <Line
          type="monotone"
          dataKey="sales"
          stroke="#FF6600"
          activeDot={{ r: 8 }}
          name="Sales"
        />
        <Line
          type="monotone"
          dataKey="units"
          stroke="#28a745"
          name="Unit Sold"
        />
        
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SalesChart;
