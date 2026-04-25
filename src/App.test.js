import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("renders main navigation links", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute("href", "/");
  expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute("href", "/contact");

  const gamesLinks = screen.getAllByRole("link", { name: /games/i });
  expect(gamesLinks.some((link) => link.getAttribute("href") === "/games")).toBe(true);
});
