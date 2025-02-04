import { IconOnline, IconBudgeting, IconOnBoarding, IconApi } from '../assets';

export const features = [
  {
    icon: IconOnline,
    title: 'Online Banking',
    description:
      'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.',
  },
  {
    icon: IconBudgeting,
    title: 'Simple Budgeting',
    description:
      'See exactly where your money goes each month. Receive notifications when you&#39;re close to hitting your limits.',
  },
  {
    icon: IconOnBoarding,
    title: 'Fast Onboarding',
    description:
      'We don&#39;t do branches. Open your account in minutes online and start taking control of your finances right away.',
  },
  {
    icon: IconApi,
    title: 'Open API',
    description:
      'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.',
  },
] as const;
