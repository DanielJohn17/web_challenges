import { createContext } from 'react';

export type User = {
  id: string;
  name: string;
  email: string;
  role: string;
};

export const UserContext = createContext<User | undefined>(undefined);
