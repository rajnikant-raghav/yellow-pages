import React, { useState } from "react";

const Retrive = () => {
  const [query, setQuery] = useState();
  const [data, setData] = useState({});
  const handleSubmit = () => {
    const userData = JSON.parse(localStorage.getItem(query));
    setData(userData);
  };
  return (
    <div className="retrive_container">
      <h2>Retriving Data</h2>
      <input
        type="text"
        name="query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
       placeholder="Enter Aadhar No."/>
      <button onClick={() => handleSubmit()}>Search</button>
      {
              data ? (
                  <div className="items">
                      {
                         Object.keys(data).map(key=>(
                             <li>{key} : {data[key]}</li>
                         )) 
                      }
              </div>
              ):(<h1>No Data Found</h1>)
          }

    </div>
  );
};

export default Retrive;
