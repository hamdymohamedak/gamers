import React from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";

function mainDash() {
  let handleValue = (event) => {
    let eventValue = event.target.value;
    if (eventValue === "Xbox") {
      alert("XBOX");
    }
  };
  return (
    <section className="dashSec">
      <div className="dashboard-container">
        <h1 className="title">Dashboard</h1>
        <form className="dashForm">
          <div className="input-grid">
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="input-field"
              />
            </div>
            <div className="input-group">
              <label htmlFor="size">Size</label>
              <input
                type="text"
                id="size"
                name="size"
                className="input-field"
              />
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="downloadLink">Download Link</label>
            <input
              type="text"
              id="downloadLink"
              name="downloadLink"
              className="input-field"
            />
          </div>
          <div className="input-group">
            <label htmlFor="imgURL">Image URL</label>
            <input
              type="text"
              id="imgURL"
              name="imgURL"
              className="input-field"
            />
          </div>
          <div className="input-group">
            <label htmlFor="uploadImage">Upload Image</label>
            <input
              type="file"
              id="uploadImage"
              name="uploadImage"
              className="file-input"
            />
          </div>

          <div className="input-grid">
            <div className="input-group">
              <label htmlFor="OS">Operating System</label>
              <input type="text" id="OS" name="OS" className="input-field" />
            </div>
            <div className="input-group">
              <label htmlFor="Processor">Processor</label>
              <input
                type="text"
                id="Processor"
                name="Processor"
                className="input-field"
              />
            </div>
          </div>

          <div className="input-grid">
            <div className="input-group">
              <label htmlFor="Memory">Memory</label>
              <input
                type="text"
                id="Memory"
                name="Memory"
                className="input-field"
              />
            </div>
            <div className="input-group">
              <label htmlFor="Graphics">Graphics</label>
              <input
                type="text"
                id="Graphics"
                name="Graphics"
                className="input-field"
              />
            </div>
          </div>

          <div className="input-grid">
            <div className="input-group">
              <label htmlFor="DirectX">DirectX</label>
              <input
                type="text"
                id="DirectX"
                name="DirectX"
                className="input-field"
              />
            </div>
            <div className="input-group">
              <label htmlFor="HardDrive">Hard Drive</label>
              <input
                type="text"
                id="HardDrive"
                name="HardDrive"
                className="input-field"
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="platform">Platform</label>
            <select
              onChange={handleValue}
              name="platform"
              id="platform"
              className="select-field"
            >
              <option value="Android">Android</option>
              <option value="PlayStation">PlayStation</option>
              <option value="Xbox">Xbox</option>
              <option value="iPhone">iPhone</option>
            </select>
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default mainDash;
