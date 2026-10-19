import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AllPosts from "./Pages/AllPosts";

test("renders the latest posts page", () => {
  const { getByText } = render(
    <MemoryRouter>
      <AllPosts />
    </MemoryRouter>
  );
  const element = getByText(/Latest Post/i);
  expect(element).toBeInTheDocument();
});
