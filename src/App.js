
import './App.css';
import ContactUploader from './components/ContactUploader';
import React, { useState, useEffect } from "react";

import FileUploader from './components/FileUploader';

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);
  
  return (
    <div className="App">
      {message}
      <FileUploader/>
      <ContactUploader/>
    </div>
  );
}

export default App;
