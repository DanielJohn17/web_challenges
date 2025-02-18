export type ResponseUserType = {
  name: string;
  email: string;
  role: 'admin' | 'customer';
};

export type ErrorType = {
  message: string | string[];
};
