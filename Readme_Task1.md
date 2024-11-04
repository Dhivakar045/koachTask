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
