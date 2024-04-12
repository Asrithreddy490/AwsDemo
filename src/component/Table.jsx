import React, { useState, useEffect } from 'react';

import TableService from '../service/TableService';


const Table = () => {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    TableService.getAllData().then((Response) => {
      setData(Response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);
  

  return (
    <div>
      <table className="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Joined On</th>
          <th>Last Activity</th>
          <th>Channels</th>
          <th>Account</th>
          <th>Web Page</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.joinedOn}</td>
            <td>{item.lastActivity}</td>
            <td>{item.channels}</td>
            <td>{item.account}</td>
            <td>{item.webPage}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

export default Table
