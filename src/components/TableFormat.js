import React from 'react'

const TableFormat = ({data}) => {

  const headers = Object.keys(data[0]);
//   console.log("keys: "+ headers)
  const rows = data.map(item => Object.values(item));
//   console.log("values: "+ rows)

  return (
    <table className='datatable'>
      <thead>
        <tr>
          {headers.map(header => <th key={header}>{header}</th>)}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            {row.map((cell, index) => <td key={index}>{cell}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableFormat