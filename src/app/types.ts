export interface User {
  name: string;
  age: number;
  avatar: string;
}

export type AppData = {
  users: User[];
  filteredUsers: User[];
  selectedUser: User | null;
};

export interface IComponent {
  render(data?: any, selector?: string): void;
  addEvents(): void;
}
