import React, { useState } from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import './Summary.css';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ChartDataLabels
);

function Summary() {
  const [selectedYearFrom, setSelectedYearFrom] = useState('2024');
  const [selectedMonthFrom, setSelectedMonthFrom] = useState('January');
  const [selectedYearTo, setSelectedYearTo] = useState('2024');
  const [selectedMonthTo, setSelectedMonthTo] = useState('July');

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const departments = [
    'TicketingIssues',
    'TrainServices',
    'StationFacilities',
    'Security',
    'CateringServices',
    'LuggageAndLostProperty',
    'MedicalAssistance',
    'Miscellaneous'
  ];

  const dataByMonth = {
    'January 2024': { level1: 5, level2: 7, level3: 3, solved: 15, unsolved: 15 },
    'February 2024': { level1: 10, level2: 8, level3: 7, solved: 25, unsolved: 7 },
    'March 2024': { level1: 8, level2: 6, level3: 6, solved: 20, unsolved: 5 },
    'April 2024': { level1: 15, level2: 10, level3: 5, solved: 30, unsolved: 25 },
    'May 2024': { level1: 20, level2: 10, level3: 5, solved: 35, unsolved: 2 },
    'June 2024': { level1: 25, level2: 15, level3: 5, solved: 45, unsolved: 4 },
    'July 2024': { level1: 20, level2: 15, level3: 5, solved: 40, unsolved: 10 },
  };

  const pieData = {
    labels: ['Solved', 'Unsolved'],
    datasets: [
      {
        data: [0, 0],
        backgroundColor: ['#2ecc71', '#e74c3c'],
        hoverBackgroundColor: ['#27ae60', '#c0392b'],
      },
    ],
  };

  const levelPieData = {
    labels: ['Level 1', 'Level 2', 'Level 3'],
    datasets: [
      {
        data: [0, 0, 0],
        backgroundColor: ['#3498db', '#f1c40f', '#e67e22'],
        hoverBackgroundColor: ['#2980b9', '#f39c12', '#d35400'],
      },
    ],
  };

  const updatePieData = () => {
    let solved = 0;
    let unsolved = 0;
    let level1 = 0;
    let level2 = 0;
    let level3 = 0;
    const startIndex = months.indexOf(selectedMonthFrom);
    const endIndex = months.indexOf(selectedMonthTo);

    for (let i = startIndex; i <= endIndex; i++) {
      const month = `${months[i]} ${selectedYearFrom}`;
      if (dataByMonth[month]) {
        solved += dataByMonth[month].solved;
        unsolved += dataByMonth[month].unsolved;
        level1 += dataByMonth[month].level1;
        level2 += dataByMonth[month].level2;
        level3 += dataByMonth[month].level3;
      }
    }

    pieData.datasets[0].data = [solved, unsolved];
    levelPieData.datasets[0].data = [level1, level2, level3];
  };

  updatePieData();

  const histogramData = {
    labels: months.slice(months.indexOf(selectedMonthFrom), months.indexOf(selectedMonthTo) + 1),
    datasets: [
      {
        label: 'Solved Level 1',
        data: months
          .slice(months.indexOf(selectedMonthFrom), months.indexOf(selectedMonthTo) + 1)
          .map((month) => dataByMonth[`${month} 2024`]?.solved || 0),
        backgroundColor: '#2ecc71',
        stack: 'solved',
      },
      {
        label: 'Solved Level 2',
        data: months
          .slice(months.indexOf(selectedMonthFrom), months.indexOf(selectedMonthTo) + 1)
          .map((month) => (dataByMonth[`${month} 2024`]?.solved || 0) * 0.5), // Example ratio for level 2
        backgroundColor: '#f1c40f',
        stack: 'solved',
      },
      {
        label: 'Solved Level 3',
        data: months
          .slice(months.indexOf(selectedMonthFrom), months.indexOf(selectedMonthTo) + 1)
          .map((month) => (dataByMonth[`${month} 2024`]?.solved || 0) * 0.3), // Example ratio for level 3
        backgroundColor: '#e67e22',
        stack: 'solved',
      },
      {
        label: 'Unsolved Level 1',
        data: months
          .slice(months.indexOf(selectedMonthFrom), months.indexOf(selectedMonthTo) + 1)
          .map((month) => dataByMonth[`${month} 2024`]?.unsolved || 0),
        backgroundColor: '#3498db',
        stack: 'unsolved',
      },
      {
        label: 'Unsolved Level 2',
        data: months
          .slice(months.indexOf(selectedMonthFrom), months.indexOf(selectedMonthTo) + 1)
          .map((month) => (dataByMonth[`${month} 2024`]?.unsolved || 0) * 0.5), // Example ratio for level 2
        backgroundColor: '#9b59b6',
        stack: 'unsolved',
      },
      {
        label: 'Unsolved Level 3',
        data: months
          .slice(months.indexOf(selectedMonthFrom), months.indexOf(selectedMonthTo) + 1)
          .map((month) => (dataByMonth[`${month} 2024`]?.unsolved || 0) * 0.3), // Example ratio for level 3
        backgroundColor: '#e74c3c',
        stack: 'unsolved',
      },
    ],
  };
  

  const departmentHistogramData = {
    labels: departments,
    datasets: [
      {
        label: 'Solved Level 1',
        data: departments.map(() => Math.floor(Math.random() * 20)),
        backgroundColor: '#2ecc71',
        stack: 'solved',
      },
      {
        label: 'Solved Level 2',
        data: departments.map(() => Math.floor(Math.random() * 15)),
        backgroundColor: '#f1c40f',
        stack: 'solved',
      },
      {
        label: 'Solved Level 3',
        data: departments.map(() => Math.floor(Math.random() * 10)),
        backgroundColor: '#e67e22',
        stack: 'solved',
      },
      {
        label: 'Unsolved Level 1',
        data: departments.map(() => Math.floor(Math.random() * 10)),
        backgroundColor: '#3498db',
        stack: 'unsolved',
      },
      {
        label: 'Unsolved Level 2',
        data: departments.map(() => Math.floor(Math.random() * 8)),
        backgroundColor: '#9b59b6',
        stack: 'unsolved',
      },
      {
        label: 'Unsolved Level 3',
        data: departments.map(() => Math.floor(Math.random() * 5)),
        backgroundColor: '#e74c3c',
        stack: 'unsolved',
      },
    ],
  };

  const pieOptions = {
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#333',
          font: {
            size: 14,
          },
        },
      },
      datalabels: {
        color: '#000',
        font: {
          weight: 'bold',
          size: 16,
        },
        formatter: (value) => value,
      },
    },
  };

  const histogramOptions = {
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        display: true,
        align: 'top',
        color: '#000',
        font: {
          weight: 'bold',
          size: 14,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#555',
          font: {
            size: 12,
          },
        },
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          color: '#555',
          font: {
            size: 12,
          },
          stepSize: 10,
          beginAtZero: true,
        },
        grid: {
          color: '#eaeaea',
        },
      },
    },
  };

  return (
    <div className="summary-container">
      <h2 className="summary-title">Dashboard Summary</h2>
      <div className="time-period-select">
        <label htmlFor="yearFrom" className="label-year">From Year:</label>
        <select id="yearFrom" value={selectedYearFrom} onChange={(e) => setSelectedYearFrom(e.target.value)}>
          <option value="2024">2024</option>
        </select>
        <select id="monthFrom" value={selectedMonthFrom} onChange={(e) => setSelectedMonthFrom(e.target.value)}>
          {months.map((month) => (
            <option key={month} value={month}>{month}</option>
          ))}
        </select>

        <label htmlFor="yearTo" className="label-year">To Year:</label>
        <select id="yearTo" value={selectedYearTo} onChange={(e) => setSelectedYearTo(e.target.value)}>
          <option value="2024">2024</option>
        </select>
        <select id="monthTo" value={selectedMonthTo} onChange={(e) => setSelectedMonthTo(e.target.value)}>
          {months.map((month) => (
            <option key={month} value={month}>{month}</option>
          ))}
        </select>
      </div>

      <div className="charts">
        <div className="pie-charts-container">
          <div className="chart-container">
            <h3 className="chart-title">Solved vs Unsolved Issues</h3>
            <Pie data={pieData} options={pieOptions} />
          </div>
          <div className="chart-container">
            <h3 className="chart-title">Issues by Level</h3>
            <Pie data={levelPieData} options={pieOptions} />
          </div>
        </div>

        <div className="chart-container full-width-chart">
          <h3 className="chart-title">Monthly Issues Breakdown</h3>
          <Bar data={histogramData} options={histogramOptions} />
        </div>

        <div className="chart-container full-width-chart">
          <h3 className="chart-title">Issues by Department</h3>
          <Bar data={departmentHistogramData} options={histogramOptions} />
        </div>
      </div>
    </div>
  );
}

export default Summary;
