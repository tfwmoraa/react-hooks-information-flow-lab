import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Filter from "../components/Filter";

test("renders a select element with the correct options", () => {
  const mockOnCategoryChange = jest.fn();
  render(<Filter onCategoryChange={mockOnCategoryChange} />);

  const selectElement = screen.getByRole("combobox");
  expect(selectElement).toBeInTheDocument();

  const options = screen.getAllByRole("option");
  expect(options).toHaveLength(4);
  expect(options[0]).toHaveValue("All");
  expect(options[1]).toHaveValue("Produce");
  expect(options[2]).toHaveValue("Dairy");
  expect(options[3]).toHaveValue("Dessert");
});

test("calls onCategoryChange when the select value changes", () => {
  const mockOnCategoryChange = jest.fn();
  render(<Filter onCategoryChange={mockOnCategoryChange} />);

  const selectElement = screen.getByRole("combobox");
  fireEvent.change(selectElement, { target: { value: "Dairy" } });

  expect(mockOnCategoryChange).toHaveBeenCalledWith("Dairy");
});
