import React, { useState } from "react";
import "./Dashboard.css";

function XboxDash() {
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

  // Step 3: Handle input field changes and update the state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Step 4: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can perform further actions here, like sending the data to a server
  };

  return (
    <section className="dashSec">
      <div className="dashboard-container">
        <h1>Xbox Games</h1>
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
    </section>
  );
}

export default XboxDash;
