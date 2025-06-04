import { Request, Response } from "express";
import { roles, users } from "../data/db";

export const addUser = (req: Request, res: Response) => {
  const { firstName, lastName, idNumber, email, roleId } = req.body;

  if (!firstName || !lastName || !idNumber || !email || !roleId) {
    res.status(400).json({ message: "Todos los campos son requeridos." });
    return; // Solo usa return para salir temprano, sin devolver res
  }

  const roleExists = roles.find((r) => r.id === roleId);
  if (!roleExists) {
    res.status(400).json({ message: "El rol no existe." });
    return;
  }

  const newUser = {
    id: users.length + 1,
    firstName,
    lastName,
    idNumber,
    email,
    roleId,
  };

  users.push(newUser);
  res.status(201).json(newUser); // Sin return
};

export const getUsers = (_req: Request, res: Response) => {
  const response = users.map((user) => {
    const role = roles.find((r) => r.id === user.roleId);
    return {
      name: `${user.firstName} ${user.lastName}`,
      role: role?.name || "Sin rol",
    };
  });

  res.json(response); // Sin return
};
