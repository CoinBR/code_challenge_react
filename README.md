> [!IMPORTANT]  
> Before starting, create a public GitHub/GitLab repository and share the link with the interviewer.

> [!TIP]  
> If you'd like to use this project as a template instead of setting up yours from scratch:
> - Create a public GitHub/GitLab repository
>   - Copy the clone URL (example: git@github.com:CoinBR/tmp.git) 
> - Clone this repository (the challenge)
>   - Navigate to its folder in the terminal
>   - Run this command with your repository URL: 
>     - `./setup_repo.sh ___YOUR_REPOSITORY_URL___`

## Code Challenge - React
Payment Transaction Dashboard

### Problem Statement
- The company is working on a new payment integration project.
- You are tasked with building a prototype of a payment transaction dashboard 
     - using React.js and TypeScript.
- Your goal is to create a web app that simulates displaying payment transaction data.

### Requirements
- [ ] Create a React.js app that allow users to:
     - [ ] view a list of payment transactions 
     - [ ] filter transactions by date range.
- [ ] Implement a mock API to simulate fetching payment transaction data.
     - You can use a JavaScript array to store mock data.
     - Third-party APIs are not allowed. You must use a mock API for data.
- [ ] Display the following information for each payment transaction: 
     - [ ] Transaction ID
     - [ ] Date
     - [ ] Description
     - [ ] Amount (in USD)
- [ ] Implement error handling for API requests. 
     - If the API request fails, display an error message to the user.
- [ ] Design the user interface to be clean and responsive using CSS and HTML.
     - You can use any CSS framework or libraries of your choice.
- [ ] Use TypeScript for type-checking and ensure type safety throughout your code.
- [ ] Add a date range filter to allow users to filter transactions by a specified date range.

### Bonus Points (Optional):
- [ ] Implement pagination
     - to show a limited number of transactions per page.
- [ ] Add sorting functionality to allow sorting transactions 
     - by date or amount.
- [ ] Create a summary section that displays, for the selected date range:
     - [ ] the total number of transactions 
     - [ ] the total transaction amount 

### Constraints:
- Third-party APIs are not allowed. You must use a mock API for data.
- You can use any libraries or packages you find suitable for this task.
- The application should be designed with best practices for performance, maintainability, and scalability in mind.

### Evaluation Criteria:
- [ ] Code organization and structure.
- [ ] Correctness and functionality of the application.
- [ ] Proper error handling and user feedback.
- [ ] Code quality, adherence to TypeScript best practices, and readability.
- [ ] Responsive and visually appealing user interface.

---

## Running the project
- Run, in the root of the project:
  - `./run.sh`
- Follow the instructions on the script output

