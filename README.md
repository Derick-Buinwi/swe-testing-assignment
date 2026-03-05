# React Calculator Application

## Overview

This project is a **basic calculator application built using React and JavaScript**.
The calculator performs the four fundamental arithmetic operations:

* Addition
* Subtraction
* Multiplication
* Division

The calculator displays the **full arithmetic expression while the user is typing** and shows the **final result only after the equals (=) button is pressed**.

It also handles **division by zero gracefully by displaying `undefined`**.


## Features

* Addition of two numbers
* Subtraction of two numbers
* Multiplication of two numbers
* Division of two numbers
* Division by zero handling (`undefined` displayed)
* Clear button to reset the calculator
* Displays typed expression before calculating
* Result remains displayed until **Clear (C)** is pressed.

## Technologies Used

* React
* JavaScript (ES6)
* HTML
* CSS
* Node.js
* npm

## Project Structure

calculator/
│
├── public/
│   └── index.html
│
├── src/
│   ├── App.js
│   ├── App.css
│   └── index.js
│
├── package.json
├── README.md
└── .gitignore

## Installation and Setup

### 1. Install Node.js
Download and install Node.js from:

https://nodejs.org

Verify installation:

node -v
npm -v

### 2. Clone the Repository
git clone https://github.com/D/react-calculator.git
cd react-calculator


### 3. Install Dependencies
npm install

### 4. Run the Application
npm start

The application will start and open automatically in your browser:
http://localhost:3000

## How the Calculator Works

### Input
When a user presses a number or operator button, the value is appended to the expression.

Example: 5 + 3

Displayed as:5+3

### Calculation

When the equals (`=`) button is pressed, the expression is evaluated and the result is displayed.

Example: 5 + 3 = 8

### Division by Zero
If division by zero occurs: 10 / 0
The calculator displays: undefined.

### Clear Button

Pressing the **C** button resets the calculator display back to: 0

## Future Improvements
Possible improvements include:

* Keyboard input support
* Support for decimal numbers
* More advanced operations (square root, percentage)
* Improved UI design
* Removing use of `eval()` for safer expression parsing.
# swe-testing-assignment
