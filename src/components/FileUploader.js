import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import TableFormat from './TableFormat';
import { db, collection, doc, writeBatch } from '../Firebase';


const FileUploader = () => {
    const [data, setData] = useState(null);
    const [output, setOutput]= useState(false);

    const handleUpload = (e) => {
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
    };

    const handleCancel = (e) => {
        e.preventDefault();
        setData(null);
    };

    const handleSubmit = async () => {
        const firestoreDoc = collection(db, 'company');
    const batch = writeBatch(db);
    
    data.forEach((company) => {
        const docRef = doc(firestoreDoc); 
        batch.set(docRef, company);
    });
    
    await batch.commit();
    setOutput(true);
    console.log("Successfully added companies");
    };
    

    return (
        <div>
            <h3>Select company file:</h3>
            <input type='file' onChange={handleUpload} />
            {data && (
                <div>
                    <h2>Your data:</h2>
                    <TableFormat data={data} />
                    <button type='button' onClick={handleCancel}>Cancel</button>
                    <button type='button' onClick={handleSubmit}>Upload to Database</button>
                    {output&& <p>"Successfully added companies"</p>}
                </div>
            )}
        </div>
    );
};

export default FileUploader;
