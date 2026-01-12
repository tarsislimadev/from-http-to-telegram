# Project Overview

This project is a Node.js application that acts as a bridge between HTTP requests and the Telegram Bot API. It exposes an HTTP endpoint that receives POST requests and forwards the data to a specified Telegram chat. This is useful for receiving notifications from webhooks or other services that can send HTTP requests.

The application is built with Express.js and uses the `node-fetch` library to communicate with the Telegram API.

## Building and Running

To run this project, you need to have Node.js and npm installed.

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Set environment variables:**
    Before running the application, you need to set the following environment variables:
    *   `TELEGRAM_TOKEN`: Your Telegram bot token.
    *   `TELEGRAM_CHAT_ID`: The ID of the Telegram chat where you want to receive messages.

3.  **Run the application:**
    ```bash
    npm start
    ```
    The application will start and listen for incoming HTTP requests on the port specified in the `bin/www` file (default is 3000).

## Development Conventions

The codebase is written in JavaScript (ES6) and follows standard Node.js conventions. The code is not using any linter or formatter, so it is recommended to add one to maintain the code quality.

The project does not have any tests, so it is recommended to add a testing framework like Jest or Mocha to ensure the application is working as expected.
