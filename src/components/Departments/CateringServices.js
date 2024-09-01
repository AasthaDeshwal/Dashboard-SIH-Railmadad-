import React from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import './Department.css';

const dataPie = [
  { name: 'Resolved', value: 200 },
  { name: 'Pending', value: 100 },
];

const dataHistogram = [
  { name: 'Week 1', issues: 15 },
  { name: 'Week 2', issues: 25 },
  { name: 'Week 3', issues: 35 },
  { name: 'Week 4', issues: 20 },
];

const COLORS = ['#0088FE', '#FF8042'];

function CateringServices() {
  return (
    <div className="department-page">
      <h2>Catering Services</h2>
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

export default CateringServices;
