/**
 * @jest-environment jsdom
 */
import React from "react";
import { render } from "@testing-library/react";

describe("TestComponent", () => {
  it("should work", () => {
    jest.isolateModules(() => {
      const TestComponent = require("./TestComponent").default;
      const { asFragment } = render(<TestComponent />);
      expect(asFragment()).toBeTruthy();
    })
  });
});
