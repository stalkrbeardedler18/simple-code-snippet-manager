const express = require('express');

const app = express();
app.use(express.json());

// Connect to MongoDB
const mongoose = require('mongoose');
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/snippets', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
    console.log('MongoDB connected...');
  } catch (err) {
    console.error(err);
    process.exit(1); // Exit process with failure
  }
};
connectDB();

app.get('/', (req, res) => {
  res.send('Welcome to the Simple Code Snippet Manager!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});