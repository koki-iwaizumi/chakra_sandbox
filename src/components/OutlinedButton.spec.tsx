import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { OutlinedButton } from "./OutlinedButton";

describe("OutlinedButton", () => {
  it("should foo", () => {
    const { asFragment } = render(<OutlinedButton text="save" m={1} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
