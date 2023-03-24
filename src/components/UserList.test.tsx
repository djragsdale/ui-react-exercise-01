import { act, render } from "@testing-library/react";

import { UserList } from "./UserList";

const testUsers = [
  {
    idUser: 1,
    profile: {
      firstName: "ABC",
      lastName: "DEF",
    },
    role: "Role1",
  },
  {
    idUser: 2,
    profile: {
      firstName: "GHI",
      lastName: "JKL",
    },
    role: "Role2",
  },
];

describe("UserList", () => {
  it("renders a spinner when isLoading", () => {
    const { queryByRole } = render(
      <UserList isLoading={true} users={testUsers} />
    );
    expect(queryByRole("progressbar")).toBeTruthy();
  });

  it("renders no spinner when not isLoading", () => {
    const { queryByRole } = render(
      <UserList isLoading={false} users={testUsers} />
    );
    expect(queryByRole("progressbar")).toBeFalsy();
  });

  it("renders each item in a table row", () => {
    const { container } = render(<UserList users={testUsers} />);
    const tableRows = container.querySelectorAll("table > tbody > tr");
    expect(tableRows[0].textContent).toMatch("1");
    expect(tableRows[0].textContent).toMatch("ABC");
    expect(tableRows[0].textContent).toMatch("DEF");
    expect(tableRows[0].textContent).toMatch("Role1");
    expect(tableRows[1].textContent).toMatch("2");
    expect(tableRows[1].textContent).toMatch("GHI");
    expect(tableRows[1].textContent).toMatch("JKL");
    expect(tableRows[1].textContent).toMatch("Role2");
  });

  it("should open dialog when edit button was clicked and close dialog when the user saves the role change", () => {
    const onEditUser = jest.fn();
    const { container, queryByRole } = render(
      <UserList users={testUsers} onEditUser={onEditUser} />
    );

    const editButtons = container.querySelectorAll("button");
    act(() => {
      editButtons[0].click();
    });

    let roleSelector = queryByRole("edit-dialog-role-selector");
    expect(roleSelector).toBeTruthy();

    const submitButton = queryByRole("edit-dialog-submit-button");
    expect(submitButton).toBeTruthy();

    act(() => {
      submitButton?.click();
    });

    roleSelector = queryByRole("edit-dialog-role-selector");
    expect(roleSelector).toBeTruthy();
  });
});
