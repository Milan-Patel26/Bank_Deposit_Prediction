import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

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
      const response = await axios.post(
        "http://localhost:8080/predict",
        formData
      );
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
    <>
      <div className="flex flex-col flex-wrap justify-between items-center">
        <form onSubmit={handleSubmit}>
          <div className="my-4">
            <p className="mb-2">Enter Age</p>
            <input
              type="text"
              name="age"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-7 text-center ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={formData.age}
              onChange={handleChange}
            />
          </div>
          <div className="my-4">
            <p className="mb-2">Enter Job</p>
            <input
              type="text"
              name="job"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-7 text-center ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={formData.job}
              onChange={handleChange}
            />
          </div>
          <div className="my-4">
            <p className="mb-2">Enter Marital Status</p>
            <input
              type="text"
              name="marital"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-7 text-center ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={formData.marital}
              onChange={handleChange}
            />
          </div>
          <div className="my-4">
            <p className="mb-2">Enter Education</p>
            <input
              type="text"
              name="education"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-7 text-center ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={formData.education}
              onChange={handleChange}
            />
          </div>
          <div className="my-4">
            <p className="mb-2">Enter Deafult (Yes or No)</p>
            <input
              type="text"
              name="default"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-7 text-center ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={formData.default}
              onChange={handleChange}
            />
          </div>
          <div className="my-4">
            <p className="mb-2">Enter Balance</p>
            <input
              type="text"
              name="balance"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-7 text-center ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={formData.balance}
              onChange={handleChange}
            />
          </div>
          <div className="my-4">
            <p className="mb-2">Enter Housing (Yes or No)</p>
            <input
              type="text"
              name="housing"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-7 text-center ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={formData.housing}
              onChange={handleChange}
            />
          </div>
          <div className="my-4">
            <p className="mb-2">Enter Loan (Yes or NO)</p>
            <input
              type="text"
              name="loan"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-7 text-center ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={formData.loan}
              onChange={handleChange}
            />
          </div>
          <div className="my-4">
            <p className="mb-2">Enter Contact</p>
            <input
              type="text"
              name="contact"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-7 text-center ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={formData.contact}
              onChange={handleChange}
            />
          </div>
          <div className="my-4">
            <p className="mb-2">Enter Day</p>
            <input
              type="text"
              name="day"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-7 text-center ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={formData.day}
              onChange={handleChange}
            />
          </div>
          <div className="my-4">
            <p className="mb-2">Enter Month</p>
            <input
              type="text"
              name="month"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-7 text-center ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={formData.month}
              onChange={handleChange}
            />
          </div>
          <div className="my-4">
            <p className="mb-2">Enter Duration</p>
            <input
              type="text"
              name="duration"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-7 text-center ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={formData.duration}
              onChange={handleChange}
            />
          </div>
          <div className="my-4">
            <p className="mb-2">Enter Campaign</p>
            <input
              type="text"
              name="campaign"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-7 text-center ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={formData.campaign}
              onChange={handleChange}
            />
          </div>
          <div className="my-4">
            <p className="mb-2">Enter Pdays</p>
            <input
              type="text"
              name="pdays"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-7 text-center ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={formData.pdays}
              onChange={handleChange}
            />
          </div>
          <div className="my-4">
            <p className="mb-2">Enter Previous</p>
            <input
              type="text"
              name="previous"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-7 text-center ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={formData.previous}
              onChange={handleChange}
            />
          </div>
          <div className="my-4">
            <p className="mb-2">Enter poutcome</p>
            <input
              type="text"
              name="poutcome"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-7 text-center ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={formData.poutcome}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Predict</button>
        </form>

        {/* Display prediction messages */}
        {message.length > 0 && (
          <div className="my-4">
            {message.map((item, index) => (
              <div key={index}>
                <p>Prediction: {item.prediction}</p>
                {/* <p>Probability: {item.probability}</p> */}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
