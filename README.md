As a developer, the primary goal is to make a software that works. To ensure it, we may rely on testing.

 - Manual Testing
 - Automated Testing
## Manual Testing
 - An indevidual will open the software and go through every feature, testing each as a user.
 - Every tima a new feature is released, the same process is repeated. And in most of the cases whole application is again required to be tested, to ensure everything works fine

**Drawbacks** --->

 - Time consuming
 - Risk of human error.

## Automated Testing

 - Automated test are programs that automate the task of testing.
 - It is code a which is written to test the application's code.
 
 **Drawbacks** --->
 
 - Additional effort is required to write automated tests.

**Benifits** --->

 - Far less time consuming
 - Reliable, not error prone.
 - Easy to pin-point the bug.

## Jest v/s React Testing Library (RTL)
### Jest

 - Jest is a javascript testing framework.
 - Jest is a test runner that finds tests, runs the tests, determines weather the tests passed or failed and reports it back in human readable manner.

### RTL

 - It is a javascript testing utility that provides virtual DOM for tsting react components.
 - RTL provides a virtual DOM which we can use to interact with, and verify the behaviour of react component.
 - The core library behind RTL is called DOM testing library and RTL is simply a wrapper around this core library to test react application in easier way.
 - The DOM testing library (core library) is a family of packages, which helps test UI components.

## Types of Automated Tests

 - Unit Test
 - Integration Test
 - End To End Test (E2E)

### Unit Test

 - It focus on the individual building block of the component, such as a class, a function or a component.
 - Each building block is tested in isolation, independent of other units.
 - Any dependency required to perform the test is mocked (assumed).
 - Run in short amount of time, and good for pin-pointing the bug.
 - Relatively easier to write and maintain.

### Integration Test

 - Focus is on testing a combination of units and ensuring they work together.
 - Take longer time then unit test.

### E2E Test

 - Focus is on testing the entire application flow and ensure it works from start to finish.
 - Requires real UI, backend, database etc.
 - Take the longest time as it cover most amount of code.

> RTL provides a balance of Unit testing and E2E testing.

## Running tests in React (*With create-react-app*)

the script `"test": "react-scripts test"` in package.json calls jest internally, which finds all the tests (*abc.test.js / abc.test.ts*) and runs them.

When we execute `npm run test` in terminal. A watch mode is opened with some options (`a, f, q, p, t, Enter`) . If we choose `a` the test starts.

> Watch mode : it is a special feture provided by jest. The watch mode watched the changed and not commited files (in git) and runs test only for them. If we commit all the files, then watch mode will state "*No test found related to files changed since last commmit*". This feture helps to save time by neglecting already passed test.

A sample test is given with create-react-app in file *App.test.ts*

    import React from 'react';
    import { render, screen } from '@testing-library/react';
    import App from './App';
    
    test('renders learn react link', () => {
      render(<App />);
      const linkElement = screen.getByText(/learn react/i);
      expect(linkElement).toBeInTheDocument();
    });

### test(name, function, timeout)

 - name :- Nmae of test
 - function :-Function to be called when test is executed
 - timeout :- (optional) delay timer, before ececution function.

### render(`<Component/>`)

 - It is used to create a virtual DOM for the given component

### screen

 - It is used to query the virtual DOM.
 - It has some methods (*like getByText(), etc.*) which are used to find elements of texts on the virtual DOM.

### expect()

 - Performs comparision between required result and result populated in virtual DOM.

> Note : render and screen is obtained from react-testing-library. Whereas test and expect is obtained from jest and is globally available.

## Writing the first test

***greet.tsx*** ----

    export const Greet = () => {
      return <div>Hello</div>;
    };
***greet.test.tsx*** ----

    import { render, screen } from "@testing-library/react";
    import { Greet } from "./greet";
    
    test("Greet renders correctly", () => {
      render(<Greet />);
      let textEle = screen.getByText("Hello");
      expect(textEle).toBeInTheDocument();
    });

### File name convention for test files.
We can choose any of the following file name convention for a test file, so that **Jest** will recognise it as a test file to run.

 - Files with `.test.js` or `.test.tsx` suffix
 - Files with `.spec.js` or `.spec.tsx` suffix
 - Files with `.js` or `.tsx` suffix in `__tests__` folders.

## Test Driven Development (TDD)
TDD is a software development process where we write test before writing the software code.  Also known as ***red-green*** process.
Once the test is written we can write the software code to ensure the test passes.

***Steps of TDD process*** ----

 1. Create test that verify the functionality of a specific feature.
 2. Write software code that will run the test successfully.
 3. Re-factor the code for optimisation, while ensuring the test still passes.

TDD example -------
***greet.test.tsx*** ---- Writing test

    // Greet should render the text "Hello" and if a name is passed into the component it should render "Hello <name>".
    
    import { render, screen } from "@testing-library/react";
    import { Greet } from "./greet";
    
    test("Greet renders correctly TDD", () => {
      render(<Greet />);
      let textEle = screen.getByText("Hello");
      expect(textEle).toBeInTheDocument();
    });
    
    test("Greet renders correctly TDD with name", () => {
      render(<Greet name="Vikas" />);
      let textEle = screen.getByText("Hello Vikas");
      expect(textEle).toBeInTheDocument();
    });

***greet.test.tsx*** ---- Writing software code

    // types ---
    type greetProps = {
      name?: string;
    };
    
    // component ---
    export const Greet = (props: greetProps) => {
      return <div>Hello {props.name}</div>;
    };

## Filtering the test to be run
In watch mode we get some options `a, f, q, p, t, Enter` stating which tests to be run. Depending on the requirement we can choose any one out of these. And jest will filter out and run the choosen test only.

### test.only()
This can be used to if we want to focus only on selected tests **in a file**. Jest will skip all the tests and runs only that tests which is written with `test.only()` syntex.

    test("Greet renders correctly TDD", () => {
      render(<Greet />);
      let textEle = screen.getByText("Hello");
      expect(textEle).toBeInTheDocument();
    });
    
    test.only("Greet renders correctly TDD with name", () => {
      render(<Greet name="Vikas" />);
      let textEle = screen.getByText("Hello Vikas");
      expect(textEle).toBeInTheDocument();
    });
*only the 2nd one will run and 1st will be skipped*


### test.skip()
This can be used to if we want to skip the selected tests **in a file**. Jest will not run the  tests written with `test.skip()` syntex.

    test.skip("Greet renders correctly TDD", () => {
      render(<Greet />);
      let textEle = screen.getByText("Hello");
      expect(textEle).toBeInTheDocument();
    });
    
    test("Greet renders correctly TDD with name", () => {
      render(<Greet name="Vikas" />);
      let textEle = screen.getByText("Hello Vikas");
      expect(textEle).toBeInTheDocument();
    });
*only the 2nd one will run and 1st will be skipped.*

