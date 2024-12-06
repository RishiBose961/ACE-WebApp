import { Request, Response } from "express";

import prisma from "../config/prisma.js";
import { randomBytes } from "crypto";
import { hashPassword } from "../utils/hashpassword.util.js";
import jwt from "jsonwebtoken";

export const registerUser = async (req: Request, res: Response) => {
  const { username, name, email, password } = req.body;

  try {
    if (!username || !name || !email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const existingUser = await prisma.user.findUnique({
      where: { username },
    });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }

    const salt = randomBytes(16).toString("hex");

    const hashedPassword = await hashPassword(password, salt);

    // Create the user in the database
    const newUser = await prisma.user.create({
      data: {
        username,
        name,
        email,
        salt,
        password: hashedPassword,
      },
    });

    // Return success response
    return res.status(201).json({
      message: "User registered successfully.",
      user: {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error("Error registering user:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    return res.status(400).json("User Not Found");
  }

  const hashedPassword = await hashPassword(password, user.salt);

  if (hashedPassword === user.password) {
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "6m",
    });
    res.status(201).json({
      token,

      _id: user.id,
      name: user.name,
      email: user.email,
      message: "Login successful",
    });
  } else {
    res.status(400).json({ error: "Invalid email or password" });
  }
};

export const Profile = async (req: Request, res: Response) => {
  try {
    if (!req.user || !req.user.id) {
      return res
        .status(401)
        .json({ error: "Unauthorized access - User not found in request" });
    }

    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Respond with the user's profile data
    res.status(200).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      username: user.username,
    });
  } catch (error: any) {
    console.error("Error in Profile controller:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
