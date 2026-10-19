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
  localStorage.clear();
  fetchNews.mockClear();
  fetchComment.mockClear();
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

test("shows cached and sample stories when the live feed fails", async () => {
  localStorage.setItem("posts", JSON.stringify([stories[0]]));
  fetchNews.mockRejectedValueOnce(new Error("API unavailable"));
  render(
    <MemoryRouter initialEntries={["/posts"]}>
      <AllPosts />
    </MemoryRouter>
  );

  expect(await screen.findByText("Preview stories are showing")).toBeInTheDocument();
  expect(screen.getByText("13 stories")).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "A slower internet is a better internet" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: stories[0].post_title })).toBeInTheDocument();
});

test("opens a sample story directly without requesting live comments", async () => {
  fetchNews.mockRejectedValueOnce(new Error("API unavailable"));
  render(
    <MemoryRouter initialEntries={["/post/A_slower_internet_is_a_better_internet"]}>
      <Routes>
        <Route path="/post/:string" element={<PostPage />} />
      </Routes>
    </MemoryRouter>
  );

  expect(await screen.findByRole("heading", { name: "A slower internet is a better internet" })).toBeInTheDocument();
  expect(screen.getByText("This is a sample story. Comments are available on live stories.")).toBeInTheDocument();
  expect(fetchComment).not.toHaveBeenCalled();
});