## Grouping tests
Grouping can be helpful in grouping the tests releted to a common feature. We can use `describe(<group_name>, <fn_containing_tests)` for grouping.

    describe("Greet", () => {
      test("Greet renders correctly TDD", () => {
        render(<Greet />);
        let textEle = screen.getByText("Hello");
        expect(textEle).toBeInTheDocument();
      });
      
      test("Greet renders correctly TDD with name", () => {
        render(<Greet name="Vikas" />);
        let textEle = screen.getByText("Hello Vikas");
        expect(textEle).toBeInTheDocument();
      });  
    })

We can also use `skip()` and `only()` with `descripe()` as `describe.skip(<name>, <fn>)` or `describe.only(<name>, <fn>)`. This will help us to achieve similar funtionality but on group level.

### nested `describe()`
We can do nesting in describe. An can write multiple describe methods in a single file

    describe("Greet", () => {
      test("renders correctly", () => {
        render(<Greet />);
        let textEle = screen.getByText("Hello");
        expect(textEle).toBeInTheDocument();
      });
    
      test("renders correctly with name", () => {
        render(<Greet name="Vikas" />);
        let textEle = screen.getByText("Hello Vikas");
        expect(textEle).toBeInTheDocument();
      });
    });
    
    describe("Greet 2", () => {
      test("renders correctly", () => {
        render(<Greet />);
        let textEle = screen.getByText("Hello");
        expect(textEle).toBeInTheDocument();
      });
    
      describe("nested greet", () => {
        test("renders correctly with name", () => {
          render(<Greet name="Vikas" />);
          let textEle = screen.getByText("Hello Vikas");
          expect(textEle).toBeInTheDocument();
        });
      });
    });

## Test result

    Test Suites: 1 passed, 1 total
    Tests:       4 passed, 4 total
    Snapshots:   0 total
    Time:        3.394 s

here **Test Suites** refers to number of files. And **Tests** refers to number of tests.

## `it()` | `fit()` | `xit()`
These methods can also be used in place of `test()` method. This will produce the similar funtionality.
|  |  |
|--|--|
|  `it()`| `test()` |
|  `fit()`| `test.only()` |
|  `xit()`| `test.skip()` |

## Code Coverage
A report that can help us understad that how much of the software code is tested.

 - Statement coverage :- How many of the statements in the software code have been execued.
 - Branch Coverage :- How many of the branches of the control structure (if statements for instance) have been executed.
 - Function Coverage :- How many of the functions defined, have been called.
 - Line Coverage :- How many lines of the source code have been tested.

To get test coverage, we have to run test command with a coverage flag. 
Ex. `npm run test -- --coverage` || `yarn test -- coverage`
But, obtaining coverage generally takes a bit loger time. so, it is better if we make a saperate script for it , to run only when needed.
So, in package.json.

    "scripts": {
        ...,
        "coverage": "npm test -- --coverage"
      },
Now, when executing th command `npm run coverage` in terminal, will give us the test coverage report of all uncommitted files.
We can use `--watchAll` flag in script to watch all the files for coverage.

    "coverage": "npm test -- --coverage --watchAll"
The coverage report looks something like this.

    ------------------------------|---------|----------|---------|---------|-------------------
    File                          | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
    ------------------------------|---------|----------|---------|---------|-------------------
    All files                     |   38.88 |        0 |   66.66 |   38.88 |                   
     src                          |    8.33 |        0 |   33.33 |    8.33 |                   
      App.tsx                     |     100 |      100 |     100 |     100 |                   
      index.tsx                   |       0 |      100 |     100 |       0 | 7-19              
      reportWebVitals.ts          |       0 |        0 |       0 |       0 | 3-10              
     src/components/greet         |     100 |      100 |     100 |     100 |                   
      greet.tsx                   |     100 |      100 |     100 |     100 |                   
     src/components/greetGrouping |     100 |      100 |     100 |     100 |                   
      greet.tsx                   |     100 |      100 |     100 |     100 |                   
     src/components/greetTDD      |     100 |      100 |     100 |     100 |                   
      greet.tsx                   |     100 |      100 |     100 |     100 |                   
    ------------------------------|---------|----------|---------|---------|-------------------

We can also restrict which part of the folder structure should be checked. 
*Suppose,  if we want to test only the files in components folder and that has prefix with .ts or .tsx then*.

the script would be..

    "coverage": "npm test -- --coverage --watchAll --collectCoverageFrom='src/components/**/*.{ts,tsx}'"

Now, when executing this command, we get the coverage of specific folder and specific files.

    ---------------|---------|----------|---------|---------|-------------------
    File           | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
    ---------------|---------|----------|---------|---------|-------------------
    All files      |     100 |      100 |     100 |     100 |                   
     greet         |     100 |      100 |     100 |     100 |                   
      greet.tsx    |     100 |      100 |     100 |     100 |                   
     greetGrouping |     100 |      100 |     100 |     100 |                   
      greet.tsx    |     100 |      100 |     100 |     100 |                   
     greetTDD      |     100 |      100 |     100 |     100 |                   
      greet.tsx    |     100 |      100 |     100 |     100 |                   
    ---------------|---------|----------|---------|---------|------------------

We can also skip some files by using `!` operator in `collectCoverageFrom`.
*Suppose if do not want .test.tsx or .test.ts files to be shown in coverage report then,*

the script would be..

    "coverage": "npm test -- --coverage --watchAll --collectCoverageFrom='src/components/**/*.{ts,tsx}' --collectCoverageFrom='!src/components/**/*.{test}.{ts,tsx}'"

### coverage threshold
We can also set a coverage thresold that must be achieved be jest to pass.
In package.json parallel to "script" add an object containing cofiguration of threshold values.

    "jest": {
        "coverageThreshold": {
          "global": {
            "branches": 80,
            "functions": 80,
            "lines": 80,
            "statements": -10
          }
        }
      }

> Note : Generating a coverage report also generates a coverage folder parallel to package.json , This folder contains a webpage with graphical representation of coverage report.

## Assertions and Matchers 
### Assertions
Assrtions are the test statement which decides the test pass or fails.
*Example :*
 `expect(textEle).toBeInTheDocument();`
 ### Matchers
 Matchers are the functions that determines weather the expected output is obtained or not.
 *Example :*
 `toBeInTheDocument();`
 
