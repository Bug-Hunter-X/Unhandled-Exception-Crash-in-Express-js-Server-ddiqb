const express = require('express');
const app = express();

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.get('/', async (req, res) => {
  try {
    await someAsyncOperation();
    res.send('Hello, world!');
  } catch (err) {
    // This will be handled by the error handling middleware
    next(err);
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

async function someAsyncOperation() {
  await new Promise((resolve, reject) => {
    const random = Math.random();
    if (random < 0.5) {
      reject(new Error('Something went wrong!'));
    } else {
      resolve();
    }
  });
}