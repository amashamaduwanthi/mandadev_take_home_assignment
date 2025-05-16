const express = require('express');
const cors = require('cors');
require('dotenv').config();

const loginRoutes = require('./routes/login');
const accountRoutes = require('./routes/account');
const authRoutes = require('./routes/auth');

const app = express();
const port = process.env.PORT || 5000;
const connectDB = require('./config/db');
connectDB();

// Middleware

app.use(
    cors(
        {
          origin:'http://localhost:5173',
          credentials:true,
          methods:['GET','POST','PUT','DELETE'],
          allowedHeaders:['Content-Type', 'Authorization']
        }
    )
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/login', loginRoutes);
app.use('/api/account', accountRoutes);
app.use('/api/auth', authRoutes);

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the backend API' });
});


// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

