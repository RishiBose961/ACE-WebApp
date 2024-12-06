import express, { Application, Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
import prisma from "./config/prisma.js";

import userRoutes from './routes/user.routes.js'

const app: Application = express();
const PORT = process.env.PORT || 5000;

// * Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



// Example route to test the database
app.get('/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).send('An error occurred');
  }
});

app.use('/api',userRoutes)

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
