import React, { useState } from "react";
import "../css/asidebar.css";

const AsideBar = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="asidebar-container">
      <section className="sidebar">
        <ul className="filter-options">
          {[
            { label: "Ideal For", details: "Details about ideal for" },
            { label: "Occasion", details: "Details about occasion" },
            { label: "Work", details: "Details about work" },
            { label: "Fabric", details: "Details about fabric" },
            { label: "Segment", details: "Details about segment" },
            { label: "Suitable For", details: "Details about suitable for" },
            { label: "Raw Material", details: "Details about raw material" },
            { label: "Pattern", details: "Details about pattern" },
          ].map((item, index) => (
            <li key={index} className="filter-item">
              <div className="filter-heading" onClick={() => toggleSection(item.label)}>
                {item.label}
                
               
                <span className={`dropdown-symbol ${openSection === item.label ? "open" : ""}`}>
                  ▼
                </span>
                
              </div>
             <p style={{marginLeft:"-130px"}}>All</p>
              {openSection === item.label && <small className="filter-details" style={{marginLeft:"-35px"}}>{item.details}</small>}
              <hr />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default AsideBar;
