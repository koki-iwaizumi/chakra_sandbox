import "@testing-library/jest-dom";
import { render, screen, logRoles, getByText } from "@testing-library/react";
import { PullDownMenu } from "./PullDownMenu";
import userEvent from "@testing-library/user-event";

describe("PullDownMenu", () => {
  it("should foo", () => {
    const { asFragment } = render(<PullDownMenu text="menu" m={1} />);
    // expect(asFragment()).toMatchSnapshot();
  });

  it("should bar", () => {
    const { container } = render(<PullDownMenu text="menu" m={1} />);
    // logRoles(container);
    userEvent.click(screen.getByRole("button", { name: "menu:1" }));
    // logRoles(container);

    console.log(screen.getAllByRole("menuitem", { hidden: true }).length);
    // userEvent.click(screen.getByRole("menuitem"));
  });
});
