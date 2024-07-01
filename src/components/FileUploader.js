
import React, { useState } from 'react'
import * as XLSX from 'xlsx';
import TableFormat from './TableFormat';

const FileUploader = () => {
    const [data, setData]= useState(null)
    const handleUpload= (e)=>{
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
        const workbook = XLSX.read(event.target.result, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const sheetData = XLSX.utils.sheet_to_json(sheet);

        setData(sheetData);
    };

    reader.readAsBinaryString(file);
    }

  return (
    <div>
        <input type='file' onChange={handleUpload}/>
        {data && (
        <div>
          <h2>Your data:</h2>
          {/* {console.log("data is here:"+data)} */}
          {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
          <TableFormat data={data}/>
        </div>
      )}
    </div>
  )
}

export default FileUploader