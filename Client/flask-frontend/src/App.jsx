import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios library

function App() {
  const [formData, setFormData] = useState({
    age: "",
    job: "",
    marital: "",
    education: "",
    default: "",
    balance: "",
    housing: "",
    loan: "",
    contact: "",
    day: "",
    month: "",
    duration: "",
    campaign: "",
    pdays: "",
    previous: "",
    poutcome: "",
  });
  
  const [message, setMessage] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post("http://localhost:8080/predict", formData);
      const data = response.data;
      console.log(data);
      setMessage([data]);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex flex-col justify-evenly">
      <form onSubmit={handleSubmit}>
        <div>
          <p>Enter Age</p>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        <div>
          <p>Enter Job</p>
          <input
            type="text"
            name="job"
            value={formData.job}
            onChange={handleChange}
          />
        </div>
        <div>
          <p>Enter Marital Status</p>
          <input
            type="text"
            name="marital"
            value={formData.marital}
            onChange={handleChange}
          />
        </div>
        <div>
          <p>Enter Education</p>
          <input
            type="text"
            name="education"
            value={formData.education}
            onChange={handleChange}
          />
        </div>
        <div>
          <p>Enter Deafult (Yes or No)</p>
          <input
            type="text"
            name="default"
            value={formData.default}
            onChange={handleChange}
          />
        </div>
        <div>
          <p>Enter Balance</p>
          <input
            type="number"
            name="balance"
            value={formData.balance}
            onChange={handleChange}
          />
        </div>
        <div>
          <p>Enter Housing (Yes or No)</p>
          <input
            type="text"
            name="housing"
            value={formData.housing}
            onChange={handleChange}
          />
        </div>
        <div>
          <p>Enter Loan (Yes or NO)</p>
          <input
            type="text"
            name="loan"
            value={formData.loan}
            onChange={handleChange}
          />
        </div>
        <div>
          <p>Enter Contact</p>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
          />
        </div>
        <div>
          <p>Enter Day</p>
          <input
            type="number"
            name="day"
            value={formData.day}
            onChange={handleChange}
          />
        </div>
        <div>
          <p>Enter Month</p>
          <input
            type="text"
            name="month"
            value={formData.month}
            onChange={handleChange}
          />
        </div>
        <div>
          <p>Enter Duration</p>
          <input
            type="number"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
          />
        </div>
        <div>
          <p>Enter Campaign</p>
          <input
            type="number"
            name="campaign"
            value={formData.campaign}
            onChange={handleChange}
          />
        </div>
        <div>
          <p>Enter Pdays</p>
          <input
            type="number"
            name="pdays"
            value={formData.pdays}
            onChange={handleChange}
          />
        </div>
        <div>
          <p>Enter Previous</p>
          <input
            type="number"
            name="previous"
            value={formData.previous}
            onChange={handleChange}
          />
        </div>
        <div>
          <p>Enter poutcome</p>
          <input
            type="text"
            name="poutcome"
            value={formData.poutcome}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Predict</button>
      </form>

      {/* Display prediction messages */}
      {message.length > 0 && (
        <div>
          {message.map((item, index) => (
            <div key={index}>
              <p>Prediction: {item.prediction}</p>
              {/* <p>Probability: {item.probability}</p> */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
