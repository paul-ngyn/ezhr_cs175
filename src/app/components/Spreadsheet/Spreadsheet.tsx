"use client";
import React from 'react';
import styles from './Spreadsheet.module.css';

const Spreadsheet: React.FC = () => {
  const rows = [
    { employee: 'John Doe', title: 'Lead Engineer', type: 'Windows', status: 'Active', software: 'MongoDB, Node', resource: 'How to optimize LLM (video)' },
    { employee: 'Jane Smith', title: 'Sales', type: 'Windows', status: 'Inactive', software: 'Excel', resource: 'Quarterly Report' },
    { employee: 'Mike Johnson', title: 'HR', type: 'Windows', status: 'Active', software: 'Rippling, Excel' , resource: 'Introductory forms' },
    // Add more rows as needed
  ];

  const totalRows = 19; // Total number of rows you want in the table
  const totalColumns = 6; // Total number of columns (Employees, Device Status, Software, Resources)

  const generateEmptyRows = () => {
    const emptyRows = [];
    for (let i = rows.length; i < totalRows; i++) {
      emptyRows.push(
        <tr key={i}>
          {Array.from({ length: totalColumns }).map((_, colIndex) => (
            <td key={colIndex}></td>
          ))}
        </tr>
      );
    }
    return emptyRows;
  };

  return (
    <div className={styles.spreadsheetContainer}>
      <table className={styles.spreadsheet}>
        <thead>
          <tr>
            <th>Employees</th>
            <th>Title</th>
            <th>Device Type</th>
            <th>Device Status</th>
            <th>Software</th>
            <th>Resources</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td>{row.employee}</td>
              <td>{row.title}</td>
              <td>{row.type}</td>
              <td>{row.status}</td>
              <td>{row.software}</td>
              <td>{row.resource}</td>
            </tr>
          ))}
          {generateEmptyRows()}
        </tbody>
      </table>
    </div>
  );
};

export default Spreadsheet;