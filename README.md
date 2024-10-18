
# AcademyMovies

AcademyMovies yra React web aplikacija su kuria galima peržiūrėti populiariausių filmų anonsinius filmukus ir paskaityti atsiliepimus apie filmą, jei filmas jau peržiūrėtas galima parašyti atsiliepimą.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Tests](#tests)
- [Contributing](#contributing)
- [Contact](#contact)

## Demo

**Demo image**
![image](https://github.com/user-attachments/assets/efa4469e-32a1-4444-a080-88e4bd6ab759)

## Features

Highlight the main features of your project:
- **Feature 1: Populiariausių filmų naršymas.
- **Feature 2:  Filmų anonsinių filmukų peržiūra.
- **Feature 3: Galima perskaityti atsiliepimus apie filmus, taip pat parašyti atsiliepimus.
- **API Integration: Duomenų bazej naudojama MongoDB, serverio palaikymui naudojama spring boot, trailerių peržiūrai naudota youtube.


## Technologies Used

This section provides an overview of the technologies and libraries used to build the project.

- **React**: Frontend library for building user interfaces
- **React Router**: For navigation and routing in the app
- **Axios**: For making HTTP requests
- **Styled Components** or **CSS/SCSS**: For styling components
- **Node.js**: Backend API (if applicable)


You can replace or add to this list depending on your project.

## Installation

To get a local copy of this project up and running, follow these simple steps:

### Prerequisites

Ensure that you have the following installed:

- [Node.js](https://nodejs.org/en/download/) (v14+ recommended)
- npm or [Yarn](https://classic.yarnpkg.com/en/docs/install/)

### Steps

1. **Clone the repository**:

   ```bash
https://github.com/Augustas900/AcademyMovieFrontend
Navigate to the project directory:

bash
cd your-project-name
Install dependencies:

If using npm:

bash
npm install
Or if using Yarn:

bash
yarn install
Set up environment variables:

Create a .env file in the root directory of your project and add necessary environment variables (e.g., API keys). Example:

bash
REACT_APP_API_URL=http://your-api-url.com
Run the app:

Start the development server:

bash
npm start
Or with Yarn:

bash
yarn start
Open http://localhost:3000 to view it in the browser.

Building for Production
To create a production build, run:

bash
npm run build
This will build the app for production, optimizing it for speed and performance.

Usage
This section provides guidance on how to use your project after installation.

Once the app is running, go to http://localhost:3000 in your browser.
Follow the steps provided by the app (if applicable).
Provide login details or any other necessary setup information.
Example use cases or user flows to give users a better idea of how to use the app.
Project Structure
A quick overview of the directory structure of the project. This helps new developers understand how your project is organized.

plaintext
├── public/                # Static files such as index.html
├── src/                   # Main source folder
│   ├── components/        # Reusable components
│   ├── pages/             # Different pages of the application
│   ├── services/          # API calls or business logic
│   ├── redux/             # Redux state management (if applicable)
│   ├── utils/             # Helper functions or utilities
│   ├── App.js             # Root component of the application
│   ├── index.js           # Entry point of the application
├── .env                   # Environment variables
├── .gitignore             # Files ignored by Git
├── package.json           # Project dependencies and scripts
└── README.md              # Project documentation
Available Scripts
In the project directory, you can run the following scripts:

npm start
Runs the app in development mode. Open http://localhost:3000 to view it in the browser.

npm run build
Builds the app for production to the build folder. It bundles React in production mode, optimizing the build for the best performance.

npm test
Launches the test runner in interactive watch mode.

npm run eject
If you want to customize the default configuration (webpack, Babel, etc.), you can run npm run eject. This action is irreversible, and it extracts the configurations into your project for further customization.

Tests
This project uses Jest for testing (or any other testing framework, if applicable).

To run tests, execute:

bash
npm test
You can also run specific tests by navigating to the src folder and running the test files.

Contributing
Contributions are welcome! Here's how you can contribute:

Fork the repository.
Create a new feature branch (git checkout -b feature/new-feature).
Make your changes and commit them (git commit -m 'Add a new feature').
Push to the branch (git push origin feature/new-feature).
Open a Pull Request.
Please follow the project's coding style and conventions. Ensure that your changes pass any tests and that you add tests for new features.

License
This project is licensed under the MIT License. See the LICENSE file for more details.

Contact
For any inquiries or suggestions, feel free to reach out:

Name: Augustinas
Email: timofejevas.augustinas@gmail.com
GitHub: Augustas900

