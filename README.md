# UI React Exercise 01

## Introduction

Welcome, candidate! This exercise is a simple incomplete and broken application that can be used to showcase basic React and UI skills. The specific technology used here is not necessarily indicative of what is used in a specific project, but is a helpful baseline to see how a candidate can work with the following technologies:

- React
- TypeScript
- Jest
- Blueprint (requires no previous experience)

Feel free to expand upon the hooks and components provided with the application in order to complete the tasks.

### Running the app

`npm run dev`

### Running the tests

`npm test`

or to watch them

`npm test -- --watch`

## Instructions

### Fix the `UserList` component

The file `src/components/UserList.tsx` contains a functional component that is wildly incomplete. The adjacent tests clarify the expected presentation and functional requirements.

### Fix the `useUsers` tests

The file `src/hooks/useUsers.ts` contains a hook meant to simulate acquiring and mutating remote persisted data. The failing tests should describe the functionality that is expected. Update the hook and the test so that it accurately verifies the functionality described in the test.

### Add an `EditUserDialog` component

Once the `UserList` component passes the tests, it should have the necessary functionality for you to create a new `EditUserDialog` component. This component is a bit open-ended, however I recommended using the `Dialog` component from Blueprint (linked below). The `src/components/EditUserDialog.md` file is a representation of a Jira ticket for the component. Do this however you prefer.

### Submit the changes

Once all tests pass, the application builds, and all acceptance criteria are met, please submit the application. There are 3 ways to submit the changes:

1. Open a pull request against the source repo (which can be found in the `package.json`), based on your fork. At the top of the repository, there's a Fork button. Fork the repository, clone it locally, and push commits up to your forked repository.
2. Open a pull request against your own repository. Preferably this would be a fork of my repository, but you can optionally paste the files into your own repository and commit them. If you choose this method, _PLEASE_ commit the original files before making any changes. This allows us to more easily do a diff of the changes to examine your work.
3. Create a `.zip` of the application with your changes applied. If you choose this method, _PLEASE_ delete the `node_modules` directory before creating the `.zip` file. Any dependency changes made will show in the `package.json` and `package-lock.json` files.

## Helpful links

- https://blueprintjs.com/docs/#core - Browse the Blueprint docs to learn how the component library works.
- https://jestjs.io/docs/26.x/expect - Jest's basic assertion API for testing
- https://testing-library.com/docs/react-testing-library/api - Testing Library's utilities designed for React
