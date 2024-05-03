import React from 'react';
import './style.css'; 

const UniversalTable = ({ data, headers, columnTypes }) => {
 return (
    <table width='100%'>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {headers.map((header, colIndex) => {
              const type = columnTypes[colIndex];
              switch (type) {
                case 'twoLines':
                 return (
                    <td key={colIndex}>
                      <div>{row[header].line1}</div>
                      <div>{row[header].line2}</div>
                    </td>
                 );
                case 'status':
                 return (
                    <td key={colIndex} className={`status ${row[header].status}`}>
                      {row[header].status}
                    </td>
                 );
                default:
                 return <td key={colIndex}>{row[header]}</td>;
              }
            })}
          </tr>
        ))}
      </tbody>
    </table>
 );
};

export default UniversalTable;