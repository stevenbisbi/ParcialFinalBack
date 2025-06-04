interface Role {
  id: number;
  name: string;
  description?: string;
}

let roles: Role[] = [];
let nextId = 1;

export const RoleRepository = {
  getAll: () => roles,
  add: (role: Omit<Role, "id">) => {
    const newRole = { id: nextId++, ...role };
    roles.push(newRole);
    return newRole;
  },
};
