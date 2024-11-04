# Task 1: API with AWS S3 in Node.js

This project is a simple web service that allows users to store and retrieve JSON data in an AWS S3 bucket. The service provides two endpoints: one for storing JSON data (POST) and another for retrieving all stored JSON data (GET).

## Features

- **POST /store**: Stores JSON data in an S3 bucket and returns the file's e_tag and S3 link.
- **GET /retrieve**: Retrieves all JSON data files from the S3 bucket and compiles them into a single JSON response.

## Technologies

- **Node.js**: Backend framework.
- **Express**: API framework for Node.js.
- **AWS SDK**: Interacts with AWS S3.
- **AWS S3**: Cloud storage service for storing JSON files.

## Prerequisites

- **AWS Account**: You need access to an AWS account with permissions to create an S3 bucket.
- **Node.js and NPM**: Make sure Node.js and npm are installed on your machine.

## Setup

1. Clone this repository and navigate to the project folder.

   ```bash
   git clone <repository-url>
   cd project-folder
npm install


AWS.config.update({
  region: 'your-region',
  accessKeyId: 'YOUR_ACCESS_KEY_ID',
  secretAccessKey: 'YOUR_SECRET_ACCESS_KEY'
});



---

### Task 2: README.md (Event Scheduler with Node.js and Angular)

```markdown
# Task 2: Event Scheduler with Node.js and Angular

This project implements a daily event scheduler with Node.js and Angular. It includes a backend Scheduler class to manage event scheduling and an Angular front-end UI to interact with it. Events are scheduled within a 24-hour period (0–23 format), and overlapping events are not allowed.

## Features

- **addEvent**: Adds a new event if there are no overlaps.
- **getEvents**: Retrieves all scheduled events.
- **Angular UI**: Allows users to input event start and end times, and displays all scheduled events.

## Technologies

- **Node.js**: Backend logic for event scheduling.
- **Angular**: Frontend interface for user interaction and event management.

## Project Structure


## Prerequisites

- **Node.js and NPM**: Required for the backend.
- **Angular CLI**: Install Angular CLI to manage the frontend.

## Backend Setup

1. Navigate to the `server` folder and install dependencies:

   ```bash
   npm install

node index.js


Thought Process
Scheduler Logic:
Used a class to handle adding events and checking for overlaps.
Implemented error handling to manage invalid or overlapping times.

Angular UI:
Designed a simple form for user input.
Displayed events in a list format to make it easy to see the schedule.
