                                              # React User Management Application

This is a React-based user management application that allows you to add users, view a list of users, and interact with a counter and a rich text editor.
The application is designed to work with a Spring Boot backend for data persistence.

## Features

- **User Management**: Add users with details such as name, address, email, and phone number.
- **Counter**: A simple counter that increments, decrements, and resets. The background color changes based on the counter value.
- **Rich Text Editor**: A rich text editor powered by ReactQuill for creating and editing formatted text.
- **Auto-Increment Counter**: The counter automatically increments when a new user is added.

## Prerequisites

- Node.js and npm installed on your machine.
- A running Spring Boot backend server (API endpoint: `http://localhost:8080/api/users`).

# Install dependencies:

npm install
mvn install

# Start the development server:

npm start
npm run dev
mvn spring-boot:run
Ensure your Spring Boot backend is running on http://localhost:8080.

# Usage

Add User: Fill out the form in the "Add User" section and click "Add User" to submit the data to the backend.
View Users: The list of users is displayed in a table format.
Counter: Use the "+", "-", and "Reset" buttons to interact with the counter.
Rich Text Editor: Use the editor to create and format text.
