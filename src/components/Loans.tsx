import React from "react";

import { Loan } from "../models/loan";

function Loans({ loans }: { loans: Loan[] }) {
  return (
    <div>
      <ul>
        {loans.map((loan: Loan) => (
          <li key={loan.Loan_ID}>{loan.Loan_ID}</li>
        ))}
      </ul>
    </div>
  );
}

export default Loans;
