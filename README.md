# Playwright Automation Testing Project

This repository contains an automated end-to-end testing project developed using Playwright with Node.js. The project is designed to execute automated tests using the Chromium browser and generate HTML test reports. This repository is publicly accessible for academic evaluation purposes.

## Project Structure

.
├── node_modules/             # Installed project dependencies
├── tests/                    # Playwright test files
├── .gitignore                # Git ignored files
├── IT23170070_TestCases.xlsx # Test case documentation
├── package.json              # Project metadata and dependencies
├── package-lock.json         # Dependency lock file
├── playwright.config.js      # Playwright configuration file
└── README.md                 # Project documentation

## Prerequisites

Before running this project, ensure the following are installed on your system:
- Node.js version 18 or higher
- npm (comes bundled with Node.js)
- Windows, macOS, or Linux operating system

Verify Node.js installation using:
node -v

## Installation Instructions

1. Clone the public GitHub repository using the following command:
git clone https://github.com/kim09196/IT23170070_ITPM_ASSIGMENT_01.git

2. Navigate into the project directory:
cd IT23170070_ITPM_ASSIGMENT_01

3. Install project dependencies:
npm install

4. Install Playwright browsers:
npx playwright install

## Running the Tests

To execute all Playwright tests using the default configuration, run:
npx playwright test

To execute tests specifically using the Chromium browser project, run:
npx playwright test --project=chromium

All test files are located in the tests directory, and tests are executed in parallel based on the Playwright configuration.

## Test Reports

After test execution, Playwright automatically generates an HTML test report.

To view the report, run:
npx playwright show-report

The report will open in your default web browser and is stored in the playwright-report directory.

## Playwright Configuration

The Playwright configuration is defined in the playwright.config.js file with the following key settings:
- Test directory: ./tests
- Browser project: Chromium
- Reporter: HTML
- Parallel test execution enabled
- Trace collection enabled on first retry



## Author

Name: Kumudahashini D.A.C 
Student ID: IT23170070  
Module: ITPM  
