import './App.css';
import axios from "axios";

import { useState, useEffect } from "react";
import PhonesList from "./components/PhonesList"
import PhoneDetails from "./components/PhoneDetails"


function App() {
  const [phones, setPhones] = useState([]);
  const [phone, setPhone] = useState([])
  const [loading, setLoading] = useState(true);

  const getAllPhones = async () => {
   
    try {
      const response = await axios.get("http://localhost:5005/phones");
      setPhones(response.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const getPhoneDetails = async (id) => {
   
    try {
      const response = await axios.get(`http://localhost:5005/phones/${id}`);
      setPhone(response.data);

    } catch (err) {
      console.log(err);
    }
  };


  useEffect(() => {
    getAllPhones();
  }, []);

  return (
    <div className="App">
      <h1>PHONES</h1>
      <div>
        
      </div>
 
    </div>
  );
}

export default App;
