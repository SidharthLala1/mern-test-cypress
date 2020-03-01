# MERN Stack Todo Application

A Mongo + Express + React + Node.js Todo list application (and Node.js backend). Originally cloned from https://github.com/Azure-Samples/applicationinsights-mern-todo

## Requirements

- A local mongoDB server, use MongoDB Compass or run `mongod` in your terminal, make sure it's using port 27017 (the default port)
- You must be running inside a POSIX-compliant shell (usually Linux, Mac, WSL under windows). Windows (non-WSL) is not supported
- Ater sucessful installtion of the MongoDB. To start the mongo db on default port by open CMD and copy the path Go to "C:\Program Files\MongoDB\Server\4.0\bin\mongo.exe" and run it into CMD. You should see Mongo running in the below screen shot.

## Running the App

- First start your local mongo server. Make sure to install and run mongodb on port 27017 before starting the backend

- Navigate to the top-level folder and run `npm install`, this will install dependencies for both the frontend and backend projects. Alternatively, you can run this

- You can then run `npm start` and `npm run start` in two separate terminals to run both the backend and frontend respectively

## Running the tests

- Navigate to the top-level folder and run `npm test`, this will start both backend and frontend and run the sample cypress test. 
-To Run the API Test written in the backend folder under tests folder. 
 1. Stop the backend server.
 2. Navigate to folder backend > tests
 3. In terminal run 'npm run cypress run
