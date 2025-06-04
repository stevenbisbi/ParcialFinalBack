import { Request, Response } from "express";
import { roles } from "../data/db";

export const addRole = (req: Request, res: Response) => {
  const { name, description } = req.body;

  if (!name) {
    res.status(400).json({ message: "El nombre del rol es requerido." });
    return;
  }

  const newRole = { id: roles.length + 1, name, description };
  roles.push(newRole);
  res.status(201).json(newRole);
};

export const getRoles = (_req: Request, res: Response) => {
  res.json(roles);
};
