import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import Loans from "./components/Loans";
import { Loan } from "./models/loan";

function App() {
  const [loans, setLoans] = useState<Loan[]>([]);

  useEffect(() => {
    async function fetchLoans() {
      const result = await axios
        .get("https://loan-pred-joni.herokuapp.com/test/data")
        .then((res) => JSON.parse(res.data.replace(/\bNaN\b/g, 0)));

      setLoans(result);
    }

    fetchLoans();
  });

  return (
    <div className="App">
      <h1>Fidelis Loans</h1>
      <Loans loans={loans} />
    </div>
  );
}

export default App;
