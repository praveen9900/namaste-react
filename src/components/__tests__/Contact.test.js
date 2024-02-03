import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

// test("Should load contact us ", () => {
//   render(<Contact />);

//   const heading = screen.getAllByRole("heading");

//   expect(heading).toBeInTheDocument();
// });

describe("Contact Us Page Test Case", () => {
  test("Should load button  ", () => {
    render(<Contact />);

    // const button = screen.getByText("Submit");

    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
  });

  test("Should load input  ", () => {
    render(<Contact />);

    // const button = screen.getByText("Submit");

    const inputBoxes = screen.getAllByRole("textbox");

    expect(inputBoxes.length).toBe(2);
  });
});