Jest provides many matchers which we can use in our projects.

 - Javascript based matchers -- [https://jestjs.io/docs/using-matchers](https://jestjs.io/docs/using-matchers)
 - DOM based matchers -- **Jest DOM** is a package which is extended **RTL** , contains a set of additional matchers that can be used for DOM based assertions. They can be found at [https://github.com/testing-library/jest-dom](https://github.com/testing-library/jest-dom)

> Jest DOM as "@testing-library/jest-dom" comes already installed with create-react-app.

### setupTests.ts / setupTests.js
It is a file comes already created in create-react-app. It is global test setup file and automatically get executed every time a test is run by jest.

In this file `@testing-library/jest-dom` is imported and made global to every test file.
This helps us to use jest DOM matchers without importing.

## Testing in react
### What to test

 -  Is component renders ?
 - Is component renders correctly with props ?
 - Is component renders in different states ?
 - Is component responds to different state changes ? 

### What not to test

 - Implementation details (we should only test that code works or not, and ignore testing how it works).
 - Third party code (we should not test, code inported from external libraries)
 - No need to test a code, that is not importent from a user's point of view.

## RTL Queries
Every test we write generally requires the following basic steps.

 1. Render the component.
 2. Find the element render by the component.
 3. Assert against the element, found in step two. Which will pass or fail the test.

*We have seen 1, 3 steps. **Queries helps us achieve step 2.***

Queries are the methods that RTL provides to find elements on the page.
#### To find a single element on the page we have,

 - getBy..
 - queryBy..
 - findBy..

#### To find a multiple elements on the page we have,

 - getAllBy..
 - queryAllBy..
 - findAllBy..

Here, `...` can be any one of `Role`, `LabelText`, `PlaceHolderText`, `Text`, `DisplayValue`, `AltText`, `Title`, `TestId`.

## getBy.. class of queries

 - Return the matching node.
 - Throw error when **no match / more then one match** is found.
###  >>`getByRole()`
Every HTML element has a role attribute in it and assigned a default to it.
example,

`<button>` ---> role="button"
`<a>` ---> role="link"
`<input>` ---> role="textbox"
...

*We can mutate this role attribute if we want but it is not recommended*.

    getByRole(<role>, {options})

options can be -----

- name
- level (specific to `<h>` elements)
- hidden
- selected
- checked
- pressed

here, options object is optional, which can be used to differenciate b/w two elements with same role.

Example ---
***application.tsx***

    export const Application = () => {
      return (
        <>
          <h1>Job application form</h1>
          <h2>Section 1</h2>      
          <div data-testid="custom-element">Custom HTML element</div>
          <form>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"            
              />
            </div>
            <div>
              <label htmlFor="bio">Bio</label>
              <textarea id="bio" />
            </div>
            <div>
              <label htmlFor="job-location">Job location</label>
              <select
                role="combobox"
                id="job-location"
              >
                <option value="">Select a country</option>
                <option value="US">United States</option>
                <option value="GB">United Kingdom</option>
                <option value="CA">Canada</option>
                <option value="IN">India</option>
                <option value="AU">Australia</option>
              </select>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  id="terms"
                />{" "}
                I agree to the terms and conditions
              </label>
            </div>
            <button>Submit</button>
          </form>
        </>
      );
    };
***application.test.tsx ---***

    import { render, screen } from "@testing-library/react";
    import { Application } from "./application";
    
    describe("getByRole", () => {
      test("renders correctly", () => {
        render(<Application />);
    
        let mainHeading = screen.getByRole("heading", {level : 1});
        expect(mainHeading).toBeInTheDocument();
    
        let subHeading = screen.getByRole("heading", {level : 2});
        expect(subHeading).toBeInTheDocument();
    
        let nameElement = screen.getByRole("textbox", {name : "Name"});
        expect(nameElement).toBeInTheDocument();
    
        let bioText = screen.getByRole("textbox", {name : "Bio"});
        expect(bioText).toBeInTheDocument(); 
    
        let jobLocationElement = screen.getByRole("combobox");
        expect(jobLocationElement).toBeInTheDocument();
    
        let checkBoxElement = screen.getByRole("checkbox");
        expect(checkBoxElement).toBeInTheDocument();
    
        let submitButtonElement = screen.getByRole("button");
        expect(submitButtonElement).toBeInTheDocument();
      });
    });

### >> `getByLabelText()`
`getByLableText(<label text>, {options})` finds the element associated with that lable text along with the lable element. If, and only one of that kind is found, then it returns the element else throws error.

options can be -----

- selector (tag name of element)

here, options object is optional, which can be used to differenciate b/w two elements with same lable text.

Example ---
***application.tsx***

    export const Application = () => {
      return (
        <>
          <form>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
              />
            </div>
            <div>
              <label htmlFor="bio">Bio</label>
              <textarea id="bio" />
            </div>
            <div>
              <label htmlFor="job-location">Job location</label>
              <select id="job-location">
                <option value="">Select a country</option>
              </select>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  id="terms"
                />{" "}
                I agree to the terms and conditions
              </label>
            </div>
            <div>
              <label htmlFor="job-location">
                I agree to the terms and conditions
              </label>
              <select id="tnc-select">
                <option value="">Yes</option>
                <option value="">No</option>
              </select>
            </div>
            <button>Submit</button>
          </form>
        </>
      );
    };
***application.test.tsx***

    import { render, screen } from "@testing-library/react";
    import { Application } from "./application";
    
    describe("getByLabelText", () => {
      test("renders correctly", () => {
        render(<Application />);
    
        let nameElement = screen.getByLabelText("Name");
        expect(nameElement).toBeInTheDocument();
    
        let bioElement = screen.getByLabelText("Bio");
        expect(bioElement).toBeInTheDocument();
    
        let jobLocationElement = screen.getByLabelText("Job location");
        expect(jobLocationElement).toBeInTheDocument();
    
        let tncElement = screen.getByLabelText(
          "I agree to the terms and conditions",
          { selector: "input" }
        );
        expect(tncElement).toBeInTheDocument();
    
        let tncSelectElement = screen.getByLabelText(
          "I agree to the terms and conditions",
          { selector: "select" }
        );
        expect(tncSelectElement).toBeInTheDocument();
      });
    });

### >>`getByPlaceholderText()`
Search for elements for given placeholder. 
Example ---
***application.tsx***

    export const Application = () => {
      return (
        <>
          <form>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Full name"
              />
            </div>
            <div>
              <label htmlFor="bio">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
              />
            </div>
            <button>Submit</button>
          </form>
        </>
      );
    };
***application.test.tsx***

    import { render, screen } from "@testing-library/react";
    import { Application } from "./application";
    
    describe("getByPlaceholderText", () => {
      test("renders correctly", () => {
        render(<Application />);
    
        let nameElement = screen.getByPlaceholderText("Full name");
        expect(nameElement).toBeInTheDocument();
    
        let emailElement = screen.getByPlaceholderText("Email");
        expect(emailElement).toBeInTheDocument();    
      });
    });

### >> `getByText()`
Finds the element associated with that text.

options can be -----

- selector (tag name of element)

here, options object is optional, which can be used to differenciate b/w two elements with same text.

Example ---
***application.tsx***

    export const Application = () => {
      return (
        <div>
          <h3>Hello welcome!</h3>
          <p>Hello welcome!</p>
        </div>
      );
    };

***application.test.tsx***

    import { render, screen } from "@testing-library/react";
    import { Application } from "./application";
    
    describe("getByText", () => {
      test("renders correctly", () => {
        render(<Application />);
    
        let textOne = screen.getByText("Hello welcome!", {selector : "h3"});
        expect(textOne).toBeInTheDocument();
    
        let textTwo = screen.getByText("Hello welcome!", {selector : "p"});
        expect(textTwo).toBeInTheDocument();    
      });
    });

### >> `getByDisplayValue()`
Finds the element `<input>` `<testarea>`  or `<select>` associated with given value.

Example ---
***application.tsx***

    export const Application = () => {
      return (
        <>
          <form>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value="vikas"
                onChange={() => {}}
              />
            </div>
            <div>
              <label htmlFor="bio">Bio</label>
              <textarea
                id="bio"
                value="web developer"
                onChange={() => {}}
              />
            </div>
            <div>
              <label htmlFor="country">Country</label>
              <select
                id="country"
                value="India"
                onChange={() => {}}
              >
                <option value="">India</option>
                <option value="">Japan</option>
              </select>
            </div>
          </form>
        </>
      );
    };

***application.test.tsx***

    import { render, screen } from "@testing-library/react";
    import { Application } from "./application";
    
    describe("getByDisplayValue", () => {
      test("renders correctly", () => {
        render(<Application />);
    
        let nameElement = screen.getByDisplayValue("vikas");
        expect(nameElement).toBeInTheDocument();
    
        let bioElement = screen.getByDisplayValue("web developer");
        expect(bioElement).toBeInTheDocument();
    
        let countryElement = screen.getByDisplayValue("India");
        expect(countryElement).toBeInTheDocument();
      });
    });

### >> `getByAltText()`
Finds the element `<img>` `<input>` `<area>`  ***or other elements that support `alt` attribute*** , associated with given value.

Example ---
***application.tsx***

    export const Application = () => {
      return (
        <div>
          <img
            src="https://picsum.photos/200"
            alt="some random image"
          />
        </div>
      );
    };

***application.test.tsx***

    import { render, screen } from "@testing-library/react";
    import { Application } from "./application";
    
    describe("getByAltText", () => {
      test("renders correctly", () => {
        render(<Application />);
    
        let imageElement = screen.getByAltText("some random image");
        expect(imageElement).toBeInTheDocument();
      });
    });

### >> `getByTitle()`
Finds the element with the matching title attribute.

Example ---
***application.tsx***

    export const Application = () => {
      return (
        <div>
          <img
            src="https://picsum.photos/200"
            alt="some random image"
            title="random image"
          />
        </div>
      );
    };

***application.test.tsx***

    import { render, screen } from "@testing-library/react";
    import { Application } from "./application";
    
    describe("getByTitle", () => {
      test("renders correctly", () => {
        render(<Application />);
    
        let imageElement = screen.getByTitle("random image");
        expect(imageElement).toBeInTheDocument();
      });
    });

### >> `getByTitle()`
Finds the element with the matching data-testid attribute.

Example ---
***application.tsx***

    export const Application = () => {
      return (
        <div>
          <img
            src="https://picsum.photos/200"
            alt="some random image"
            data-testid="random image"
          />
        </div>
      );
    };

***application.test.tsx***

    import { render, screen } from "@testing-library/react";
    import { Application } from "./application";
    
    describe("getByTitle", () => {
      test("renders correctly", () => {
        render(<Application />);
    
        let imageElement = screen.getByTestId("random image");
        expect(imageElement).toBeInTheDocument();
      });
    });

## Priority order for queries
A test should resemble how a user interact with the code (component, page, etc.) as much as possible.

1. getByRole
2. getByLableText
3. getByPlaceholderText
4. getByText
5. getByDisplayValue
6. getByAltText
7. getByTitle
8. getByTestId

*`1st` to be choosen most and `8th` to be choosen least*.

## getAllBy.. class of queries

 - Finds multiple elements in the DOM
 - Returns an array of all matching nodes for a query, and throws an error if no elemnt match.

Example ---
***skills.tsx***

    import React from "react";
    import { skillsProps } from "./skills.types";
    
    export const Skills = (props: skillsProps) => {
      const { skills } = props;
      return (
        <>
          <ul>
            {skills.map((skill) => {
              return <li key={skill}>{skill}</li>;
            })}
          </ul>
        </>
      );
    };

***skills.test.tsx***

    import { render, screen } from "@testing-library/react";
    import { Skills } from "./skills";
    
    describe("getByAll..", () => {
      const skills = ["HTML", "CSS", "JavaScript"];
    
      test("ul renders", () => {
        render(<Skills skills={skills} />);
        const listElem = screen.getByRole("list");
        expect(listElem).toBeInTheDocument();
      });
    
      test("li renders", () => {
        render(<Skills skills={skills} />);
        const listItemElem = screen.getAllByRole("listitem");
        expect(listItemElem).toHaveLength(skills.length);
      });
    });

> The priority order of using **`getAllBy..`** queries should be same as **`getBy..`** queries.

## TextMatch
The **first argument** that is provided to any RTL query is called the **TextMatch**.
Example:

    screen.getByRole("listitem")
here **"listitem"** is a kind of **TextMatch**

### Types of TextMatch
- string
- regex
- function

*Suppose we have a component*

    export const Comp = () => {
      return (
        <div>
          <p>Hello world !</p>
        </div>
      );
    };


### >> string
We can pass `exect flag (true/false)` to achieve variations of match in case of *string TextMatch*

    describe("TextMatch string", () => {
      test("full string match", () => {
        render(<Comp />);
        const elem = screen.getByText("Hello world !");
        expect(elem).toBeInTheDocument();
      });
    
      test("sub-string match", () => {
        render(<Comp />);
        const elem = screen.getByText("Hello", { exact: false });
        expect(elem).toBeInTheDocument();
      });
    
      // exact false flag ignores the case also ---
      test("ignore case match", () => {
        render(<Comp />);
        const elem = screen.getByText("hello", { exact: false });
        expect(elem).toBeInTheDocument();
      });
    });
### >> regex
We can use different regex patterns to achieve different variations of match.

    describe("TextMatch regex", () => {
      test("full string match", () => {
        render(<Comp />);
        const elem = screen.getByText(/^Hello world !$/);
        expect(elem).toBeInTheDocument();
      });
    
      test("full string match ignore case", () => {
        render(<Comp />);
        const elem = screen.getByText(/^hello world !$/i);
        expect(elem).toBeInTheDocument();
      });
    
      test("sub-string match", () => {
        render(<Comp />);
        const elem = screen.getByText(/Hello/);
        expect(elem).toBeInTheDocument();
      });
    
      test("sub-string match ignore case", () => {
        render(<Comp />);
        const elem = screen.getByText(/hello/i);
        expect(elem).toBeInTheDocument();
      });
    });
### >> function
a function TextMatch looks something like this `(content, element/null) => boolean`

 - It gets DOM content as first parameter
 - Element or null as second parameter
 - It must return a boolean (true/false), deciding our expected result is present in content or not.

Example ---

    describe("TextMatch function", () => {
      test("full string match", () => {
        render(<Comp />);
        const elem = screen.getByText((content) => content === "Hello world !");
        expect(elem).toBeInTheDocument();
      });
    
      test("sub-string match", () => {
        render(<Comp />);
        const elem = screen.getByText((content) => content.indexOf("Hello") !== -1);
        expect(elem).toBeInTheDocument();
      });
    });

## queryBy.. / queryAllBy.. class of queries
`getBy..` or `getAllBY..` throws error if no element is found as per the TextMatch.
But there are some senarios where we want an element **not** be present in DOM and want to write a test to ensure that.

For such senarios, we can use `queryBy...` or `queryAllBy...` 
### >> quryBy...
- return element if it is found
- return **null** if not found. (don't throws error)

### >> quryAllBy...
- return array of elements if found
- return **empty array** if not found. (don't throws error)

Example ---
***skills.tsx***

    import { useState } from "react";
    import { skillsProps } from "./skills.types";
    
    export const Skills = (props: skillsProps) => {
      const { skills } = props;
      const [isLoggedIn, setIsLoggedIn] = useState(false);
    
      return (
        <>
          {skills.length > 0 && (
            <ul>
              {skills.map((skill) => {
                return <li key={skill}>{skill}</li>;
              })}
            </ul>
          )}
          {isLoggedIn ? (
            <button>Start learning</button>
          ) : (
            <button onClick={() => setIsLoggedIn(true)}>Login</button>
          )}
        </>
      );
    };

***skills.test.tsx***

    import { render, screen } from "@testing-library/react";
    import { Skills } from "./skills";
    
    describe("queryBy", () => {
      const skills = ["HTML", "CSS", "JavaScript"];
    
      test("ul renders", () => {
        render(<Skills skills={skills} />);
        const listElem = screen.getByRole("list");
        expect(listElem).toBeInTheDocument();
      });
    
      test("ul not renders", () => {
        render(<Skills skills={[]} />);
        const listElem = screen.queryByRole("list");
        expect(listElem).not.toBeInTheDocument();
      });
    
      test("renders login button", () => {
        render(<Skills skills={skills} />);
        const loginBtn = screen.getByRole("button", { name: "Login" });
        expect(loginBtn).toBeInTheDocument();
      });
    
      test("not renders start learning button", () => {
        render(<Skills skills={skills} />);
        const loginBtn = screen.queryByRole("button", { name: "Start learning" });
        expect(loginBtn).not.toBeInTheDocument();
      });
    });

## findBy.. / findAllBy.. class of queries
`findBy...` or `findAllBy...` class of queries are helpful when,

 - If element is not peresent in DOM in beginning but, get loaded after some time (*example : getting data from an API or timer related rendering*)


How it work ??
### >> findBy

 -  returns a promise, which resolves, when an element is found and returns that element.
 - promise is regected and error is thrown if (no/more then 1) element(s) found, after a default timeout of 1000 ms (1s).

### >> findAllBy
 -  returns a promise, which resolves, when any element is found and returns array of elements
 - promise is regected and empty array is returned if (no/more then 1) element(s) found, after a default timeout of 1000 ms (1s).

***Note : we can pass an object to customise the timeout as the third argument to findBy... or findByAll... , By default it is set to 1000 ms.***

Example ---
***skills.tsx***

    import { useEffect, useState } from "react";
    import { skillsProps } from "./skills.types";
    
    export const Skills = (props: skillsProps) => {
      const { skills } = props;
      const [isLoggedIn, setIsLoggedIn] = useState(false);
      const [showLogout, setShowLogout] = useState(false);
    
      useEffect(() => {
        setTimeout(() => {
          setIsLoggedIn(true);
        }, 500);
    
        setTimeout(() => {
          setShowLogout(true);
        }, 2000);
      }, []);
    
      return (
        <>
          {skills.length > 0 && (
            <ul>
              {skills.map((skill) => {
                return <li key={skill}>{skill}</li>;
              })}
            </ul>
          )}
          {isLoggedIn ? (
            <button>Start learning</button>
          ) : (
            <button onClick={() => setIsLoggedIn(true)}>Login</button>
          )}
          {showLogout && <button>Logout</button>}
        </>
      );
    };

***skills.test.tsx***

    import { render, screen } from "@testing-library/react";
    import { Skills } from "./skills";
    
    describe("findByBy", () => {
      const skills = ["HTML", "CSS", "JavaScript"];  
    
      test("renders start learning button", async () => {
        render(<Skills skills={[]} />);
        const startLearnBtn = await screen.findByRole("button", { name: "Start learning" });
        expect(startLearnBtn).toBeInTheDocument();
      });
    
      test("renders logout button", async () => {
        render(<Skills skills={[]} />);
        const logoutBtn = await screen.findByRole("button", { name: "Logout" }, {timeout : 3000});
        expect(logoutBtn).toBeInTheDocument();
      });
    });
## Manual Queries
We can also write manual queries by using DOM query methods like `getElementById()` , `getElementByClassName()`, `querySelector()` etc. , But it is not recommended as **classes** or **ids** are not important as a user's point of view, so we should ignore using these.

## Debugging tests
Although, every time a test passes or fails, it gives all the necessary data logged in the terminal. But there are few more tools that can enhance the debuging experience.

 - `screen.debug()` => logs the formatted DOM in terminal
 - `logRoles()` => Log available DOM nodes with their respective roles.

Example ---
***skills.tsx***

    import { skillsProps } from "./skills.types";
    
    export const Skills = (props: skillsProps) => {
      const { skills } = props;
      return (
        <>
          <ul>
            {skills.map((skill) => {
              return <li key={skill}>{skill}</li>;
            })}
          </ul>
        </>
      );
    };

***skills.test.tsx***

    import { render, screen, logRoles } from "@testing-library/react";
    import { Skills } from "./skills";
    
    describe("debug", () => {
      const skills = ["HTML", "CSS", "JavaScript"];
    
      test("list renders", () => {
	    // log DOM before render
        screen.debug();
    
        let view = render(<Skills skills={skills} />);
        
	    // log DOM before render
        screen.debug();
    
        logRoles(view.container);
    
        const startLearnBtn = screen.getAllByRole("listitem");
        expect(startLearnBtn).toHaveLength(skills.length);
      });
    });

## Testing Playground (*dev tool extention*)
It is a very helpful tool thet can be used while writing tests.

## Simulating User interactions in testing
User interactions are very critical part on an interactive web application. To simulate user interactions in automated testing, we use a library named **user-event**.

### user-event library

 - A companion library for testing library, that simulates user interactions by dispatching the events that would happen if the interaction took place in a browser.
 - It is the recommended way to test user interactions with RTL.
### fireEvent v/s user-event
 - fireEvent is a method from RTL which is used to dispatch DOM events.
 - user-event simulates full interactions, which may fire multiple events and do additional checks along the way.
 - For example, we can dispatch a change event on an input field using fireEvent.
 - When a user types into a text box, the element has to be focused and then keyboard and input events are fired and th selection and value on the element are manipulated as they type
 - user-event allows you to describe a user interaction instead of a concrete event. It adds visibility and interactibility checks along the way and manipolates the DOM just like a user interaction in the browser would. It factors in the browser e.g. wouldn't let a user click a hidden element or type in a disabled text box.

In create-react-app we get **user-event** library already installed as **@testing-library/user-event** 

> Note : Always use the latest version of **@testing-library/user-event**


## Pointer / Mouse Interactions
Pointer interaction can be achieved with help of pointer methods/APIs that is provided by user-event library. There methods are.

 - `pointer({keys : '[MouseLeft]'})` --- simulation of mouse left btn click.
 - `pointer({keys : '[MouseRight]'})` --- simulation of mouse right btn click.
 - `pointer({keys : '[MouseLeft][MouseRight]'})` --- simulation of mouse left btn click followed by mouse right btn click.
 - `pointer({keys : '[MouseRight][MouseLeft]'})` --- simulation of mouse right btn click followed by mouse left btn click.
 - `pointer({keys : '[MouseLeft>]'})` --- simulation of mouse  left btn click without releasing.
 - `pointer({keys : '[MouseRight>]'})` --- simulation of mouse right btn click without releasing.
 - `pointer({keys : '[/MouseLeft]'})` --- simulation of mouse left btn released.
  - `pointer({keys : '[/MouseRight]'})` --- simulation of mouse right btn released.
  - etc..

To enhance the developer experience, the commenly used pointer APIs can also be written as following, they are called convenience APIs. *(convenience apis are ultimately derived into pointer apis behind the code)*
### Convenience APIs

 - `click()` --- simulate click event.
 - `dblClick()` --- simulate double click event.
 - `tripleClick()` --- simulate triple click event.
 - `hover()` --- simulate hover event.
 - `unhover()` --- simulate un-hover event.
 - etc...

Example ---
***counter.tsx***

    import React, { useState } from "react";
    
    export const Counter = () => {
      const [count, setCount] = useState(0);
      return (
        <div>
          <h1>{count}</h1>
          <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
        </div>
      );
    };

***counter.test.tsx***

    import { render, screen, logRoles } from "@testing-library/react";
    import user from "@testing-library/user-event";
    import { Counter } from "./counter";
    
    describe("pointer interaction", () => {
      // TESTING INITIAL RENDER PART ----
      test("UI initial render", () => {
        render(<Counter />);
        let countElem = screen.getByRole("heading", { level: 1 });
        expect(countElem).toBeInTheDocument();
        expect(countElem).toHaveTextContent("0");
    
        let btnElem = screen.getByRole("button", { name: "Increase" });
        expect(btnElem).toBeInTheDocument();
      });
    
      // TESTING USER INTERACTION PART -----
      test("Count increases on click of button", async () => {
        // SETUP >>>
        user.setup();
    
        // RENDERING COMPONENT >>>
        render(<Counter />);
    
        // GETTING THE BUTTOM ELEMENT >>>
        let btnElem = screen.getByRole("button", { name: "Increase" });
    
        // CILCKING BUTTON 1 >>> (asyns task)
        await user.click(btnElem);
    
        // CHECKING THE COUNT INCREASED OR NOT >>>>
        let countElem1 = screen.getByRole("heading", { level: 1 });
        expect(countElem1).toHaveTextContent("1");
    
        // CILCKING BUTTON 2 >>> (asyns task)
        await user.click(btnElem);
    
        // CHECKING THE COUNT INCREASED OR NOT >>>>
        let countElem2 = screen.getByRole("heading", { level: 1 });
        expect(countElem2).toHaveTextContent("2");
      });
    });
## Keyboard Interactions
Keyboard interaction can be achieved with help of keyboard methods/APIs that is provided by user-event library. There methods are.

 - `keyboard("abc")` --- translates to a, b, c pressed one after another in sequence.
 - `keyboard('{key>}')` --- to hold down key
 - `keyboard('{/key}')` --- to release a key
 - etc...
 - example `control + a` can be simulated by `keyboard('{ctrl>}A{/ctrl}')`

To enhance the developer experience, the commenly used keyboard APIs can also be written as following. *(theys are ultimately derived into keyboard apis behind the code)*
### Utility API

 - `tab()` --- to simulate tab press
 - `clear(<element>)` --- to clear an editable element.
 - `selectOptions(<element>, <option>/[<options>])` --- to select option(s) of select/multi-select input.
 - `deselectOptions(<element>, <option>/[<options>])` --- to deselect option(s) of select/multi-select input.
 -  `upload(<element>, <file>)` --- to upload a file.

### Convenience API
 - `type(<element>, <typedValue>)` --- to simulate typing of text

### Clipboard API

 - `copy()` --- to copy the selection
 - `cut()` --- to cut the selection
 - `paste()` --- to paste the selection

Example ---
***counter.tsx***

    import React, { useState } from "react";
    
    export const Counter = () => {
      const [count, setCount] = useState(0);
      const [inputValue, setInputValue] = useState(0);
      return (
        <div>
          <h1>{count}</h1>
          <input
            type="number"
            name="amount"
            value={inputValue}
            onChange={(e) => setInputValue(parseInt(e.target.value))}
          />
          <button onClick={() => setCount(inputValue)}>Set</button>
        </div>
      );
    };

***counter.test.tsx***

    import { render, screen } from "@testing-library/react";
    import user from "@testing-library/user-event";
    import { Counter } from "./counter";
    
    describe("pointer interaction", () => {
      // TESTING INITIAL RENDER PART ----
      test("UI initial render", () => {
        render(<Counter />);
        let countElem = screen.getByRole("heading", { level: 1 });
        expect(countElem).toBeInTheDocument();
        expect(countElem).toHaveTextContent("0");
    
        let inputElem = screen.getByRole("spinbutton");
        expect(inputElem).toBeInTheDocument();
        expect(inputElem).toHaveValue(0);
    
        let btnElem = screen.getByRole("button", { name: "Set" });
        expect(btnElem).toBeInTheDocument();
      });
    
      // TESTING USER INTERACTION PART -----
      test("Count changes by setting amount", async () => {
        // SETUP >>>
        user.setup();
    
        // RENDERING COMPONENT >>>
        render(<Counter />);
    
        // GETTING THE BUTTON, INPUT AND COUNT ELEMENT >>>
        let btnElem = screen.getByRole("button", { name: "Set" });
        let inputElem = screen.getByRole("spinbutton");
        let countElem1 = screen.getByRole("heading", { level: 1 });
    
        // ENTERING VALUE 1 >>> (asyns task)
        await user.type(inputElem, "10");
    
        // CHECKING THE VALUE CHANGED IN INPUT OR NOT >>>>
        expect(inputElem).toHaveValue(10);
    
        // CILCKING BUTTON >>> (asyns task)
        await user.click(btnElem);
    
        // CHECKING THE COUNT INCREASED OR NOT >>>>
        expect(countElem1).toHaveTextContent("10");
      });
    
      test("Element get focused on clicking tab", async () => {
        // SETUP >>>
        user.setup();
    
        // RENDERING COMPONENT >>>
        render(<Counter />);
    
        // GETTING THE BUTTON, INPUT AND COUNT ELEMENT >>>
        let btnElem = screen.getByRole("button", { name: "Set" });
        let inputElem = screen.getByRole("spinbutton");
    
        // TAB 1 >>> (asyns task)
        await user.tab();
    
        // CHECKING INPUT IS FOCUSED OR NOT >>>>
        expect(inputElem).toHaveFocus();
    
        // TAB 2 >>> (asyns task)
        await user.tab();
    
        // CHECKING BUTTON IS FOCUSED OR NOT >>>>
        expect(btnElem).toHaveFocus();
      });
    });
## Render a component with provider in testing.
We often have components that take data from some kind of provider (*react-redux, mui or context provider*). To perform efficient testing such components we might need to render the component along with the provider. 
*Suppose we a have redux-toolkit store configured, which we want to prove to the component to be tested. so,*

***slice.js***

    import { createSlice } from "@reduxjs/toolkit"
    const counter = createSlice({
        name: "counter",
        initialState: {
            count: 10
        },
        reducers: {}
    })
    
    // REDUCER >>>>>>>>>
    export default counter.reducer;
***store.js***

    // CREATING STORE >>>>>>
    import { configureStore } from "@reduxjs/toolkit";
    import counter from "./slice"
    
    const store = configureStore({
        reducer: {
            counter
        }
    })
    
    export default store;
***counter.tsx***

    import React, { useState } from "react";
    import { useSelector } from "react-redux";
    
    export const Counter = () => {
      const { count } = useSelector((store: any) => store.counter);
      return (
        <div>
          <h1>{count}</h1>
        </div>
      );
    };

***counter.test.tsx***

    import { render, screen } from "@testing-library/react";
    import { Counter } from "./counter";
    
    import { Provider } from "react-redux";
    import store from "../../store/store";
    
    // HOC WHICH WILL WRAP A COMPONENT IN REDUX PROVIDER ----
    const ProviderWrapper = (props: any) => {
      return <Provider store={store}>{props.children}</Provider>;
    };
    
    describe("rendering with provider", () => {
      test(" counter renders correctly", () => {
        // RENDERING THE COMPONENT WITH WRAPPED AROUND THE PROVIDER ----
        render(<Counter />, {
          wrapper: ProviderWrapper,
        });
    
        let countElem = screen.getByRole("heading");
        expect(countElem).toHaveTextContent("10");
      });
    });

### Wrapping all the testing components in Provider
We can do that by upgrading the available **render** function and making it globally available to all the testing components.
[https://testing-library.com/docs/react-testing-library/setup](https://testing-library.com/docs/react-testing-library/setup)

Create a new file name **test-utils.tsx** in src folder (parallel to App.tsx) and copy the below code in that. Make changes as per your requirements.
***test-utils.tsx***

    import React, { ReactElement } from "react";
    import { render, RenderOptions } from "@testing-library/react";
    import { Provider } from "react-redux";
    import store from "./store/store";
    
    const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
      return <Provider store={store}>{children}</Provider>;
    };
    
    const customRender = (
      ui: ReactElement,
      options?: Omit<RenderOptions, "wrapper">
    ) => render(ui, { wrapper: AllTheProviders, ...options });
    
    export * from "@testing-library/react";
    export { customRender as render };
modify ***counter.test.tsx*** (or other testing files which requires the custom render function) as per the custom render function.

    // IMPORTED CUSTOM RENDER FUNCTION INSTEAD OF REGULAR RENDER FUNCTION >>>>
    import { render, screen } from "../../test-utils";
    import { Counter } from "./counter";
    
    describe("rendering with globla provider", () => {
      test(" counter renders correctly", () => {
        render(<Counter />);
    
        let countElem = screen.getByRole("heading");
        expect(countElem).toHaveTextContent("10");
      });
    });

## Testing a custom hook.

 - `renderHook(<hook>, {options})` is a sibling of `render()` funtion but, it is used to render the  hooks.
 - Since hooks can only be called inside a funtional component. `renderHook()` creates a dummy functional component and invokes the hokk inside it and returns an object which contains properties related to that hook.
 - In the second argument to renderHook (options object) we can pass initial props if there any.

Example ---
***useCounter.ts***

    import { useState } from 'react'
    import { UseCounterProps } from './useCounter.types'
    
    export const useCounter = ({ initialCount = 0 }: UseCounterProps = {}) => {
      const [count, setCount] = useState(initialCount)
      const increment = () => setCount(count + 1)
      const decrement = () => setCount(count - 1)
      return { count, increment, decrement }
    }
***useCounter.test.ts***

    
    import { renderHook } from "@testing-library/react";
    import { useCounter } from "./useCounter";
    
    describe("testing hook", () => {
      test("hook works correctly without props", () => {
        const { result } = renderHook(useCounter);
        const { count, increment, decrement } = result.current;
    
        // INITIAL VALUE >>>
        expect(count).toBe(0);
      });
    
      test("hook works correctly with props", () => {
        const { result } = renderHook(useCounter, {
          initialProps : {
            initialCount : 10
          }
        });
        const { count, increment, decrement } = result.current;
    
        // INITIAL VALUE >>>
        expect(count).toBe(10);
      });
    });
## `act()`
- `act()` is a function provided by RTL that ensures, updates are processed before assertions are made.
[https://legacy.reactjs.org/docs/testing-recipes.html#act](https://legacy.reactjs.org/docs/testing-recipes.html#act)

- It is helpful where we need to change a state of component and want to assert the updated component according to the new state.
- `act()`  will perform all the updation, before moving to the assertion line.

*In the above useCounter hook, following test will be failed because, the hook is not updated according to the new state before the assertion.*

**not using act() >> FAILED**

    import { renderHook } from "@testing-library/react";
    import { useCounter } from "./useCounter";
    
    describe("testing changes in hook", () => {
      // FAILED TEST >>>>>
      test("not using act", () => {
        const { result } = renderHook(useCounter);
        const { count, increment } = result.current;
    
        increment();
        expect(count).toBe(1);    
      });  
    });
**using act() >> PASSED**

    import { renderHook, act } from "@testing-library/react";
    import { useCounter } from "./useCounter";
    
    describe("testing changes in hook", () => {
    
      // PASSED TEST (using act()) >>>>>
      test("using act", () => {
        const { result } = renderHook(useCounter);
        expect(result.current.count).toBe(0);
        act(() => result.current.increment());
        expect(result.current.count).toBe(1);
      });
    });

## Mocking functions
- mock functions are dummy functions that can act as a function placeholder, can can be tracked in different ways, like how many times they have been called ?
- mock function can be created with help of `jest.fn()` method.

Example ---
***counter.tsx***

    import { CounterTwoProps } from "./counter.types";
    
    export const Counter = (props: CounterTwoProps) => {
      return (
        <div>
          <h1>Counter Two</h1>
          <p>{props.count}</p>
          {props.handleIncrement && (
            <button onClick={props.handleIncrement}>Increment</button>
          )}
          {props.handleDecrement && (
            <button onClick={props.handleDecrement}>Decrement</button>
          )}
        </div>
      );
    };

***counter.test.tsx***

    import { render, screen } from "@testing-library/react";
    import user from "@testing-library/user-event";
    import { Counter } from "./counter";
    
    describe("mocking function", () => {
      test("initial UI check without functions in prop", () => {
        render(<Counter count={0} />);
        const textElement = screen.getByRole("paragraph");
        expect(textElement).toHaveTextContent("0");
      });
    
      test("initial UI check with functions in prop", () => {
        // TO CHECK THIS WE NEED TO CREATE DUMMY FUNTIONS (MOCK FUNCTIONS) >>>>
        const handleIncrement = jest.fn();
        const handleDecrement = jest.fn();
    
        render(
          <Counter
            count={0}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
          />
        );
        const textElement = screen.getByRole("paragraph");
        const incBtn = screen.getByRole("button", { name: "Increment" });
        const decBtn = screen.getByRole("button", { name: "Decrement" });
    
        expect(textElement).toHaveTextContent("0");
        expect(incBtn).toBeInTheDocument();
        expect(decBtn).toBeInTheDocument();
      });
    
      // TO CHECK IS ONCLICK HANDLERS ARE PROPERLY CALLED OR NOT WHEN BUTTONS ARE CLICKED >>>
      test("checking, do buttons calls the handler ?", async () => {
        const handleIncrement = jest.fn();
        const handleDecrement = jest.fn();
    
        render(
          <Counter
            count={0}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
          />
        );
        const incBtn = screen.getByRole("button", { name: "Increment" });
        const decBtn = screen.getByRole("button", { name: "Decrement" });
    
        expect(incBtn).toBeInTheDocument();
        expect(decBtn).toBeInTheDocument();
    
        await user.click(incBtn);
        await user.click(incBtn);
        await user.click(decBtn);
    
        expect(handleIncrement).toHaveBeenCalledTimes(2);
        expect(handleDecrement).toHaveBeenCalledTimes(1);
      });
    });

## Mocking HTTP requests  | APIs
**MSW** (mock service worker) is a library which is widely used for creating mocked APIs (fake APIs) with fake endpoints. These APIs behave like real one.

We can use **MSW** for creating a dummy clone of production api, if we cannot afford to use production API in testing.

***>>Setting up MSW for our project---***

**Step 1** -- install **msw**  ----> `npm  install msw --save-dev`
**Step 2** -- Create two files (*server.ts, handlers.ts*)

    |
    |- components
    |- mocks
	    |- server.ts
	    |- handlers.ts
	|-App.tsx
	|
***in handlers.ts***

    import { rest } from "msw";
    
    // creating an array of fake rest APIs for our project
    export const handlers = [
      rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json([{ name: "Senku" }, { name: "Chrome" }, { name: "Kohaku" }])
        );
      }),
    ];

***in server.ts***

    // src/mocks/server.js
    import { setupServer } from 'msw/node'
    import { handlers } from './handlers'
    
    // This configures a request mocking server with the given request handlers.
    export const server = setupServer(...handlers)
**Step 3** -- To use mock APIs instead of real APIs *(for testing only)*, modify the ***setupTests.ts*** as follows.

    // jest-dom adds custom jest matchers for asserting on DOM nodes.
    // allows you to do things like:
    // expect(element).toHaveTextContent(/react/i)
    // learn more: https://github.com/testing-library/jest-dom
    import "@testing-library/jest-dom";
    
    // src/setupTests.js
    import { server } from "./mocks/server";
    // Establish API mocking before all tests.
    beforeAll(() => server.listen());
    
    // Reset any request handlers that we may add during the tests,
    // so they don't affect other tests.
    afterEach(() => server.resetHandlers());
    
    // Clean up after the tests are finished.
    afterAll(() => server.close());

### Testing with our mocked API.
***users.tsx***

    import { useState, useEffect } from 'react'
    
    export const Users = () => {
      const [users, setUsers] = useState<string[]>([])
      const [error, setError] = useState<string | null>(null)
      useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then((res) => res.json())
          .then((data) => setUsers(data.map((user: { name: string }) => user.name)))
          .catch(() => setError('Error fetching users'))
      }, [])
      return (
        <div>
          <h1>Users</h1>
          {error && <p>{error}</p>}
          <ul>
            {users.map((user) => (
              <li key={user}>{user}</li>
            ))}
          </ul>
        </div>
      )
    }
