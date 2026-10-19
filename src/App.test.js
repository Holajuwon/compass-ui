import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import AllPosts from "./Pages/AllPosts";
import PostPage from "./Pages/Post";
import { fetchComment, fetchNews } from "./components/api";

jest.mock("./components/api", () => ({
  fetchNews: jest.fn(),
  fetchComment: jest.fn(),
  createComment: jest.fn(),
}));

const stories = [
  { post_id: 1, post_title: "A study in thoughtful design", post_content: "Design can make everyday tools easier to use." },
  { post_id: 2, post_title: "Small business, wider horizons", post_content: "A new generation of founders is building in public." },
];

beforeEach(() => {
  fetchNews.mockResolvedValue(stories);
  fetchComment.mockResolvedValue({ comment: [], count: 0 });
});

test("renders the journal browse experience", async () => {
  render(
    <MemoryRouter>
      <AllPosts />
    </MemoryRouter>
  );

  expect(screen.getByRole("heading", { name: "Stories for curious minds." })).toBeInTheDocument();
  expect(screen.getByRole("searchbox", { name: "Search stories" })).toBeInTheDocument();
  expect(await screen.findByText("2 stories")).toBeInTheDocument();
});

test("filters stories from the query string", async () => {
  render(
    <MemoryRouter initialEntries={["/posts?q=design"]}>
      <AllPosts />
    </MemoryRouter>
  );

  expect(await screen.findByText("1 story")).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "A study in thoughtful design" })).toBeInTheDocument();
  expect(screen.queryByRole("heading", { name: "Small business, wider horizons" })).not.toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Design" })).toHaveAttribute("aria-pressed", "true");
});

test("loads a story from a cold URL once and shows comments", async () => {
  localStorage.removeItem("posts");
  render(
    <MemoryRouter initialEntries={["/post/A_study_in_thoughtful_design"]}>
      <Routes>
        <Route path="/post/:string" element={<PostPage />} />
      </Routes>
    </MemoryRouter>
  );

  expect(await screen.findByRole("heading", { name: "A study in thoughtful design" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Join the conversation" })).toBeInTheDocument();
  expect(fetchNews).toHaveBeenCalledTimes(1);
});
