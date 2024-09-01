import React, { useState } from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import './StationFacilities.css';

const StationFacilities = () => {
  // Mock data for solved and unsolved complaints
  const [solvedData] = useState({
    solved: 10, // Example solved complaints
    unsolved: 15, // Example unsolved complaints
  });

  // Mock data for histogram based on date range selection
  const [histogramData, setHistogramData] = useState({
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    data: [5, 7, 6, 8],
  });

  // Date range state
  const [dateRange, setDateRange] = useState({ from: '', to: '' });

  // Mock data for unsolved complaints table
  const complaintsData = [
    {
      description: 'The restroom soap dispenser is broken, requiring immediate fixing.',
      department: 'Station Facilities',
      level: 1,
    },
    {
      description: 'Restroom drainage is blocked, causing water to accumulate, needing extensive plumbing work.',
      department: 'Station Facilities',
      level: 2,
    },
    {
      description: 'The waiting room AC is not functioning, and multiple complaints have been made, requiring a technician’s visit.',
      department: 'Station Facilities',
      level: 2,
    },
    {
      description: 'Waiting room has severe mold growth on walls and ceilings, needing full treatment and repair.',
      department: 'Station Facilities',
      level: 3,
    },
    {
      description: 'Platform steps are broken and uneven, causing accidents, requiring complete rebuilding.',
      department: 'Station Facilities',
      level: 3,
    },
  ];

  // Handle date range change
  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setDateRange((prevState) => ({ ...prevState, [name]: value }));

    // Example: Update mock data based on selected date range
    if (name === 'from' && value) {
      setHistogramData({
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        data: [6, 8, 7, 9],
      });
    } else if (name === 'to' && value) {
      setHistogramData({
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        data: [4, 6, 5, 7],
      });
    }
  };

  return (
    <div className="station-facilities-container">
      <h2 className="station-facilities-title">Station Facilities</h2>
      <div className="filters">
        <label>
          From:
          <input
            type="date"
            name="from"
            value={dateRange.from}
            onChange={handleDateChange}
          />
        </label>
        <label>
          To:
          <input
            type="date"
            name="to"
            value={dateRange.to}
            onChange={handleDateChange}
          />
        </label>
      </div>
      <div className="charts-container">
        <div className="pie-chart">
          <Pie
            data={{
              labels: ['Solved', 'Unsolved'],
              datasets: [
                {
                  data: [solvedData.solved, solvedData.unsolved],
                  backgroundColor: ['#4caf50', '#f44336'],
                  hoverBackgroundColor: ['#66bb6a', '#e57373'],
                },
              ],
            }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
            }}
          />
        </div>
        <div className="bar-chart">
          <Bar
            data={{
              labels: histogramData.labels,
              datasets: [
                {
                  label: 'Complaints',
                  data: histogramData.data,
                  backgroundColor: '#42a5f5',
                  hoverBackgroundColor: '#64b5f6',
                },
              ],
            }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            }}
          />
        </div>
      </div>
      <div className="complaints-table">
        <h3>Unsolved Complaints</h3>
        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Department</th>
              <th>Level</th>
            </tr>
          </thead>
          <tbody>
            {complaintsData.map((complaint, index) => (
              <tr key={index}>
                <td>{complaint.description}</td>
                <td>{complaint.department}</td>
                <td>{complaint.level}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StationFacilities;