***users.tset.tsx***

    import { render, screen } from "@testing-library/react";
    import { Users } from "./user";
    import { server } from "../../mocks/server";
    import { rest } from "msw";
    
    describe("mocked api testing", () => {
      test("Initial UI renders correctly", () => {
        render(<Users />);
        const headingElem = screen.getByText("Users");
        expect(headingElem).toBeInTheDocument();
      });
    
      test("List renders correctly", async () => {
        render(<Users />);
        const listElements = await screen.findAllByRole("listitem");
        expect(listElements).toHaveLength(3);
      });
    
      test("Error renders correctly", async () => {
        // FOR THIS WE NEED TO MODIFY OUR MOCK API TO THROW ERROR (NOTE : this modificatin is scoped to current block only and will not affect the real one.)
        server.use(
          rest.get(
            "https://jsonplaceholder.typicode.com/users",
            (req, res, ctx) => {
              return res(ctx.status(500));
            }
          )
        );
    
        render(<Users />);
        const errorElem = await screen.findByText("Error fetching users");
        expect(errorElem).toBeInTheDocument();
      });
    });

## Static Analysis Testing
As automated testing checks if software code works or not. **SAT** on other hand, check the code is well written or not, which is acceptable to industry standards.

**SAT** is very crucial to, 

- Have readability and proper formatting in code.
- Limit the complexity of code
- Have scaleability and maintainability of code
- Have type safety (*eg. typescript*)

### SAT Tools
- TypeScript
- ESlint
- prettier
- Husky
- lint-staged
- etc...

###  ESlint
ESlint is a development tool that scans our code and suggests a better way of writing it (if something find odd according to it). This is done to avoid possible bugs and ensure best coding practies.
###  Prettier
Generally used for formatting the code
###  Husky
Used for automatically running scripts before commiting the changes. Can be used to run test scripts, prettier script, eslint scripts etc..
###  lint-staged
It can be used along with **husky** to restrict , which files should be affected by scripts run by husky.

