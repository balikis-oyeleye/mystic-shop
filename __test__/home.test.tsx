import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("home page", () => {
  it("should have docs text", () => {
    render(<Home />);
    const myElem = screen.getByText("Docs");

    expect(myElem).toBeInTheDocument();
  });

  it("should have docs text", () => {
    render(<Home />);
    const myElem = screen.getByText("Templates");

    expect(myElem).toBeInTheDocument();
  });
});
