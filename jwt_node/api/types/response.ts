export type NewUserType = {
  name: string;
  email: string;
  role: 'admin' | 'customer';
};

export type ErrorType = {
  message: string | string[];
};
