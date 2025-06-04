interface User {
  id: number;
  firstName: string;
  lastName: string;
  identification: string;
  email: string;
  roleId: number;
}

let users: User[] = [];
let nextId = 1;

export const UserRepository = {
  getAll: () => users,
  add: (user: Omit<User, "id">) => {
    const newUser = { id: nextId++, ...user };
    users.push(newUser);
    return newUser;
  },
};
