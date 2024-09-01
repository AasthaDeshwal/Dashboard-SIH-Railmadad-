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
import './TrainServices.css';

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

function TrainServices() {
  const [selectedYearFrom, setSelectedYearFrom] = useState('2024');
  const [selectedMonthFrom, setSelectedMonthFrom] = useState('January');
  const [selectedYearTo, setSelectedYearTo] = useState('2024');
  const [selectedMonthTo, setSelectedMonthTo] = useState('July');

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  const dataByMonth = {
    'January 2024': { level1: 2, level2: 3, level3: 1, solved: 15, unsolved: 5 },
    'February 2024': { level1: 5, level2: 4, level3: 3, solved: 20, unsolved: 6 },
    'March 2024': { level1: 3, level2: 5, level3: 2, solved: 18, unsolved: 7 },
    'April 2024': { level1: 6, level2: 4, level3: 5, solved: 25, unsolved: 4 },
    'May 2024': { level1: 7, level2: 5, level3: 4, solved: 30, unsolved: 5 },
    'June 2024': { level1: 10, level2: 8, level3: 6, solved: 40, unsolved: 8 },
    'July 2024': { level1: 8, level2: 9, level3: 7, solved: 35, unsolved: 10 },
  };

  const pieData = {
    labels: ['Solved', 'Unsolved'],
    datasets: [
      {
        data: [0, 0],
        backgroundColor: ['#27ae60', '#c0392b'],
        hoverBackgroundColor: ['#2ecc71', '#e74c3c'],
      },
    ],
  };

  const levelPieData = {
    labels: ['Level 1', 'Level 2', 'Level 3'],
    datasets: [
      {
        data: [0, 0, 0],
        backgroundColor: ['#2980b9', '#f39c12', '#d35400'],
        hoverBackgroundColor: ['#3498db', '#f1c40f', '#e67e22'],
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
        label: 'Solved Issues Level 1',
        data: months.slice(months.indexOf(selectedMonthFrom), months.indexOf(selectedMonthTo) + 1).map((month) => dataByMonth[`${month} 2024`]?.level1 || 0),
        backgroundColor: '#2c3e50',
        stack: 'solved',
      },
      {
        label: 'Solved Issues Level 2',
        data: months.slice(months.indexOf(selectedMonthFrom), months.indexOf(selectedMonthTo) + 1).map((month) => dataByMonth[`${month} 2024`]?.level2 || 0),
        backgroundColor: '#34495e',
        stack: 'solved',
      },
      {
        label: 'Solved Issues Level 3',
        data: months.slice(months.indexOf(selectedMonthFrom), months.indexOf(selectedMonthTo) + 1).map((month) => dataByMonth[`${month} 2024`]?.level3 || 0),
        backgroundColor: '#2c3e50',
        stack: 'solved',
      },
      {
        label: 'Unsolved Issues Level 1',
        data: months.slice(months.indexOf(selectedMonthFrom), months.indexOf(selectedMonthTo) + 1).map((month) => dataByMonth[`${month} 2024`]?.unsolved || 0),
        backgroundColor: '#7f8c8d',
        stack: 'unsolved',
      },
      {
        label: 'Unsolved Issues Level 2',
        data: months.slice(months.indexOf(selectedMonthFrom), months.indexOf(selectedMonthTo) + 1).map((month) => dataByMonth[`${month} 2024`]?.unsolved || 0),
        backgroundColor: '#95a5a6',
        stack: 'unsolved',
      },
      {
        label: 'Unsolved Issues Level 3',
        data: months.slice(months.indexOf(selectedMonthFrom), months.indexOf(selectedMonthTo) + 1).map((month) => dataByMonth[`${month} 2024`]?.unsolved || 0),
        backgroundColor: '#7f8c8d',
        stack: 'unsolved',
      },
    ],
  };

  const unsolvedComplaintsData = [
    { serial: 1, complaint: 'The train’s onboard entertainment options are not regularly updated with new content, leading to limited choices for passengers. This should be refreshed regularly.', date: '03/01/2024', level: 'Level 3' },
    { serial: 2, complaint: 'The train’s accessibility features for disabled passengers are sometimes insufficient or not well-maintained. Ensuring that these features are functional and accessible is essential.', date: '15/01/2024', level: 'Level 3' },
    { serial: 3, complaint: 'There is no response from the onboard medical staff despite repeated calls for assistance. This is unacceptable and needs immediate action to ensure passenger safety.', date: '20/02/2024', level: 'Level 1' },
    { serial: 4, complaint: 'The train\'s power outlets are not functioning properly, leaving passengers unable to charge their electronic devices. This needs to be fixed within the next few hours.', date: '05/03/2024', level: 'Level 2' },
    { serial: 5, complaint: 'The train staff are not providing timely service for requests like extra pillows or blankets, leading to dissatisfaction. Service needs to be improved promptly.', date: '18/03/2024', level: 'Level 2' },
  ];

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
    <div className="train-services-container">
      <h2 className="train-services-title">Train Services Issues</h2>
      <div className="filters">
        <label>
          From Year:
          <select value={selectedYearFrom} onChange={(e) => setSelectedYearFrom(e.target.value)}>
            <option value="2024">2024</option>
          </select>
        </label>
        <label>
          From Month:
          <select value={selectedMonthFrom} onChange={(e) => setSelectedMonthFrom(e.target.value)}>
            {months.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </label>
        <label>
          To Year:
          <select value={selectedYearTo} onChange={(e) => setSelectedYearTo(e.target.value)}>
            <option value="2024">2024</option>
          </select>
        </label>
        <label>
          To Month:
          <select value={selectedMonthTo} onChange={(e) => setSelectedMonthTo(e.target.value)}>
            {months.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="charts-container">
        <div className="pie-chart">
          <h3>Pie Chart: Solved vs. Unsolved Issues</h3>
          <Pie data={pieData} options={pieOptions} />
        </div>

        <div className="histogram-chart">
          <h3>Histogram: Complaint Levels</h3>
          <Bar data={histogramData} options={histogramOptions} />
        </div>
      </div>

      <div className="unsolved-complaints-table">
        <h3>Unsolved Complaints</h3>
        <table>
          <thead>
            <tr>
              <th>Serial No.</th>
              <th>Complaint</th>
              <th>Date</th>
              <th>Level</th>
            </tr>
          </thead>
          <tbody>
            {unsolvedComplaintsData.map((complaint) => (
              <tr key={complaint.serial}>
                <td>{complaint.serial}</td>
                <td>{complaint.complaint}</td>
                <td>{complaint.date}</td>
                <td>{complaint.level}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TrainServices;
