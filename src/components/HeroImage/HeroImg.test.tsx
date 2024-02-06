import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import HeroImage from "./HeroImg";

describe("HeroImage", () => {
  it("renders the title and subtitle", () => {
    const { getByText } = render(
      <HeroImage
        imageUrl="test.jpg"
        title="Test Title"
        subtitle="Test Subtitle"
      />
    );
    expect(getByText("Test Title")).toBeVisible();
    expect(getByText("Test Subtitle")).toBeVisible();
  });

  it("changes background to dark grey when disabled", () => {
    const { getByText } = render(
      <HeroImage
        imageUrl="test.jpg"
        title="Test Title"
        subtitle="Test Subtitle"
        disabled
      />
    );
    const heroContainer = getByText("Test Title").parentElement;
    expect(heroContainer).toHaveStyle("background-color: darkgrey");
  });
});
