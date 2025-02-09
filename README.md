# Unhandled Exception Crash in Express.js Server

This repository demonstrates a common, yet easily overlooked, error in Express.js applications: unhandled exceptions within asynchronous request handlers.  When an asynchronous operation within a route handler throws an error and that error is not properly handled, the entire server process can crash silently, leading to downtime and debugging challenges.

The `bug.js` file shows the problematic code. The `bugSolution.js` file presents a corrected version.

## Problem
The issue lies in the incomplete error handling within the `someAsyncOperation()` function and the lack of a top-level error handler for the Express app. An unhandled exception occurring in the asynchronous operation will cause the server to terminate abruptly.