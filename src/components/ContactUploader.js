import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import TableFormat from './TableFormat';
import { db, collection, doc, writeBatch } from '../Firebase';


const ContactUploader = () => {
    const [data1, setData1] = useState(null);
    const [output1, setOutput1]= useState(false);

    const handleUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            const workbook = XLSX.read(event.target.result, { type: 'binary' });
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const sheetData = XLSX.utils.sheet_to_json(sheet);

            setData1(sheetData);
        };

        reader.readAsBinaryString(file);
    };

    const handleCancel = (e) => {
        e.preventDefault();
        setData1(null);
    };

    const handleSubmit = async () => {
        const firestoreDoc = collection(db, 'contact');
    const batch = writeBatch(db);
    
    data1.forEach((company) => {
        const docRef = doc(firestoreDoc); 
        batch.set(docRef, company);
    });
    
    await batch.commit();
    setOutput1(true);
    console.log("Successfully added companies");
    };
    

    return (
        <div>
            <h3>Select contact file:</h3>
            <input type='file' onChange={handleUpload} />
            {data1 && (
                <div>
                    <h2>Your data:</h2>
                    <TableFormat data={data1} />
                    <button type='button' onClick={handleCancel}>Cancel</button>
                    <button type='button' onClick={handleSubmit}>Upload to Database</button>
                    {output1 && <p>"Successfully added contacts"</p>}
                </div>
            )}
        </div>
    );
};

export default ContactUploader;
