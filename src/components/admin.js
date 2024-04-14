import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Admin = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v0/jobpost/661b90611c77484cdb28bd71');
        setApplications(response.data.applicants);
        console.log(response.data.applicants)
        console.log(response.data.applicants)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

 
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Applications</h1>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Username</th>
            <th scope="col">Score</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((application, index) => (
            <tr key={index}>
              <td>{application.username}</td>
              <td>{application.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;

