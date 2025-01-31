import { createContext } from 'react';

export const subscriptionContext = createContext({
  user: null,
  plan: null,
  addOns: null,
  isYearly: false,
  handleNextStep: () => {},
  handleBackStep: () => {},
});
