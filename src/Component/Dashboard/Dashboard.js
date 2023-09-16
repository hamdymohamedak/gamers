import React, { useState } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import { sql } from "@vercel/postgres";

function Dashboard() {
  try {
    sql`
      CREATE TABLE IF NOT EXISTS games (
        id SERIAL PRIMARY KEY,
        name TEXT,
        size TEXT,
        downloadlink TEXT,
        imgurl TEXT,
        os TEXT,
        processor TEXT,
        memory TEXT,
        graphics TEXT,
        directx TEXT,
        harddrive TEXT
      );
    `;
  } catch (error) {
    console.error("Error inserting data into PostgreSQL:", error);
  }
  // Step 2: Create state variables for form data
  const [formData, setFormData] = useState({
    name: "",
    size: "",
    downloadLink: "",
    imgURL: "",
    OS: "",
    Processor: "",
    Memory: "",
    Graphics: "",
    DirectX: "",
    "Hard Drive": "",
  });
  const [rows, setRows] = useState([]);
  // Step 3: Handle input field changes and update the state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Step 4: Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    let HardDrive = formData["Hard Drive"];
    try {
      const {
        name,
        size,
        downloadLink,
        imgURL,
        OS,
        Processor,
        Memory,
        Graphics,
        DirectX,
      } = formData;
      const result =
        await sql`INSERT INTO games (name, size, downloadlink, imgurl, os, processor, memory, graphics, directx, harddrive) VALUES (${name}, ${size}, ${downloadLink}, ${imgURL}, ${OS}, ${Processor}, ${Memory}, ${Graphics}, ${DirectX}, ${HardDrive}) RETURNING *`;
      console.log("Inserted row:", result);
      // Optionally, you can clear the form or perform other actions here
    } catch (error) {
      console.error("Error inserting data into PostgreSQL:", error);
    }
  };

  return (
    <section className="dashSec">
      <div className="dashboard-container">
        <h1>StoresGames</h1>
        <form className="dashForm" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="size">Size</label>
            <input
              type="text"
              id="size"
              name="size"
              value={formData.size}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="downloadLink">Download Link</label>
            <input
              type="text"
              id="downloadLink"
              name="downloadLink"
              value={formData.downloadLink}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="imgURL">Image URL</label>
            <input
              type="text"
              id="imgURL"
              name="imgURL"
              value={formData.imgURL}
              onChange={handleInputChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="imgURL">OS</label>
            <input
              type="text"
              id="OS"
              name="OS"
              value={formData.OS}
              onChange={handleInputChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="imgURL">Processor</label>
            <input
              type="text"
              id="Processor"
              name="Processor"
              value={formData.Processor}
              onChange={handleInputChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="imgURL">Memory</label>
            <input
              type="text"
              id="Memory"
              name="Memory"
              value={formData.Memory}
              onChange={handleInputChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="imgURL">Graphics</label>
            <input
              type="text"
              id="Graphics"
              name="Graphics"
              value={formData.Graphics}
              onChange={handleInputChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="imgURL">DirectX</label>
            <input
              type="text"
              id="DirectX"
              name="DirectX"
              value={formData.DirectX}
              onChange={handleInputChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="imgURL">Hard Drive</label>
            <input
              type="text"
              id="Hard Drive"
              name="Hard Drive"
              value={formData["Hard Drive"]}
              onChange={handleInputChange}
            />
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
      <div className="others">
        <Link to={"/AndroidDash"}>Android</Link>
        <Link to={"/PlayStationDash"}>PlayStation</Link>
        <Link to={"/Xbox"}>XBox</Link>
      </div>
    </section>
  );
}

export default Dashboard;
