import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import PostCard from "./PostCard";

describe("PostCard", () => {
  it("le clic sur Supprimer déclenche l’action DELETE_POST", () => {
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

    const deleteButton = screen.getByRole("button", { name: /supprimer/i });
    fireEvent.click(deleteButton);

    expect(dispatch).toHaveBeenCalledWith({
      type: "DELETE_POST",
      payload: { id: 1 }
    });
  });
});
