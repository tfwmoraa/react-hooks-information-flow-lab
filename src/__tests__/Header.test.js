import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../components/Header";

test("renders the Shopster heading", () => {
  const mockOnDarkModeClick = jest.fn();
  render(<Header onDarkModeClick={mockOnDarkModeClick} isDarkMode={false} />);

  expect(screen.getByText("Shopster")).toBeInTheDocument();
});

test("renders 'Light Mode' button when isDarkMode is false", () => {
  const mockOnDarkModeClick = jest.fn();
  render(<Header onDarkModeClick={mockOnDarkModeClick} isDarkMode={false} />);

  expect(screen.getByText("Light Mode")).toBeInTheDocument();
});

test("renders 'Dark Mode' button when isDarkMode is true", () => {
  const mockOnDarkModeClick = jest.fn();
  render(<Header onDarkModeClick={mockOnDarkModeClick} isDarkMode={true} />);

  expect(screen.getByText("Dark Mode")).toBeInTheDocument();
});

test("calls onDarkModeClick when the button is clicked", () => {
  const mockOnDarkModeClick = jest.fn();
  render(<Header onDarkModeClick={mockOnDarkModeClick} isDarkMode={false} />);

  const button = screen.getByText("Light Mode");
  fireEvent.click(button);

  expect(mockOnDarkModeClick).toHaveBeenCalledTimes(1);
});
