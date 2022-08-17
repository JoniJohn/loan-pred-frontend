import React from "react";
import { render, screen } from "@testing-library/react";

import Loans from "../components/Loans";
import { Loan } from "../models/loan";
import mockData from "../mockData";

describe("Fetch Loan Test", () => {
  test("should display loan ID LP001015 on the screen", () => {
    // arrange
    const loan: Loan = {
      Loan_ID: "LP001015",
      Gender: "Female",
      Married: "Yes",
      Dependents: "0",
      Education: "Graduate",
      Self_Employed: "No",
      ApplicantIncome: 5720,
      CoapplicantIncome: 0,
      LoanAmount: 110,
      Loan_Amount_Term: 360,
      Credit_History: NaN,
      Property_Area: "Rural",
    };

    const loans: Loan[] = [loan];

    // act
    render(<Loans loans={loans} />);

    // assert
    const linkElement = screen.getByText(/LP001015/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("should list 4 Loan IDs given a list of 4", () => {
    // arrange
    const loans: Loan[] = mockData;

    // act
    render(<Loans loans={loans} />);

    // assert
    loans.forEach((loan) =>
      expect(screen.getByText(`${loan.Loan_ID}`)).toBeInTheDocument(),
    );
  });
});
