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
import './TicketingIssues.css';

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

function TicketingIssues() {
  const [selectedYearFrom, setSelectedYearFrom] = useState('2024');
  const [selectedMonthFrom, setSelectedMonthFrom] = useState('January');
  const [selectedYearTo, setSelectedYearTo] = useState('2024');
  const [selectedMonthTo, setSelectedMonthTo] = useState('July');

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  const dataByMonth = {
    'January 2024': { level1: 6, level2: 8, level3: 4, solved: 20, unsolved: 10 },
    'February 2024': { level1: 12, level2: 9, level3: 8, solved: 30, unsolved: 7 },
    'March 2024': { level1: 10, level2: 7, level3: 9, solved: 25, unsolved: 8 },
    'April 2024': { level1: 17, level2: 11, level3: 6, solved: 35, unsolved: 6 },
    'May 2024': { level1: 22, level2: 11, level3: 6, solved: 40, unsolved: 8 },
    'June 2024': { level1: 27, level2: 16, level3: 7, solved: 50, unsolved: 9 },
    'July 2024': { level1: 23, level2: 18, level3: 7, solved: 45, unsolved: 10 },
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
    { serial: 1, complaint: 'Unable to book a ticket for a night train.', date: '03/01/2024', level: 'Level 1' },
    { serial: 2, complaint: 'Ticket was booked, but the payment was not processed.', date: '15/01/2024', level: 'Level 1' },
    { serial: 3, complaint: 'The ticket showed an incorrect coach location, requiring manual correction.', date: '20/02/2024', level: 'Level 2' },
    { serial: 4, complaint: 'A ticket was booked for a train that was later rerouted, requiring rebooking and manual processing.', date: '05/03/2024', level: 'Level 3' },
    { serial: 5, complaint: 'Refund for a Tatkal ticket was processed incorrectly, requiring detailed review and correction.', date: '18/03/2024', level: 'Level 3' },
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
    <div className="ticketing-issues-container">
      <h2 className="ticketing-issues-title">Ticketing Issues</h2>
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
          <h3 className="chart-title">Unsolved Complaints</h3>
          <table className="complaints-table">
            <thead>
              <tr>
                <th>Sr No.</th>
                <th>Complaint Registered</th>
                <th>Date of Registration</th>
                <th>Level of Complaint</th>
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
    </div>
  );
}

export default TicketingIssues;
