// src/components/Postcard.test.jsx
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import PostCard from "./PostCard";

describe("PostCard", () => {
  it("le clic sur J’aime déclenche l’action TOGGLE_LIKE", () => {
    // ===== ARRANGE =====
    const dispatch = vi.fn();

    render(
      <MemoryRouter>
        <PostCard
          id={1}
          author="Alice"
          content="Hello"
          likes={2}
          liked={false}
          dispatch={dispatch}
          comments={[]}
        />
      </MemoryRouter>
    );

    // Vérification de l’affichage des likes
    expect(screen.getByText(/Likes : 2/i)).toBeInTheDocument();

    // ===== ACT =====
    const likeButton = screen.getByRole("button", { name: /j’aime/i });
    fireEvent.click(likeButton);

    // ===== ASSERT =====
    expect(dispatch).toHaveBeenCalledWith({
      type: "TOGGLE_LIKE",
      payload: { id: 1 },
    });
  });
});
