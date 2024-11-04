
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