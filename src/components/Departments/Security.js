import React from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import './Department.css';

const dataPie = [
  { name: 'Resolved', value: 250 },
  { name: 'Pending', value: 150 },
];

const dataHistogram = [
  { name: 'Week 1', issues: 20 },
  { name: 'Week 2', issues: 30 },
  { name: 'Week 3', issues: 45 },
  { name: 'Week 4', issues: 25 },
];

const COLORS = ['#0088FE', '#FF8042'];

function Security() {
  return (
    <div className="department-page">
      <h2>Security</h2>
      <div className="charts">
        <div className="chart-container">
          <h3>Resolved vs Pending Complaints</h3>
          <PieChart width={400} height={400}>
            <Pie data={dataPie} dataKey="value" outerRadius={150} fill="#8884d8" label>
              {dataPie.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
        <div className="chart-container">
          <h3>Complaints Over Time</h3>
          <BarChart width={500} height={300} data={dataHistogram}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="issues" fill="#8884d8" />
          </BarChart>
        </div>
      </div>
    </div>
  );
}

export default Security;
