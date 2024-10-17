import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Chart } from 'react-chartjs-2';

const Dashboard = () => {
    const [equipmentData, setEquipmentData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await axios.get('http://localhost:8080/api/equipment/{equipmentId}');
        setEquipmentData(response.data);
    };

    const checkSafetyCompliance = () => {
        const hasIssues = equipmentData.some(data => data.temperature > 80 || data.pressure > 150);
        if (hasIssues) {
            alert('Safety threshold crossed!');
        }
    };
    
    useEffect(() => {
        checkSafetyCompliance();
    }, [equipmentData]);
    

  return (
    <div>
      <h2>Real Time Monitoring Dashboard</h2>
      <Chart
      data={{
        labels: equipmentData.map(data => data.timestamp),
        datasets: [
            {
                label: 'Temprature',
                data: equipmentData.map(data => data.temprature),
            },
            {
                label: 'Pressure',
                data: equipmentData.map(data => data.pressure),
            }
        ]
      }}
      />
    </div>
  )
}

export default Dashboard