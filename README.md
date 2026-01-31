# Thanglish to Tamil Converter Automation

This project contains the Playwright automation test suite for the Thanglish to Tamil converter website (`https://tamil.changathi.com/`).

## Project Structure

- **tests/**: Contains all test cases.
  - `postive_testcases/`: Positive functional tests (`Pos_Fun_XXXX`).
  - `negative_testcases/`: Negative functional tests (`Neg_Fun_XXXX`).
  - `UI_testcase/`: UI validation tests (`UI_Fun_XXXX`).
- **playwright.config.js**: Configuration file for Playwright.

## Prerequisites

1. Install [Node.js](https://nodejs.org/) (LTS version recommended).
2. Install npm (included with Node.js).

## Installation

1. Open the project folder in your terminal.
2. Install the necessary dependencies:
   ```bash
   npm install
   ```
3. Install the Playwright browsers:
   ```bash
   npx playwright install chromium
   ```

## Running Tests

To run all test cases:

```bash
npx playwright test
```

To run a specific folder (e.g., positive tests):

```bash
npx playwright test tests/postive_testcases
```

## Viewing Reports

After running the tests, you can view the detailed HTML report:

```bash
npx playwright show-report
```

## Test Case IDs

- **Pos_Fun_0001** to **Pos_Fun_0024**: Positive scenarios.
- **Neg_Fun_0001** to **Neg_Fun_0010**: Negative/Robustness scenarios.
- **UI_Fun_0001**: User Interface scenario.

---
**Module**: IT3040 – ITPM
**Assignment**: Assignment 1
